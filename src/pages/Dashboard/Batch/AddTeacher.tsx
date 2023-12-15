import { useState } from "react";
import { Button, Drawer, Select, SelectProps, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import { Controller, useForm } from "react-hook-form";
import { useAddTeacherIntoBatchMutation } from "../../../redux/api/batch/batchAPI";
import Font from "../../../components/icons/Font";
import { useGetAllTeachersQuery } from "../../../redux/api/users/usersAPI";

const AddTeacher = ({ batchId }: any) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  type Inputs = {
    teacherId: string;
    batchId?: string;
  };

  //   Get students Data
  const { data } = useGetAllTeachersQuery(undefined);
  // Handel Create Course
  const [addTeacherIntoBatch] = useAddTeacherIntoBatchMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    data.batchId = batchId;
    const res = await addTeacherIntoBatch(data).unwrap();

    if (res?._id) {
      message.success("Teacher added successfully");
      reset();
    }

    if (res === "Teacher already exists") {
      message.error("Teacher already exists");
    }
  };

  //   Modify Options Value
  const options: SelectProps["options"] = [];

  data &&
    data.map((d: { fullName: string; _id: string; userId: string }) => {
      options.push({
        label: <>{d.fullName}</>,
        value: d._id,
      });
    });

  return (
    <>
      <div onClick={showDrawer}>
        {/* <CustomButton content="Add New Batch" icon="fa-users " />
         */}

        <Button className="my-2 w-full">
          <span className="mx-2">Add Teacher</span> <Font iconName="fa-plus" />
        </Button>
      </div>

      <Drawer
        title="Add Teacher Into Batch"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Teachers:</p>
            <Controller
              rules={{ required: "Teachers is required" }}
              control={control}
              name="teacherId"
              render={({ field }) => (
                <Select
                  showSearch
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select Teacher"
                  options={options}
                  {...field}
                />
              )}
            />

            {errors.teacherId && <span>{errors.teacherId.message}</span>}
          </div>

          <div className="flex justify-center w-full my-4">
            <CustomButton content="Add Teacher" icon="fa-paper-plane" />
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default AddTeacher;
