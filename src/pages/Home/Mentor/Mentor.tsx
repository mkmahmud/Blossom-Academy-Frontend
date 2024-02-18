import img from "../../../assets/images/shape/share.png";
import CustomButton from "../../../components/Buttons/CustomButton";
import Font from "../../../components/icons/Font";
const Mentor = () => {
  return (
    <div className="md:flex space-x-4 justify-center items-center my-20 bg-gray py-10">
      <div className="w-full md:w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-extraLarge   font-bold my-4 leading-none">
          Want to share your knowledge? <br /> Join us a Mentor
        </h1>
        <p className="py-4">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video.
        </p>
        <ul>
          <li className="flex space-x-2 items-center my-2">
            <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center">
              {" "}
              <Font iconName="fa-check" />
            </div>
            <span className="text-xl font-semibold">Best Courses</span>
          </li>
          <li className="flex space-x-2 items-center my-2">
            <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center">
              {" "}
              <Font iconName="fa-check" />
            </div>
            <span className="text-xl font-semibold">Top rated Instructors</span>
          </li>
        </ul>
        <div className="w-[200px] mt-10">
          <CustomButton type="btn" content="Join Now" />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
