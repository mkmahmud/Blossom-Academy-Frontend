import { useState } from "react";
import { Drawer, Select, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import { Controller, useForm } from "react-hook-form";
import { useCreatebatchMutation } from "../../../redux/api/batch/batchAPI";
const { Option } = Select;

const AddNewBatch = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  type Inputs = {
    title: string;
    status: boolean;
    category: string;
    startTime: string;
    session: string;
    thambnail: string;
    studentsId: [];
    teachersId: [];
    courseId: [];
  };

  // Handel Create Course
  const [createbatch] = useCreatebatchMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
     data.studentsId = [];
    data.teachersId = [];
    data.courseId = [];

    const res = await createbatch(data).unwrap();

    if (res?._id) {
      message.success("Batch added successfully");
      reset();
    }
  };

  return (
    <>
      <div onClick={showDrawer}>
        <CustomButton content="Add New Batch" icon="fa-users " />
      </div>

      <Drawer
        title="Add New Batch"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            name="title"
            placeholder="Batch Name"
            errors={errors}
            control={control}
          />

          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Category:</p>
            <Controller
              rules={{ required: "Category is required" }}
              control={control}
              name="category"
              render={({ field }) => (
                <Select className="w-full" {...field}>
                  <Option value="Regular">Regular</Option>
                  <Option value="Online">Online</Option>
                </Select>
              )}
            />
            {errors.category && <span>{errors.category.message}</span>}
          </div>

          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Status:</p>
            <Controller
              rules={{ required: "Status is required" }}
              control={control}
              defaultValue={true}
              name="status"
              render={({ field }) => (
                <Select className="w-full" {...field}>
                  <Option value={true}>Active</Option>
                  <Option value={false}>InActive</Option>
                </Select>
              )}
            />
            {errors.status && <span>{errors.status.message}</span>}
          </div>
          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Start Date:</p>
            <Controller
              rules={{ required: "Start Date is required" }}
              control={control}
              name="startTime"
              render={({ field }) => (
                <Select className="w-full" {...field}>
                  <Option value="January">January</Option>
                  <Option value="February">February</Option>
                  <Option value="March">March</Option>
                  <Option value="April">April</Option>
                  <Option value="May">May</Option>
                  <Option value="June">June</Option>
                  <Option value="July">July</Option>
                  <Option value="August">August</Option>
                  <Option value="September">September</Option>
                  <Option value="October">October</Option>
                  <Option value="November">November</Option>
                  <Option value="December">December</Option>
                </Select>
              )}
            />
            {errors.startTime && <span>{errors.startTime.message}</span>}
          </div>
          <CustomInput
            name="thambnail"
            placeholder="Enter Thambnail URL"
            errors={errors}
            control={control}
          />
          <div className="py-2 max-w-[450px] text-lg">
            <p className="my-2 text-secondary">Slot:</p>
            <Controller
              rules={{ required: "Slot is required" }}
              control={control}
              name="session"
              render={({ field }) => (
                <Select className="w-full" {...field}>
                  <Option value="10 AM">10 AM</Option>
                  <Option value="12 PM">12 PM</Option>
                  <Option value="06 PM">06 PM</Option>
                  <Option value="09 PM">09 PM</Option>
                </Select>
              )}
            />
            {errors.session && <span>{errors.session.message}</span>}
          </div>
          {/* 
          <CustomInput
            name="thumbnail"
            placeholder="thumbnail"
            errors={errors}
            control={control}
          /> */}

          <div className="flex justify-center w-full my-4">
            <CustomButton type='submit' content="Add Batch" icon="fa-paper-plane" />
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default AddNewBatch;
