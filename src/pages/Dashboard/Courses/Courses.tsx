import Search, { SearchProps } from "antd/es/input/Search";
import MyTable from "../../../components/Dashboard/Ui/Table/Table";
import { ColumnsType } from "antd/es/table";
import { Badge, Button, Popconfirm, message } from "antd";
import Font from "../../../components/icons/Font";
import {
  useDeleteCourseMutation,
  useGetAlCourseQuery,
} from "../../../redux/api/courses/courseAPI";
import AddNewCourse from "./AddNewCourse";
import ViewCourseDetails from "./ViewCourseDetails";
import { useState } from "react";

interface DataType {
  key: React.ReactNode;
  code: string;
  status: boolean;
  thumbnail: string;
  title: string;
  _id: string;
}

const Courses = () => {
  // User Information
  // const user = getUserInfo();

  //   User Role
  // const role = (user as { role: string }).role;

  // Actions
  const [isEdit, setIsEdit] = useState(false);
  const [isEditData, setIsEditData] = useState({});

  const handleEdit = (record: DataType) => {
    // Handle edit action
    // message.success(`Editing ${record.name}`);
    setIsEdit(!isEdit);
    setIsEditData(record);
  };

  const [deleteCourse] = useDeleteCourseMutation();

  const handleDelete = (record: DataType) => {
    // Handle delete action
    deleteCourse(record._id);
    message.success(`Deleted ${record.title} Course`);
    console.log(record);
  };

  // Table Colmuns
  const columns: ColumnsType<DataType> = [
    {
      title: " ",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (image) => (
        <img src={image} className="h-[40px] w-[60px] " alt="" />
      ),
      width: "90px",
    },
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Course Code",
      dataIndex: "code",
      key: "code",
    },

    {
      title: "Status:",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status ? (
          <Badge
            className="site-badge-count-109"
            count={"Active"}
            style={{ backgroundColor: "#52c41a" }}
          />
        ) : (
          <Badge
            className="site-badge-count-109"
            count={"In Active"}
            style={{ backgroundColor: "#f55951" }}
          />
        ),
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
  const { data: coursesData } = useGetAlCourseQuery(undefined);

  if (coursesData?.length > 0) {
    coursesData.map((course: any) => {
      tableData.push({
        code: course.code,
        title: course.title,
        key: course._id,
        status: course.status,
        thumbnail: course.thumbnail,
        _id: course._id,
      });
    });
  }

  // Filter data based on searchVal
  const filteredData = tableData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      item.code.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="shadow p-4">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-semibold text-secondary">Courses</h2>
            <div>
              <AddNewCourse />
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
      <div>
        {isEdit && (
          <ViewCourseDetails isEdit={isEdit} isEditData={isEditData} />
        )}
      </div>
    </div>
  );
};

export default Courses;
