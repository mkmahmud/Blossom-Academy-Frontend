import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="container   max-w-[1280px] mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
