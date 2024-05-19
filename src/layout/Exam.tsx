import { Outlet } from "react-router-dom";

const Exam = () => {
  return (
    <div className="container   max-w-[1280px] mx-auto ">
      <Outlet />
    </div>
  );
};

export default Exam;
