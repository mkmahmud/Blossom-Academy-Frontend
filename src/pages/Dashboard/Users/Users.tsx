import Search, { SearchProps } from "antd/es/input/Search";

import { Button, Modal, Popconfirm, Select, message } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import { useUserRegistrationMutation } from "../../../redux/api/auth/authAPI";
import { getUserInfo } from "../../../services/authService";
import MyTable from "../../../components/Dashboard/Ui/Table/Table";
import Font from "../../../components/icons/Font";
import { ColumnsType } from "antd/es/table";
import { useGetAllStudentsQuery } from "../../../redux/api/users/usersAPI";

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
interface DataType {
  key: React.ReactNode;
  userId: string;
  fullName: string;
  role: string;
  email: string;
  _id: string;
}

const Users = () => {
  // User Information
  const user = getUserInfo();
  // Actions
  const [isEdit, setIsEdit] = useState(false);
  const [, setIsEditData] = useState({});
  const handleEdit = (record: DataType) => {
    // Handle edit action
    // message.success(`Editing ${record.name}`);
    setIsEdit(!isEdit);
    setIsEditData(record);
  };

  const handleDelete = (record: DataType) => {
    // Handle delete action
    message.success(`Deleted ${record.fullName} Course`);
    console.log(record);
  };

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

  // Table Colmuns
  const columns: ColumnsType<DataType> = [
    {
      title: "User Id ",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <span>
          <Button
            className="bg-primary text-white"
            onClick={() => handleEdit(record)}
          >
            <Font iconName="fa-eye" />
          </Button>
          <Popconfirm
            title="Are you sure to delete this item?"
            onConfirm={() => handleDelete(record)}
            okText="Ok"
            cancelText="No"
          >
            <Button className="bg-white text-primary">
              {" "}
              <Font iconName="fa-trash" />
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  let tableData: DataType[] = [];

  const [searchVal, setSearchVal] = useState("");
  const onSearch: SearchProps["onSearch"] = (value, _e) => setSearchVal(value);
  // Data
  const { data: studentsData } = useGetAllStudentsQuery(undefined);

  if (studentsData?.length > 0) {
    studentsData.map((student: any) => {
      tableData.push({
        fullName: student.code,
        userId: student.title,
        key: student._id,
        role: student.role,
        email: student.status,
        _id: student._id,
      });
    });
  }

  // Filter data based on searchVal
  const filteredData =
    studentsData &&
    studentsData.filter(
      (item: { fullName: string; userId: string }) =>
        item.fullName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.userId.toLowerCase().includes(searchVal.toLowerCase())
    );

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
          <div className="my-4 ease-in-out duration-300  ">
            <p>Serach User by Corse Name or Course Code </p>
            <div className="flex items-center w-full">
              <Search
                placeholder="Type Course Code Or Course Name "
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
              {searchVal && (
                <div className="mx-4 ease-in-out duration-300  ">
                  <Button
                    type="default"
                    color="primary"
                    onClick={() => setSearchVal("")}
                  >
                    <Font iconName="fa-rotate-right" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-4 p-4 ">
          <MyTable data={filteredData} columns={columns} pageSize="5" />
        </div>
      </div>

      {/* Add New User  */}
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
              <CustomButton type="submit" content="Add User" icon="fa-paper-plane" />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
