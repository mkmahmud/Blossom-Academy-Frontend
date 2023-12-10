import Search, { SearchProps } from "antd/es/input/Search";

import { Modal, Select, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import { useUserRegistrationMutation } from "../../../redux/api/auth/authAPI";
import { getUserInfo } from "../../../services/authService";

const { Option } = Select;

// const handleEdit = (record: DataType) => {
//   // Handle edit action
//   // message.success(`Editing ${record.name}`);
//   console.log(record);
// };

// const handleDelete = (record: DataType) => {
//   // Handle delete action
//   // message.success(`Deleting ${record.name}`);
//   console.log(record);
// };

// interface DataType {
//   key: React.ReactNode;
//   name: string;
//   role: string;
//   age: number;
//   country: string;
//   profileImage: string;
//   address: string;
//   children?: DataType[];
// }

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  role?: string;
};

const Users = () => {
  // User Information
  const user = getUserInfo();

  //   User Role
  const role = (user as { role: string }).role;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  // Handel Create user
  const [userRegistration] = useUserRegistrationMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    const res = await userRegistration(data).unwrap();
    if (res?.message === "Success") {
      message.success("Registration successful");
      setIsModalOpen(false);

      reset();
    } else if (res?.message === "user already exists") {
      message.error("User Already Registered By this email");
    }
  };

  return (
    <div>
      <div>
        <div className="shadow p-4">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-semibold text-secondary">Users</h2>
            <div onClick={showModal}>
              <CustomButton content="Add New User" icon="fa-user-plus" />
            </div>
          </div>
          <div className="my-4">
            <p>Serach User by Email </p>
            <Search
              placeholder="Type User Email Address"
              className="my-1 text-lg "
              allowClear
              enterButton={
                <button className="bg-primary text-white px-4 py-2 rounded-full text-lg">
                  Search
                </button>
              }
              size="large"
              onSearch={onSearch}
            />
          </div>
        </div>
        <div className="my-4 p-4 ">
          {/* <MyTable data={data} columns={columns} pageSize="5" /> */}
        </div>
      </div>
      <div>
        <Modal
          title="Add User"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              name="fullName"
              placeholder="Full Name  "
              errors={errors}
              control={control}
            />

            <div className="py-2 max-w-[450px] text-lg">
              <p className="my-2 text-secondary">Role:</p>
              <Controller
                rules={{ required: "Role is required" }}
                control={control}
                name="role"
                render={({ field }) => (
                  <Select className="w-full" {...field}>
                    {role === "super_admin" ? (
                      <>
                        <Option value="admin">Admin</Option>
                        <Option value="management">Management</Option>
                        <Option value="teacher">Teacher</Option>
                      </>
                    ) : (
                      <>
                        <Option value="management">Management</Option>
                        <Option value="teacher">Teacher</Option>
                      </>
                    )}
                  </Select>
                )}
              />
              {errors.role && <span>{errors.role.message}</span>}
            </div>
            <CustomInput
              name="email"
              placeholder="Email Address"
              errors={errors}
              control={control}
            />
            <CustomInput
              name="password"
              placeholder="Password  "
              errors={errors}
              control={control}
              type="password"
            />

            <div className="flex justify-center w-full my-4">
              <CustomButton content="Add User" icon="fa-paper-plane" />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
