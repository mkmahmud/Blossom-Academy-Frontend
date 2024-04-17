import { Timeline } from "antd";

const CourseTimeline = () => {
  return (
    <div>
      <Timeline
        mode={"alternate"}
        items={[
          {
            label: "2015-09-01",
            children: "Create a services",
          },
          {
            label: "2015-09-01 09:12:11",
            children: "Solve initial network problems",
          },

          {
            label: "2015-09-01 09:12:11",
            children: "Network problems being solved",
          },
          {
            label: "2015-09-01 09:12:11",
            children: "Network problems being solved",
          },
          {
            label: "2015-09-01 09:12:11",
            children: "Network problems being solved",
          },
          {
            label: "2015-09-01 09:12:11",
            children: "Network problems being solved",
          },
        ]}
      />
    </div>
  );
};

export default CourseTimeline;
