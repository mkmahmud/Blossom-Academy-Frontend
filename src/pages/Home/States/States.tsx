import shape from "../../../assets/images/shape/4.png";

const States = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full mt-20 bg-primaryHover py-20 text-center text-extraLargeXL font-bold text-primary relative overflow-hidden">
      <img src={shape} className="absolute -bottom-20 left-0 animate-ping" alt="" />
      <h2 className="my-4 md:my-2 flex items-center justify-center">
        200+ <span className="text-lg md:ml-2">Project Finished</span>
      </h2>

      <h2 className="my-4 md:my-2 flex items-center justify-center">
        800+ <span className="text-lg md:ml-2">Students</span>
      </h2>

      <h2 className="my-4 md:my-2 flex items-center justify-center">
        200+ <span className="text-lg md:ml-2">Project Finished</span>
      </h2>

      <h2 className="my-4 md:my-2 flex items-center justify-center">
        10+ <span className="text-lg md:ml-2">Experienced</span>
      </h2>
    </div>
  );
};

export default States;
