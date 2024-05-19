import { useEffect, useState } from "react";
import CountDownMinute from "../../../../../helpers/CountDown/CountDownMinute";

const MCQCard = ({ data }: any) => {
  //   select options
  const [selectOptions, setSelectedOption] = useState("");

  //   Count down time
  const [timeup, settimeup] = useState(false);

  // Handle Stop
  const [stop, setstop] = useState(false);

  useEffect(() => {
    if (selectOptions != "") {
      setstop(true);
    }
  }, [selectOptions]);

  return (
    <div className="my-20 mx-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-large font-bold">
          {data.index}. {data?.name}
        </h2>
        <div className="text-xl">
          {
            <CountDownMinute
              handleStop={stop}
              settimeup={settimeup}
              initialMinutes={1}
            />
          }
        </div>
      </div>
      {!timeup && (
        <div className="grid grid-cols-4 md:grid-cols-2  gap-10 mt-20 text-large">
          <h2
            onClick={() => {
              selectOptions == "" && setSelectedOption("A");
            }}
            className={`border-2 border-primary font-bold cursor-pointer hover:bg-primary py-2 ${
              selectOptions == "A" ? "bg-primary text-white" : ""
            }`}
          >
            <span className="p-2 border-r-2 border-primary">A.</span>{" "}
            <span className="p-2 ml-2">This is True A</span>
          </h2>
          <h2
            onClick={() => {
              selectOptions == "" && setSelectedOption("B");
            }}
            className={`border-2 border-primary font-bold cursor-pointer hover:bg-primary py-2 ${
              selectOptions == "B" ? "bg-primary text-white" : ""
            }`}
          >
            <span className="p-2 border-r-2 border-primary">B.</span>{" "}
            <span className="p-2 ml-2">This is True B</span>
          </h2>
          <h2
            onClick={() => {
              selectOptions == "" && setSelectedOption("C");
            }}
            className={`border-2 border-primary font-bold cursor-pointer hover:bg-primary py-2 ${
              selectOptions == "C" ? "bg-primary text-white" : ""
            }`}
          >
            <span className="p-2 border-r-2 border-primary">C.</span>{" "}
            <span className="p-2 ml-2">This is True C</span>
          </h2>
          <h2
            onClick={() => {
              selectOptions == "" && setSelectedOption("D");
            }}
            className={`border-2 border-primary font-bold cursor-pointer hover:bg-primary py-2 ${
              selectOptions == "D" ? "bg-primary text-white" : ""
            }`}
          >
            <span className="p-2 border-r-2 border-primary">D.</span>{" "}
            <span className="p-2 ml-2">This is True D</span>
          </h2>
        </div>
      )}
      {/* Time Up display */}

      {timeup && (
        <div>
          <h2 className="bg-gray py-10 text-center my-10 font-bold text-primary text-xl">
            Time Up
          </h2>
        </div>
      )}
    </div>
  );
};

export default MCQCard;
