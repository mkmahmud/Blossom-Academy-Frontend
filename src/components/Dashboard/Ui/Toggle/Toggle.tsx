import { useState } from "react";

const Toggle = ({ status }: any) => {
  const [active, setActive] = useState(status);
  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className={`h-8 w-16   border-2  rounded-full px-2   flex items-center ease-out duration-300 ${
        active
          ? "justify-end border-primary bg-primary"
          : "justify-start border-primaryHover"
      }`}
    >
      <div
        className={` h-4 w-4 rounded-full ${
          active ? "bg-white" : "bg-primaryHover"
        } `}
      ></div>
    </div>
  );
};

export default Toggle;
