import TeacherCard from "../../components/Ui/Card/TeacherCard/TeacherCard";
import Loading from "../../components/Ui/Loading/Loading";
import PageHead from "../../components/Ui/PageHead/PageHead";
import { useGetAllTeachersQuery } from "../../redux/api/users/teachers/teachersApi";

const Teacher = () => {
  // Teachers Data
  const { data, isLoading } = useGetAllTeachersQuery(undefined);
  return (
    <div>
      <PageHead subHead="Teachers" title="Our Instructors" />

      {/* Loader */}
      {isLoading && <Loading />}

      {/* Content */}
      <div className="px-2 mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ">
        {data &&
          data.map((teacher: any) => (
            <TeacherCard key={teacher._id} data={teacher} />
          ))}
      </div>
    </div>
  );
};

export default Teacher;
