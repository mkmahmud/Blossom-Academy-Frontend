import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import Font from "../../components/icons/Font";
import CustomButton from "../../components/Buttons/CustomButton";

const CQ = () => {
  // Get User Profile
  const { user } = useAppSelector((state) => state.userDetails);

  // Exam Stats
  const [start, setStart] = useState(false);

  //   Total CQ
  const totalCQ = [
    { index: 1, name: "What is 1?" },
    { index: 2, name: "What is 2?" },
    { index: 3, name: "What is 3?" },
    { index: 4, name: "What is 4?" },
    { index: 5, name: "What is 5?" },
    { index: 6, name: "What is 6?" },
  ];

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
            Exam Type: <span>CQ</span>
          </h2>
          <h2>
            Total Question: <span>2</span>
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
        <div className="h-screen mt-10">
          {/* Question */}

          {totalCQ.map((cq) => (
            <div className="border-2 border-primary mx-2 md:mx-10 my-4">
              <h2 className="bg-primary p-2 font-bold text-white">
                Q.{cq.index}: <span>{cq.name}</span>
              </h2>
              <textarea
                className="w-full bg-transparent pl-4 py-4"
                placeholder="Write Answer Here ......."
                name=""
                id=""
              />
            </div>
          ))}

          <div className="flex justify-center px-4">
            <div  >
              <CustomButton type="button" content="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CQ;
