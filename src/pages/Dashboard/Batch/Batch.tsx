import { Button, message } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import Font from "../../../components/icons/Font";
import { useState } from "react";
import BatchCard from "../../../components/Dashboard/Ui/Card/BatchCard/BatchCard";
import {
  useGetAllBatchQuery,
  useUpdateBatchStatusMutation,
} from "../../../redux/api/batch/batchAPI";
import AddNewBatch from "./AddNewBatch";
import MyTable from "../../../components/Dashboard/Ui/Table/Table";
import { ColumnsType } from "antd/es/table";
import AddStudent from "./AddStudent";
import AddTeacher from "./AddTeacher";
import AddCourse from "./AddCourse";
import Toggle from "../../../components/Dashboard/Ui/Toggle/Toggle";
import MainButton from "../../../components/Buttons/MainButton";

const Batch = () => {
  //   All Batch Data
  const { data } = useGetAllBatchQuery(undefined);

  // Search Value
  const [searchVal, setSearchVal] = useState("");
  const onSearch: SearchProps["onSearch"] = (value, _e) => setSearchVal(value);

  // Filter data based on searchVal
  const filteredData =
    data &&
    data.filter((item: any) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );

  // Details Data
  interface DetailsState {
    title: string;
    category: string;
    startTime: string;
    _id: any;
    status: boolean;
    studentsId: any[];
    courseId: any[];
    teachersId: any[];
  }
  const [details, setDetails] = useState<DetailsState | undefined | null>(
    undefined
  );

  const [selectedTable, setselectedTable] = useState("students");

  type tableType = {
    fullName: string;
    email: string;
    userId: string;
  };

  const columns: ColumnsType<tableType> = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  // Students Data
  let studentsData: { key: any; userId: any; fullName: any; email: any }[] = [];

  if (details && details.studentsId && details.studentsId.length > 0) {
    details.studentsId.map((data: any) => {
      studentsData.push({
        key: data._id,
        fullName: data.id.fullName,
        email: data.id.email,
        userId: data.id.userId,
      });
    });
  }

  // Teachers Data
  let teachersData: { key: any; userId: any; fullName: any; email: any }[] = [];

  if (details && details.teachersId && details?.teachersId?.length > 0) {
    details?.teachersId?.map((data: any) => {
      teachersData.push({
        key: data._id,
        fullName: data.id.fullName,
        email: data.id.email,
        userId: data.id.userId,
      });
    });
  }

  // Course Details Data
  type courseTableType = {
    title: string;
    code: string;
  };

  const courseColumns: ColumnsType<courseTableType> = [
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
  ];

  // Courses Data
  let coursesData: { key: any; title: any; code: any }[] = [];

  if (details && details.courseId && details?.courseId?.length > 0) {
    details?.courseId?.map((data: any) => {
      coursesData.push({
        key: data._id,
        title: data.id.title,
        code: data.id.code,
      });
    });
  }

  const [updateBatchStatus] = useUpdateBatchStatusMutation();

  // Update Batch Status
  const handleBatchStatus = async () => {
    const res = await updateBatchStatus({
      id: details?._id,
      status: !details?.status,
    });

    if (res) {
      message.success("Batch status updated");
    }
  };

  return (
    <div>
      <div>
        {!details && (
          <div className="shadow p-4">
            <div className="flex justify-between items-center ">
              <h2 className="text-xl font-semibold text-secondary">Batch</h2>
              <div>
                <AddNewBatch />
              </div>
            </div>
            <div className="my-4 ease-in-out duration-300  ">
              <p>Serach Batch by Title </p>
              <div className="flex items-center w-full">
                <Search
                  placeholder="Serach Batch by Title "
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
        )}
        <div className="my-4 p-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {filteredData &&
            !details &&
            filteredData.map((batch: any) => (
              <BatchCard key={batch._id} data={batch} setDetails={setDetails} />
            ))}
        </div>
        {/* View Batch Details */}
        {details && (
          <div>
            <Button className="my-4" onClick={() => setDetails(null)}>
              <Font iconName="fa-backward" />
            </Button>
            <div className="w-full shadow p-4 border-secondary  ">
              <div className="flex justify-end mb-10">
                <div>
                  <h2 className="my-2">Batch Status</h2>
                  <div onClick={handleBatchStatus}>
                    <Toggle status={details?.status} />
                  </div>
                </div>
              </div>
              <div className="px-2 flex justify-between  ">
                <div>
                  <h2 className="text-xl font-bold my-2 ">{details.title}</h2>
                  <p className="my-2  font-bold"> {details.category}</p>
                  <p className=" font-bold"> {details.startTime}</p>
                  {/* Batch Schedule */}
                  <div className="mt-4">
                    <MainButton
                      content="Class Schedule"
                      icon="fa-eye"
                      path={`/dashboard/batch/schedule/${details._id}/${details.title}`}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                  <div>
                    <AddStudent batchId={details._id} />
                    <div
                      onClick={() => {
                        setselectedTable("students");
                      }}
                      className={`cursor-pointer    p-2 w-[150px] text-center  border border-primaryHover  shadow-lg shadow-primaryHover ${
                        selectedTable && selectedTable == "students"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      <h2 className="text-xl ">
                        Students <br />{" "}
                        <span className="text-extraLarge font-semibold">
                          {details.studentsId.length}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div>
                    <AddTeacher batchId={details._id} />
                    <div
                      onClick={() => {
                        setselectedTable("teachers");
                      }}
                      className={`cursor-pointer    p-2 w-[150px] text-center  border border-primaryHover  shadow-lg shadow-primaryHover ${
                        selectedTable && selectedTable == "teachers"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      <h2 className="text-xl">
                        Teachers <br />{" "}
                        <span className="text-extraLarge font-semibold">
                          {details.teachersId.length}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div>
                    <AddCourse batchId={details._id} />
                    <div
                      onClick={() => {
                        setselectedTable("courses");
                      }}
                      className={`cursor-pointer    p-2 w-[150px] text-center  border border-primaryHover  shadow-lg shadow-primaryHover ${
                        selectedTable && selectedTable == "courses"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      <h2 className="text-xl">
                        Courses <br />{" "}
                        <span className="text-extraLarge font-semibold">
                          {details.courseId.length}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* View Students Teacher and course */}
            <div>
              {/* Students Table */}
              {selectedTable && selectedTable == "students" && (
                <MyTable columns={columns} data={studentsData} />
              )}
              {/* Teachsers Table */}
              {selectedTable && selectedTable == "teachers" && (
                <MyTable columns={columns} data={teachersData} />
              )}
              {/* Courses Table */}
              {selectedTable && selectedTable == "courses" && (
                <MyTable columns={courseColumns} data={coursesData} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Batch;
