import { useState } from "react";
import { Drawer, Select, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import { useCreateCourseMutation } from "../../../redux/api/courses/courseAPI";
import { Controller, useForm } from "react-hook-form";
const { Option } = Select;

const AddNewCourse = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  type Inputs = {
    title: string;
    code: string;
    status: boolean;
    thumbnail: string;
  };

  // Handel Create Course
  const [createCourse] = useCreateCourseMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    const res = await createCourse(data).unwrap();

    if (res?._id) {
      message.success("Course added successfully");
      reset();
    }
  };

  return (
    <>
      <div onClick={showDrawer}>
        <CustomButton content="Add New Course" icon="fa-book " />
      </div>

      <Drawer
        title="Add New Course"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            name="title"
            placeholder="Title"
            errors={errors}
            control={control}
          />

          <CustomInput
            name="code"
            placeholder="Course Code"
            errors={errors}
            control={control}
          />

          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Status:</p>
            <Controller
              rules={{ required: "Status is required" }}
              control={control}
              name="status"
              render={({ field }) => (
                <Select className="w-full" {...field}>
                  <Option value={true}>Active</Option>
                  <Option value={!true}>InActive</Option>
                </Select>
              )}
            />
            {errors.status && <span>{errors.status.message}</span>}
          </div>

          <CustomInput
            name="thumbnail"
            placeholder="thumbnail"
            errors={errors}
            control={control}
          />

          <div className="flex justify-center w-full my-4">
            <CustomButton content="Add Course" icon="fa-paper-plane" />
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default AddNewCourse;
