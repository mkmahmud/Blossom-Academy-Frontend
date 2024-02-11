import { useState } from "react";
import { Button, Drawer, Select, SelectProps, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import { Controller, useForm } from "react-hook-form";
import { useAddStudentIntoBatchMutation } from "../../../redux/api/batch/batchAPI";
import Font from "../../../components/icons/Font";
import { useGetAllStudentsQuery } from "../../../redux/api/users/usersAPI";

const AddStudent = ({ batchId }: any) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  type Inputs = {
    studentId: string;
    batchId?: string;
  };

  //   Get students Data
  const { data } = useGetAllStudentsQuery(undefined);
  // Handel Create Course
  const [addStudentIntoBatch] = useAddStudentIntoBatchMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    data.batchId = batchId;
    const res = await addStudentIntoBatch(data).unwrap();

    if (res?._id) {
      message.success("Student added successfully");
      reset();
    }

    if (res === "student already exists") {
      message.error("student already exists");
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
          <span className="mx-2">Add Student</span> <Font iconName="fa-plus" />
        </Button>
      </div>

      <Drawer
        title="Add Student Into Batch"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Students:</p>
            <Controller
              rules={{ required: "Student is required" }}
              control={control}
              name="studentId"
              render={({ field }) => (
                <Select
                  showSearch
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select Student"
                  options={options}
                  {...field}
                />
              )}
            />

            {errors.studentId && <span>{errors.studentId.message}</span>}
          </div>

          <div className="flex justify-center w-full my-4">
            <CustomButton type='submit' content="Add Student" icon="fa-paper-plane" />
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default AddStudent;
