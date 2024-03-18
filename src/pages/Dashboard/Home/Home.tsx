import { numberToSplitting } from "../../../helpers/calculate/calculate";
import { useGetAllOrdersQuery } from "../../../redux/api/Payments/paymentsAPI";
import { useGetAllUsersByRoleQuery } from "../../../redux/api/users/usersAPI";
import BatchChart from "./Batch/BatchChart";

const Home = () => {
  // Get Reviews data
  const { data: revenue } = useGetAllOrdersQuery(undefined);

  let totalRevenue = 0;

  if (revenue) {
    for (let i = 0; i < revenue.length; i++) {
      totalRevenue += revenue[i].amount;
    }
  }

  // Get Total Students
  const { data: students } = useGetAllUsersByRoleQuery("student");

  // Get Total Teachers
  const { data: teachers } = useGetAllUsersByRoleQuery("teacher");

  return (
    <div>
      <div>
        {/* Super Admin */}

        <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
          <div className="p-4 shadow-lg bg-white min-w-[300px] mx-auto border-l-4 border-primary">
            <p className="uppercase">Revenue</p>
            <h2 className="text-extraLarge text-primary py-2 font-semibold">
              ${numberToSplitting(totalRevenue)}
            </h2>
            <p>Total Earnings</p>
          </div>
          <div className="p-4 shadow-lg bg-white min-w-[300px] mx-auto border-l-4 border-primary">
            <p className="uppercase">STUDENTS ENROLLMENTS</p>
            <h2 className="text-extraLarge text-primary py-2 font-semibold">
              {students ? numberToSplitting(students.length) : 0}
            </h2>
            <p>In this month</p>
          </div>
          <div className="p-4 shadow-lg bg-white min-w-[300px] mx-auto border-l-4 border-primary">
            <p className="uppercase">Teachers</p>
            <h2 className="text-extraLarge text-primary py-2 font-semibold">
              {teachers ? numberToSplitting(teachers.length) : 0}
            </h2>
            <p>Rating this month</p>
          </div>
        </div>
      </div>{" "}
      <div>
        <BatchChart />
      </div>
    </div>
  );
};

export default Home;
