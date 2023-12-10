import Font from "../../../icons/Font";
import shape from "../../../../assets/images/shape/shape6.png";

const SolutionCard = ({ icon, title, text }: any) => {
  return (
    <div className="border-dashed border-2 border-primary max-w-[333px] h-[220px] hover:bg-primary hover:text-white group ease-in-out duration-300">
      <img src={shape} className="absolute -top-8 hidden group-hover:block ease-in-out duration-300" alt="" />
      <img src={shape} className="absolute -bottom-10 hidden group-hover:block ease-in-out duration-300" alt="" />
      <div className=" px-4 py-6  mt-4">
        <div className="text-primary text-extraLarge group-hover:text-white">
          <Font iconName={icon}></Font>
        </div>
        <h2 className="text-lg font-semibold mt-4">{title}</h2>
        <p className="mt-2 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
