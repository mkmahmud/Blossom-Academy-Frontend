import MainButton from "../../../components/Buttons/MainButton";
import CourseCard from "../../../components/Ui/Card/CourseCard/CourseCard";

const Courses = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <p className="text-primary">Online Courses</p>
        <h2 className="text-extraLarge   font-bold my-4 leading-none">
          Latest Online Courses Find <br />
          <span className="text-primary"> Your Desire</span>
        </h2>
      </div>
      <div className="px-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full ">
        <CourseCard />
        <CourseCard />
        <CourseCard /> 
      </div>
      <div className="w-full flex justify-center my-10">
        <MainButton
          path="/course-details"
          icon="fa-magnifying-glass-arrow-right"
          content="Find All Courses"
        />
      </div>
    </div>
  );
};

export default Courses;
