import CountDownMinute from "../../../../helpers/CountDown/CountDownMinute";
import MainButton from "../../../Buttons/MainButton";

const ActiveExamShortCard = () => {
  return (
    <div className="  border border-primary max-w-[300px]">
      <div className="bg-primary text-white">
        <div className="text-xl font-semibold text-center py-2 border-b border-primary">
          <CountDownMinute initialMinutes={710} />
        </div>
      </div>
      <div className="bg-secondary text-white">
        <h2 className="text-lg font-semibold text-center py-2 border-b border-primary">
          Exam 1
        </h2>
      </div>
      <div>
        <p className="p-2 flex justify-between border-b border-primary">
          <span>Total Marks</span> <span className="font-semibold">100</span>
        </p>
        <p className="p-2 flex justify-between border-b border-primary">
          <span>Total Time</span> <span className="font-semibold">40m</span>
        </p>
        <p className="p-2 flex justify-between border-b border-primary">
          <span>MCQ</span> <span className="font-semibold">10</span>
        </p>
        <p className="p-2 flex justify-between border-b border-primary">
          <span>CQ</span> <span className="font-semibold">N/A</span>
        </p>
        <p className="p-2 flex justify-between border-b border-primary">
          <span>Opened</span> <span className="font-semibold">10:00 AM</span>
        </p>
        <div className="my-2 flex justify-center">
          <MainButton path="/exam/details" content="Enter Exam Center" />
        </div>
      </div>
    </div>
  );
};

export default ActiveExamShortCard;
