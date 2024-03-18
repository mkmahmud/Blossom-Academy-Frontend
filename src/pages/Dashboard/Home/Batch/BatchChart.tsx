import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetAllActiveBatchQuery } from "../../../../redux/api/batch/batchAPI";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const BatchChart = () => {
  // batches Chart Data
  const [selectedChart, setSelectedChart] = useState([]);

  // Selected Batch Chart Data
  const [selectedBatch, setSelectedBatch] = useState({});

  //   Chart Data
  const data = {
    labels: ["Students", "Teachers", "Courses"],
    datasets: [
      {
        label: " ",
        data: selectedChart,
        backgroundColor: ["#f55951", "#361d32", "#f1e8e6"],
        borderColor: ["#edd2cb", "#361d32", "#f1e8e6"],
        borderWidth: 1,
      },
    ],
  };

  //   Get Batches Data Form DB
  const { data: batches } = useGetAllActiveBatchQuery(undefined);

  //   Set default values
  useEffect(() => {
    batches && setSelectedBatch(batches[0]);
    batches &&
      setSelectedChart([
        // @ts-ignore
        batches[0].studentsId.length,
        // @ts-ignore
        batches[0].teachersId.length,
        // @ts-ignore
        batches[0].courseId.length,
      ]);
  }, [batches]);

  return (
    <div className="mt-6 p-2 border-2 border-gray">
      <h2 className="font-bold text-xl text-primary py-2">Batch</h2>
      <div className="md:flex justify-between">
        <div className="h-[300px] w-full md:w-1/2">
          <Doughnut data={data} />
        </div>
        <div className="w-full md:w-1/2">
          <p className="my-4">Active Batch</p>
          <div className="h-[200px] overflow-y-scroll">
            {batches &&
              batches.map((batch: any) => (
                <div
                  key={batch?._id}
                  onClick={() => {
                    setSelectedChart([
                      // @ts-ignore
                      batch.studentsId.length,
                      // @ts-ignore
                      batch.teachersId.length,
                      // @ts-ignore
                      batch.courseId.length,
                    ]);
                    setSelectedBatch(batch);
                  }}
                  className={`p-2 my-2 cursor-pointer ${
                    // @ts-ignore
                    batch?._id === selectedBatch?._id
                      ? "bg-primary text-white"
                      : "bg-gray "
                  }`}
                >
                  {batch.title}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchChart;
