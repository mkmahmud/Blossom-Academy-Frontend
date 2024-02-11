import Font from "../icons/Font";

const CustomOutlineButton = ({ content, icon }: any) => {
  return (
    <button className="w-full group overflow-hidden flex justify-center items-center relative border-2   border-primary px-6 py-2 text-black  font-semibold  rounded-full">
      <span>{content}</span>{" "}
      <span className="ml-4">{icon && <Font iconName={icon}></Font>}</span>
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-primaryHover opacity-40 group-hover:animate-shine" />
    </button>
  );
};

export default CustomOutlineButton;
