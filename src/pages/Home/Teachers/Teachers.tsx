import TeacherCard from "../../../components/Ui/Card/TeacherCard/TeacherCard";
import Loading from "../../../components/Ui/Loading/Loading";
import { useGetAllTeachersQuery } from "../../../redux/api/users/teachers/teachersApi";

const Teachers = () => {
  // Teachers Data
  const { data, isLoading } = useGetAllTeachersQuery(undefined);
  return (
    <div className="mt-20">
      {isLoading && <Loading />}

      <div className="text-center mb-10">
        <p className="text-primary">Featured Instructor</p>
        <h2 className="text-extraLarge   font-bold my-4 leading-none">
          Featured Instructor
          <br />
          <span className="text-primary"> Your Teacher</span>
        </h2>
      </div>
      <div className="px-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ">
        {data &&
          data
            .slice(0, 4)
            .map((teacher: any) => (
              <TeacherCard key={teacher._id} data={teacher} />
            ))}
      </div>
    </div>
  );
};

export default Teachers;
