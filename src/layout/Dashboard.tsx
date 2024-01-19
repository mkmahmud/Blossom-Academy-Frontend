import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import Sidebar from "../components/Dashboard/Shared/Sidebar/Sidebar";
import { getUserInfo } from "../services/authService";
import { useGetUserDetailsQuery } from "../redux/api/users/usersAPI";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { addUserDetails } from "../redux/features/users/userSlice";

const Dashboard = () => {
  const user = getUserInfo();
  const { data } = useGetUserDetailsQuery(user._id);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addUserDetails(data));
  }, [user]);

  return (
    <div className="container   max-w-[1280px] mx-auto ">
      <Navbar />
      <div className="md:flex w-full pt-20">
        <div className="w-full md:w-3/12">
          <Sidebar />
        </div>
        <div className="w-full md:w-9/12 p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
