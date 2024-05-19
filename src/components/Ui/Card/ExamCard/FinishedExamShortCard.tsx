 
const FinishedExamShortCard = () => {
  return (
    <div className="  border border-secondary max-w-[300px]">
      <div className="bg-green text-white">
        <h2 className="text-xl font-semibold text-center py-2 border-b border-secondary">
          Passed
        </h2>
      </div>
      <div className="bg-secondary text-white">
        <h2 className="text-lg font-semibold text-center py-2 border-b border-secondary">
          Exam 1
        </h2>
      </div>
      <div>
     
        <p className="p-2 flex justify-between border-b border-secondary">
          <span>Total Time (40m)</span>{" "}
          <span className="font-semibold">34m</span>
        </p>
        <p className="p-2 flex justify-between border-b border-secondary">
          <span>MCQ (10)</span> <span className="font-semibold">8</span>
        </p>
        <p className="p-2 flex justify-between border-b border-secondary">
          <span>CQ (N/A)</span> <span className="font-semibold">N/A</span>
        </p>
        <p className="p-2 flex justify-between  ">
          <span>Opened</span> <span className="font-semibold">10:00 AM</span>
        </p>
        <p className="font-bold p-2 flex justify-between border-t-2 border-secondary">
          <span>Total Marks (100)</span>{" "}
          <span className="text-primary" >87</span>
        </p>
      </div>
    </div>
  );
};

export default FinishedExamShortCard;
