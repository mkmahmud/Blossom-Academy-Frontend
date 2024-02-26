import { useState } from "react";
import { useGetStudentEnrolledBatchQuery } from "../../../redux/api/batch/batchAPI";
import { getUserInfo } from "../../../services/authService";
import StudentEnrolledCard from "../../../components/Dashboard/Ui/Card/StudentEnrolledCard/StudentEnrolledCard";
import Empty from "../../../components/Dashboard/Ui/Empty/Empty";

const MyCourses = () => {
  // Set Active button
  const [active, setActive] = useState(true);

  const user = getUserInfo();

  //   Get enrolled batch details
  //@ts-ignore
  const { data } = useGetStudentEnrolledBatchQuery(user?._id);
  return (
    <div>
      {/* Select Course */}
      <div className="md:flex justify-around border border-1 border-primary">
        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`${
            active ? "bg-primary text-white" : "text-black"
          }  w-full py-2 `}
        >
          Live Course
        </button>
        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`${
            active ? "text-black" : "bg-primary text-white"
          }  w-full py-2 `}
        >
          Online Course
        </button>
      </div>

      {/* Display Live course */}
      {active && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {data &&
            data.map((d: any) => <StudentEnrolledCard key={d._id} data={d} />)}
        </div>
      )}

      {/* Online Course */}
      {!active && <Empty content="No Data Available" />}
    </div>
  );
};

export default MyCourses;
