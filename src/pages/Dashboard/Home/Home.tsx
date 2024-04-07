import UnderConstraction from "../../../components/Ui/Error/UnderConstraction";
import { numberToSplitting } from "../../../helpers/calculate/calculate";
import { useGetAllOrdersQuery } from "../../../redux/api/Payments/paymentsAPI";
import { useGetAllUsersByRoleQuery } from "../../../redux/api/users/usersAPI";
import { getUserInfo } from "../../../services/authService";
import BatchChart from "./Batch/BatchChart";
import Earnings from "./Earnings/Earnings";
import Users from "./Users/Users";

const Home = () => {
  // Get User Information
  const user = getUserInfo();

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
        {/*   Admin */}

        {
          // @ts-ignore
          user?.role === "admin" && (
            <div>
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
              {/* Batch */}
              <BatchChart />
              {/* Earnings */}
              <Earnings />
              {/* Users */}
              <Users />
            </div>
          )
        }
      </div>{" "}
      {/* Management */}
      <div>
        {
          // @ts-ignore
          user?.role === "management" && <UnderConstraction />
        }
      </div>
      {/* Teacher */}
      <div>
        {
          // @ts-ignore
          user?.role === "teacher" && <UnderConstraction />
        }
      </div>
      {/* Student */}
      <div>
        {
          // @ts-ignore
          user?.role === "student" && <UnderConstraction />
        }
      </div>
    </div>
  );
};

export default Home;
