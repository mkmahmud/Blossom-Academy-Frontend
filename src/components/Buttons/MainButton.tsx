import { Link } from "react-router-dom";
import Font from "../icons/Font";

const MainButton = ({ path, content, icon }: any) => {
  return (
    <button className=" group overflow-hidden flex justify-center items-center relative   bg-primary px-6 py-4 text-base text-white font-semibold  rounded-full">
      <Link to={path} className="flex items-center">
        <span>{content}</span>{" "}
        <span className="ml-4">{icon && <Font iconName={icon}></Font>}</span>
      </Link>
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-primaryHover opacity-40 group-hover:animate-shine" />
      
    </button>
  );
};

export default MainButton;
