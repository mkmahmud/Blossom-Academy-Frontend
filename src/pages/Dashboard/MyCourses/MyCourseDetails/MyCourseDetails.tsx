import { Link, useParams } from "react-router-dom";
import { useGetBatchQuery } from "../../../../redux/api/batch/batchAPI";
 import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import MyTable from "../../../../components/Dashboard/Ui/Table/Table";
import MainButton from "../../../../components/Buttons/MainButton";

const MyCourseDetails = () => {
  // Get Batch Id
  const { id } = useParams();

  // Get Single Batch Details
  const { data } = useGetBatchQuery(id);

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

  // Set Details
  useEffect(() => {
    setDetails(data);
  }, [data]);

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
      render: (text, record) => <Link to={`/p/${record.userId}`}>{text}</Link>,
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

  return (
    <div>
      <div className="border-2 border-primary  ">
        <h1 className="p-2 text-xl font-semibold">{data?.title}</h1>
        <div className="p-2 border-t-2 border-primary flex items-center justify-between">
          <h2 className="text-lg">
            Start Time: <span className="font-semibold">{data?.session}</span>
          </h2>
          <div>
            <MainButton
              path="/dashboard/class-room"
              type="button"
              content="Join The Class"
            />
          </div>
        </div>
      </div>

      <div>
        {details && (
          <div>
            <div className="w-full shadow p-4 border-secondary  ">
              <div className="px-2 flex justify-between  ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                  <div>
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
                      <button className="">Students</button>
                    </div>
                  </div>
                  <div>
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
                      <button className="">Teachers</button>
                    </div>
                  </div>
                  <div>
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
                      <button className="">Courses</button>
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

export default MyCourseDetails;
