import LiveCourseCard from "../../components/Ui/Card/CourseCard/LiveCourseCard/LiveCourseCard";
import PageHead from "../../components/Ui/PageHead/PageHead";
import { useGetAllActiveBatchQuery } from "../../redux/api/batch/batchAPI";
 
const LiveCourses = () => {
  // Get All Active batch
  const { data } = useGetAllActiveBatchQuery(undefined);
 

  return (
    <div>
      <PageHead subHead="Live Course" title="Explore Live course" />
      <div className="my-10">
        {data && data.map((d: any) => <LiveCourseCard key={d._id} data={d} />)}
      </div>
    </div>
  );
};

export default LiveCourses;
