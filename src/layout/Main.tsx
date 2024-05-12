import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { useState } from "react";

const Main = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="container   max-w-[1280px] mx-auto  dark:bg-black dark:text-white">
      <Navbar dark={dark} darkModeHandler={darkModeHandler} />
      <Outlet />
      <Footer dark={dark} />
    </div>
  );
};

export default Main;
