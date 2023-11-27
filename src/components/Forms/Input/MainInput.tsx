import Font from "../../icons/Font";

const MainInput = ({ type, placeholder, icon, register, error }: any) => {
  return (
    <div className="w-full  relative text-base my-10 ">
      <input
        {...register}
        type={type}
        className="w-full bg-white text-black h-12 rounded pl-6 "
        placeholder={placeholder}
      />
      {/* Right side Icon */}
      <span className="absolute text-black right-4 top-3">
        <Font iconName={icon} />
      </span>
      {/* Show error */}
      {error && <span className="text-primary">{placeholder} is required</span>}{" "}
    </div>
  );
};

export default MainInput;
