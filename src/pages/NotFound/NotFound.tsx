import { Link } from "react-router-dom";
import Font from "../../components/icons/Font";

const NotFound = () => {
  return (
    <div className="bg-secondary  relative  h-[100vh] container   max-w-[1280px] mx-auto  ">
      {/* Shape */}
      <div
        style={{ clipPath: "polygon(100% 0, 100% 0, 40% 100%, 0 99%, 0 52%)" }}
        className="bg-white h-screen w-full"
      ></div>
      {/* Content */}
      <div className="text-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-extraLarge font-bold ">404</h2>
        <i className="fa-solid fa-triangle-exclamation text-primary text-[80px] my-4"></i>
        <p>Page Not Found</p>
        <Link to="/">
          <button
            type="submit"
            className="w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-primary px-6 py-4 text-base text-white font-semibold  rounded-full"
          >
            <span>Go Home</span>{" "}
            <span className="ml-4">
              <Font iconName="fa-house"></Font>
            </span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-primaryHover opacity-40 group-hover:animate-shine" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
