import image1 from "../../../../assets/images/courses/1.jpg";
import Font from "../../../icons/Font";

const CourseCard = () => {
  return (
    <div className="my-2 mx-auto max-w-[400px] overflow-hidden group ease-in-out duration-300   hover:drop-shadow-xl hover:bg-white ">
      <div className="">
        <div className="h-[300px] bg-primary overflow-hidden">
          <img
            src={image1}
            alt=""
            className="  origin-bottom	 group-hover:scale-110 h-full ease-in-out duration-300  "
          />
        </div>
        <div className="mx-4 my-10 group-hover:-translate-y-2 ease-in-out duration-300">
          <div className="flex space-x-8 my-2">
            <p>
              <Font iconName="fa-users" /> <span>23 students</span>
            </p>
            <p>
              <Font iconName="fa-book-open" /> <span>30 Lessons</span>
            </p>
          </div>
          <div className="text-xl font-semibold ">
            <h2 className="py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              enim?
            </h2>
            <h2 className="text-primary">$57.98</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
