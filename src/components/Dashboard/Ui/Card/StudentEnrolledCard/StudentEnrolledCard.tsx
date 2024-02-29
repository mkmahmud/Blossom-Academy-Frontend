import { Progress } from "antd";
import MainButton from "../../../../Buttons/MainButton";

const StudentEnrolledCard = ({ data }: any) => {
  const { _id, thambnail, title } = data;

  return (
    <div className="  border border-2 border-primary flex p-2 space-x-4">
      <div>
        <img
          src={thambnail}
          alt="Thambnail"
          className="h-[150px] w-[200px] shadow-lg shadow-primary"
        />
      </div>
      <div>
        <h2 className="text-large font-semibold">{title}</h2>
        <Progress className="text-lg" percent={86} status="active" />
        <div className=" mt-4">
          <MainButton
            path={`/dashboard/my-courses/${_id}`}
            content="Continue Course"
            icon="fa-arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentEnrolledCard;
