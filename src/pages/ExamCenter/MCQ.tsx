import { useState } from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import { useAppSelector } from "../../redux/hooks";
import { Progress, ProgressProps } from "antd";
import MCQCard from "../../components/Ui/Card/ExamCard/QuestionCard/MCQCard";
import Font from "../../components/icons/Font";

const MCQ = () => {
  // Get User Profile
  const { user } = useAppSelector((state) => state.userDetails);
 
  // Exam Stats
  const [start, setStart] = useState(false);

  // Progress Bar Color
  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#f55951",
    "100%": "#52c41a",
  };

  // Current Progress
  const [progress, setCurrentProgress] = useState(10);

  // Total MCQ
  const totalMCQ = [
    { index: 1, name: "What is 1?" },
    { index: 2, name: "What is 2?" },
    { index: 3, name: "What is 3?" },
    { index: 4, name: "What is 4?" },
    { index: 5, name: "What is 5?" },
    { index: 6, name: "What is 6?" },
    { index: 7, name: "What is 7?" },
    { index: 8, name: "What is 8?" },
    { index: 9, name: "What is 9?" },
    { index: 10, name: "What is 10?" },
  ];

  // Current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalMCQ.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentProgress(progress + 10);
    }
  };

  const currentQuestion = totalMCQ[currentQuestionIndex];

  // Handle Submit
  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <div>
      <div>
        {/* Student Data */}
        <div className="flex border border-primary mt-2">
           
          <div className="border-l border-primary w-full">
            <div className="font-bold flex justify-between border-b border-primary p-2">
              <h2>
                Name: <span>{user?.firstName}</span>
                <span>{user?.lastName}</span>
              </h2>
              <h2>
                ID: <span>{user?.userId}</span>
              </h2>

              <h2>
                Email: <span>{user?.email}</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Exam Details */}
        <div className="flex justify-between border border-primary p-2 mt-2">
          <h2>
            Exam: <span>Exam 1</span>
          </h2>
          <h2>
            Course: <span>Admission</span>
          </h2>
          <h2>
            Type: <span>Live Course</span>
          </h2>
        </div>
        {/* questions Details */}
        <div className="flex justify-between border border-primary p-2 mt-2">
          <h2>
            Set: <span>C</span>
          </h2>
          <h2>
            Exam Type: <span>MCQ</span>
          </h2>
          <h2>
            Total Question: <span>{totalMCQ.length}</span>
          </h2>
          <h2>
            Total Time: <span>20m</span>
          </h2>
          <h2>
            Per question Time: <span>2m</span>
          </h2>
        </div>
        {/* Instructions */}
        <div className="mt-2">
          <p>N.B: You are able to select one time</p>
          {!start && (
            <div className="flex justify-center my-10">
              <div onClick={() => setStart(true)}>
                <CustomButton
                  content="Start Now"
                  type="button"
                  icon="fa-play"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* MCQ Exam */}
      {start && (
        <div className="h-screen">
          {/* Progress Bar */}
          <div className="m-2">
            <Progress percent={progress} strokeColor={twoColors} />
            <div className="flex justify-between">
              <h2>Quiz: {currentQuestion.index} </h2>
              <h2>
                Question {currentQuestion.index} out of {totalMCQ.length}
              </h2>
            </div>
          </div>
          {/* Question */}
          {!submit && (
            <div>
              <MCQCard key={currentQuestion.index} data={currentQuestion} />
            </div>
          )}

          {/* Submit message */}

          {submit && (
            <div className="bg-gray py-10 text-center my-10 font-bold text-primary text-xl">
              <h2 className="text-large my-4">Congratulations</h2>
              <p className="text-base">Successfully complete MCQ Exam</p>
              <div className="text-extraLarge my-4">
                <Font iconName="fa-check" />
              </div>
              <p className="text-base">
                You will let you know about your result shortly
              </p>
            </div>
          )}

          {/* Next button*/}
          {currentQuestionIndex !== totalMCQ.length - 1 && (
            <div className="flex justify-end px-4">
              <div onClick={handleNextQuestion}>
                <CustomButton type="button" content="Next" />
              </div>
            </div>
          )}
          {/* Submit button */}
          {!submit && currentQuestionIndex == totalMCQ.length - 1 && (
            <div className="flex justify-end px-4">
              <div onClick={handleSubmit}>
                <CustomButton type="button" content="Submit" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MCQ;
