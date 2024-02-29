import { useParams } from "react-router-dom";
import { useGetBatchQuery } from "../../../../redux/api/batch/batchAPI";
import CustomButton from "../../../../components/Buttons/CustomButton";

const MyCourseDetails = () => {
  // Get Batch Id
  const { id } = useParams();

  // Get Single Batch Details
  const { data } = useGetBatchQuery(id);

  return (
    <div>
      <div className="border-2 border-primary  ">
        <h1 className="p-2 text-xl font-semibold">{data?.title}</h1>
        <div className="p-2 border-t-2 border-primary flex items-center justify-between">
          <h2 className="text-lg">
            Start Time: <span className="font-semibold">{data?.session}</span>
          </h2>
          <div>
            <CustomButton type="button" content="Join The Class" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseDetails;
