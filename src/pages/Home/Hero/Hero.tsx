import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero2.png";
import shape1 from "../../../assets/images/shape/1.png";
import userimage from "../../../assets/user/client-4.jpg";

import MainButton from "../../../components/Buttons/MainButton";
import Font from "../../../components/icons/Font";

const Hero = () => {
  return (
    <div className="   ">
      <div className="  flex justify-between items-center relative overflow-hidden h-full">
        {/* Shapes */}
        {/* <img
          src={shape2}
          className="absolute -z-10 top-20 -left-[100px] animate-spin"
          alt=""
        /> */}
        <img
          src={shape1}
          className="absolute -z-10 bottom-0 left-[300px] animate-spin   "
          alt=""
        />
        {/* <img
          src={shape3}
          className="absolute -z-10 -bottom-[120px] -left-[100px] animate-pulse   "
          alt=""
        /> */}
        <div className="w-full md:w-1/2 pt-20">
          <div className="pl-4">
            <p className="text-primary">Blossom Online Class</p>
            <h2 className="text-extraLarge md:text-extraLargeXL font-bold my-6 leading-none">
              Want To Be A Career{" "}
              <span className="text-primary"> Coach Join!</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              repudiandae minima maxime fugiat, eum deserunt placeat aliquid
              molestias odio animi?
            </p>
            <div className="my-10">
              <MainButton
                path="/auth"
                content="Join Now !"
                icon="fa-right-to-bracket"
              ></MainButton>
            </div>
            <div className="  flex items-center space-x-4 mt-[100px]">
              <img
                src={userimage}
                alt=""
                className="rounded-full border-2 border-primary p-1 h-[100px]"
              />
              <div>
                <h2 className="text-lg font-semibold my-2">Jhon Richerd</h2>
                <Link to="/" className="underline ">
                  {" "}
                  <span>Find More teacher</span>{" "}
                  <span className="ml-4">
                    <Font iconName="fa-arrow-right-long"></Font>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block md:w-1/2">
          <img src={heroImage} className="  h-full   " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
