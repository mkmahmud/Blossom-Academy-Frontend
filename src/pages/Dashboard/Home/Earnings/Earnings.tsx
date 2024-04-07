import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Earnings = () => {
  const generateRandomData = () => {
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels,
    datasets: [
      {
        label: "Earnings",
        data: labels.map(() => generateRandomData()),
        backgroundColor: "#f55951",
      },
    ],
  };

  return (
    <div className="mt-6 p-2 border-2 border-gray">
      <h2 className="font-bold text-xl text-primary py-2">Earnings</h2>
      <div>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Earnings;
