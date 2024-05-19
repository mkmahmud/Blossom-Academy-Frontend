import { useState } from "react";
import MCQ from "./MCQ";
import CQ from "./CQ";

const ExamCenter = () => {
  const [active, setActive] = useState("");

 
  return (
    <div>
      {/* Select CQ /\ MCQ */}
      {active === "" && (
        <div className="h-screen ">
          <h2 className="text-center py-10 text-xl font-semibold">
            Select Exam Which you want at first{" "}
          </h2>

          <div className="flex justify-around">
            <div
              onClick={() => {
                setActive("CQ");
              }}
              className="h-[400px] w-[400px] bg-primary flex items-center justify-center cursor-pointer"
            >
              <h2 className="text-extraLarge font-bold text-white">CQ</h2>
            </div>
            <div
              onClick={() => {
                setActive("MCQ");
              }}
              className="h-[400px] w-[400px] bg-primary flex items-center justify-center cursor-pointer"
            >
              <h2 className="text-extraLarge font-bold text-white  ">MCQ</h2>
            </div>
          </div>
        </div>
      )}

      {/* MCQ  */}
      {active == "MCQ" && <MCQ />}
      {/* CQ  */}
      {active == "CQ" && <CQ />}
    </div>
  );
};

export default ExamCenter;
