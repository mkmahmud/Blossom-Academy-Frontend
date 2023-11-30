import Font from "../../../icons/Font";

const SolutionCard = ({ icon, title, text }: any) => {
  return (
    <div className="border-dashed border-2 border-primary px-4 py-6 max-w-[333px] h-[220px] hover:bg-primary hover:text-white group">
      <div className="text-primary text-extraLarge group-hover:text-white">
        <Font iconName={icon}></Font>
      </div>
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="mt-2 text-sm">{text}</p>
    </div>
  );
};

export default SolutionCard;
