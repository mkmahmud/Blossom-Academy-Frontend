import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetUserGrothQuery } from "../../../../redux/api/users/usersAPI";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Julay",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Users = () => {
  // Get User Groth Data
  const { data: userGroth } = useGetUserGrothQuery(undefined);

  const [users, setUsers] = useState<number[]>([0]);

  useEffect(() => {
    const monthUsers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (userGroth && typeof userGroth[Symbol.iterator] === "function") {
      for (const entry of userGroth) {
        if (entry.createdAt) {
          const createdDate = new Date(entry.createdAt);
          const month = createdDate.getMonth();
          monthUsers[month] += 1;
        }
      }

      setUsers(monthUsers);
    }
  }, [userGroth]);

  const data = {
    labels,
    datasets: [
      {
        label: "Users",
        data: users,
        borderColor: "#361d32",
        backgroundColor: "#361d32",
      },
    ],
  };

  return (
    <div>
      <div className="mt-6 p-2 border-2 border-gray">
        <h2 className="font-bold text-xl text-primary py-2">User Growth:</h2>
        <div>
          <Line options={options} data={data} />;
        </div>
      </div>
    </div>
  );
};

export default Users;
