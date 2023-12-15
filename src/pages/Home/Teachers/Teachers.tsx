import TeacherCard from "../../../components/Ui/Card/TeacherCard/TeacherCard";

const Teachers = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <p className="text-primary">Featured Instructor</p>
        <h2 className="text-extraLarge   font-bold my-4 leading-none">
          Featured Instructor
          <br />
          <span className="text-primary"> Your Teacher</span>
        </h2>
      </div>
      <div className="px-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
};

export default Teachers;
