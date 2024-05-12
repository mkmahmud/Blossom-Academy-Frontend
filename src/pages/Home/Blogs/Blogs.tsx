import svg1 from "../../../assets/images/blogs/icon-09.svg";
import svg2 from "../../../assets/images/blogs/icon-10.svg";
import svg3 from "../../../assets/images/blogs/icon-12.svg";
import svg4 from "../../../assets/images/blogs/icon-13.svg";
import svg5 from "../../../assets/images/blogs/icon-09.svg";
import svg6 from "../../../assets/images/blogs/icon-13.svg";
import svg7 from "../../../assets/images/blogs/icon-14.svg";
import svg8 from "../../../assets/images/blogs/icon-15.svg";
import svg9 from "../../../assets/images/blogs/icon-16.svg";
import svg10 from "../../../assets/images/blogs/icon-18.svg";

import svg11 from "../../../assets/images/blogs/icon-07.svg";
import svg12 from "../../../assets/images/blogs/icon-08.svg";
import CountUp from "react-countup";

const Blogs = () => {
  return (
    <div className="my-20">
      <div className="bg-primaryHover dark:bg-gray-dark w-full rounded-xl p-10 flex justify-around mt-20">
        <div className="flex space-x-4">
          <div className="bg-white p-2 rounded-xl ">
            <img src={svg11} alt="img" className="block mx-auto" />
          </div>
          <div>
            <CountUp
              className="text-extraLarge font-bold"
              end={76136}
              duration={2}
            />

            <p className="text-xl">Students Enrolled</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-white p-2 rounded-xl ">
            <img src={svg12} alt="img" className="block mx-auto" />
          </div>
          <div>
          <CountUp
              className="text-extraLarge font-bold"
              end={500}
              duration={2}
            />            <p className="text-xl">All Course</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-white p-2 rounded-xl ">
            <img src={svg1} alt="img" className="block mx-auto" />
          </div>
          <div>
          <CountUp
              className="text-extraLarge font-bold"
              end={88}
              duration={2}
            />            <p className="text-xl">Countries</p>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <h2 className="text-extraLarge font-semibold">
          Unlimited access to 360+ courses <br />
          and 1,600+ hands-on labs
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-10 gap-2 my-10">
          <div className="  p-2 h-20 w-20">
            <img src={svg1} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg2} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg3} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg4} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg5} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg6} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg7} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg8} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg9} alt="img" className="block mx-auto" />
          </div>
          <div className="  p-2 h-20 w-20">
            <img src={svg10} alt="img" className="block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
