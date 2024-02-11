import { useState } from "react";
import { Button, Drawer, Select, SelectProps, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import { Controller, useForm } from "react-hook-form";
import { useAddCourseIntoBatchMutation } from "../../../redux/api/batch/batchAPI";
import Font from "../../../components/icons/Font";
import { useGetAlCourseQuery } from "../../../redux/api/courses/courseAPI";

const AddCourse = ({ batchId }: any) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  type Inputs = {
    courseId: string;
    batchId?: string;
  };

  //   Get students Data
  const { data } = useGetAlCourseQuery(undefined);

  // Handel Create Course
  const [addCourseIntoBatch] = useAddCourseIntoBatchMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    data.batchId = batchId;
    const res = await addCourseIntoBatch(data).unwrap();

    if (res?._id) {
      message.success("Course added successfully");
      reset();
    }

    if (res === "Course already exists") {
      message.error("Course already exists");
    }
  };

  //   Modify Options Value
  const options: SelectProps["options"] = [];

  data &&
    data.map((d: { title: string; _id: string; code: string }) => {
      options.push({
        label: (
          <>
            {d.title} {` (${d.code})`}
          </>
        ),
        value: d._id,
      });
    });

  return (
    <>
      <div onClick={showDrawer}>
        {/* <CustomButton content="Add New Batch" icon="fa-users " />
         */}

        <Button className="my-2 w-full">
          <span className="mx-2">Add Course</span> <Font iconName="fa-plus" />
        </Button>
      </div>

      <Drawer
        title="Add Course Into Batch"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Course:</p>
            <Controller
              rules={{ required: "Student is required" }}
              control={control}
              name="courseId"
              render={({ field }) => (
                <Select
                  showSearch
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select Course"
                  options={options}
                  {...field}
                />
              )}
            />

            {errors.courseId && <span>{errors.courseId.message}</span>}
          </div>

          <div className="flex justify-center w-full my-4">
            <CustomButton type='submit' content="Add Course" icon="fa-paper-plane" />
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default AddCourse;
