import { useGetStudentEnrolledBatchQuery } from "../../../../../redux/api/batch/batchAPI";
import { getUserInfo } from "../../../../../services/authService";
import Font from "../../../../icons/Font";
import CustomButton from "../../../../Buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import MainButton from "../../../../Buttons/MainButton";

const LiveCourseCard = ({ data }: any) => {
  const { _id, thambnail, title, studentsId, session, startTime } = data;
  //   User info
  const user = getUserInfo();

  // Navigate
  const navigate = useNavigate();

  //   Get enrolled batch details
  //@ts-ignore
  const { data: batchData } = useGetStudentEnrolledBatchQuery(user?._id);

  const isEnrolled =
    batchData && batchData.some((item: { _id: any }) => item._id === _id);

  const addStudent = async (path: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }

    navigate(path ? path : `/courses/checkout/${_id}`);
  };

  return (
    <div className="md:flex items-center relative  shadow-lg shadow-gray my-10  w-full  ">
      <div>
        <img
          src={thambnail}
          alt="Thumbnail "
          className=" h-[200px] w-[400px]"
        />
      </div>
      <div className="px-2 md:px-8 w-full py-2">
        <div className="  w-full justify-between items-center ">
          <h2 className="text-extraLarge font-semibold">{title}</h2>
          <h2 className="text-extraLarge font-semibold  text-primary">
            {" "}
            <Font iconName="fa-users" /> {studentsId.length}
          </h2>
        </div>
        <h2 className="text-xl">
          Start Date:{" "}
          <span className="text-primary font-semibold ">{startTime}</span>
        </h2>
        <h2 className="text-xl">
          Start Time:{" "}
          <span className="text-primary font-semibold ">{session}</span>
        </h2>
      </div>
      <div
        className="mx-2"
        onClick={() => {
          addStudent(`/dashboard/my-courses/${_id}`);
        }}
      >
        {isEnrolled && (
          <div className="  w-[200px] mt-4">
            <MainButton
              path={`/dashboard/my-courses/${_id}`}
              content="Continue Course"
              icon="fa-arrow-right"
            />
          </div>
        )}
      </div>
      <div
        onClick={() => {
          addStudent("");
        }}
      >
        {!isEnrolled && (
          <CustomButton type="button" content="Enroll" icon="fa-plus" />
        )}
      </div>
    </div>
  );
};

export default LiveCourseCard;
