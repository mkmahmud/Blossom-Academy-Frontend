import { Timeline } from "antd";
import { useGetCourseSchudleQuery } from "../../../../../redux/api/courseSchedule/courseScheduleAPI";

const CourseTimeline = ({ id }: any) => {
  // Get Couse Schedule
  const { data } = useGetCourseSchudleQuery(id);

  const items = data?.schedule
    ? data.schedule.map((item: any) => {
        return {
          label: item.date,
          children: `[Class ${item.classNummber}] - ${item.title}`,
        };
      })
    : [];

  return (
    <div>
      {!data && (
        <h2 className="text-red text-large font-semibold text-center">
          Schedule isn't ready yet !!!!!!
        </h2>
      )}
      {data && <Timeline mode={"alternate"} items={items} />}
    </div>
  );
};

export default CourseTimeline;
