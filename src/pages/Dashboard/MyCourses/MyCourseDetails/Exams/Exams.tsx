import { useState } from "react";
import ActiveExamShortCard from "../../../../../components/Ui/Card/ExamCard/ActiveExamShortCard";
import FinishedExamShortCard from "../../../../../components/Ui/Card/ExamCard/FinishedExamShortCard";

const Exams = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      {/* Title */}
      <h2 className="text-extraLarge font-bold text-center text-primary">
        Exams
      </h2>
      {/* Select Exam type */}
      <div className="md:flex justify-around border border-1 border-primary my-4">
        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`${
            active ? "bg-primary text-white" : "text-black"
          }  w-full py-2 `}
        >
          Active
        </button>
        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`${
            active ? "text-black" : "bg-primary text-white"
          }  w-full py-2 `}
        >
          Finished
        </button>
      </div>
      {/* Exam Content */}
      <div>
        {/* Active Exams */}
        {active && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <ActiveExamShortCard />
            </div>
          </div>
        )}
        {/* Finished Exams */}
        {!active && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <FinishedExamShortCard />
              <FinishedExamShortCard />
              <FinishedExamShortCard />
              <FinishedExamShortCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exams;
