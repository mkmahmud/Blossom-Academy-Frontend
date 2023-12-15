import TeacherCard from "../../components/Ui/Card/TeacherCard/TeacherCard";
import PageHead from "../../components/Ui/PageHead/PageHead";

const Teacher = () => {
  return (
    <div>
      <PageHead subHead="Teachers" title="Our Instructors" />
      <div className="px-2 mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
};

export default Teacher;
