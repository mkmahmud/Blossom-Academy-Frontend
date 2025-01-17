import Font from "../../../components/icons/Font";
import CountUp from "react-countup";

const States = () => {
  // Card Class
  const cardClass =
    "dark:bg-gray-dark mx-auto hover:-translate-y-2 ease-in-out duration-300     cursor-pointer w-[180px] md:w-[250px] flex items-center p-2 md:p-6 m-2 rounded shadow-xl md:shadow-2xl";

  return (
    <div className="mt-20 ">
      <div className=" h-[100px]"></div>
      <div className="-mt-[50px] grid grid-cols-2 md:grid-cols-4 ">
        <div className={cardClass}>
          <div className="text-extraLarge p-2  text-primary rounded-full       border-primary mx-2">
            <Font iconName="fa-book" />
          </div>
          <div>
            <h2 className="font-semibold text-xl">OK</h2>
            <p>Online Course</p>
          </div>
        </div>
        <div className={cardClass}>
          <div className="text-extraLarge p-2  text-primary rounded-full       border-primary mx-2">
            <Font iconName="fa-chalkboard-user" />
          </div>
          <div>
            <CountUp className="font-semibold text-xl" end={56} duration={6} />
            <p>Teachers</p>
          </div>
        </div>
        <div className={cardClass}>
          <div className="text-extraLarge p-2  text-primary rounded-full       border-primary mx-2">
            <Font iconName="fa-users" />
          </div>
          <div>
            <CountUp
              className="font-semibold text-xl"
              end={7830}
              duration={4}
            />
            <p>Students</p>
          </div>
        </div>
        <div className={cardClass}>
          <div className="text-extraLarge p-2  text-primary rounded-full       border-primary mx-2">
            <Font iconName="fa-certificate" />
          </div>
          <div>
            <CountUp className="font-semibold text-xl" end={24} duration={4} />

            <p>Certified </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-1 md:grid-cols-4 w-full mt-20 bg-primaryHover py-20 text-center text-extraLargeXL font-bold text-primary relative overflow-hidden">
    //   <img src={shape} className="absolute -bottom-20 left-0 animate-ping" alt="" />
    //   <h2 className="my-4 md:my-2 flex items-center justify-center">
    //     200+ <span className="text-lg md:ml-2">Project Finished</span>
    //   </h2>

    //   <h2 className="my-4 md:my-2 flex items-center justify-center">
    //     800+ <span className="text-lg md:ml-2">Students</span>
    //   </h2>

    //   <h2 className="my-4 md:my-2 flex items-center justify-center">
    //     200+ <span className="text-lg md:ml-2">Project Finished</span>
    //   </h2>

    //   <h2 className="my-4 md:my-2 flex items-center justify-center">
    //     10+ <span className="text-lg md:ml-2">Experienced</span>
    //   </h2>
    // </div>
  );
};

export default States;
