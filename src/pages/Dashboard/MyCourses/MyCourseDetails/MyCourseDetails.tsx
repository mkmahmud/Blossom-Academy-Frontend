import { useParams } from "react-router-dom";
import { useGetBatchQuery } from "../../../../redux/api/batch/batchAPI";

const MyCourseDetails = () => {
  // Get Batch Id
  const { id } = useParams();

  // Get Single Batch Details
  const { data } = useGetBatchQuery(id);

  return (
    <div>
      <div>
        <img src={data?.thambnail} alt="" />
      </div>
    </div>
  );
};

export default MyCourseDetails;
