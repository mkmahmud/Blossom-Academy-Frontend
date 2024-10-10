// @ts-nocheck
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/api/events/eventsAPI";

const EventDetails = () => {
  // Get Events ID
  const { id } = useParams();
  // Retrive Event Details Data
  const { data } = useGetEventDetailsQuery(id);


  console.log(1 + "1"); // "11"
  console.log(1 - "1"); // 0

  return (
    <div className="mt-20">
      <div className="relative">
        <img src={data && data.image} className="h-[500px] w-full rounded" alt="" />
        <div className="absolute top-0 h-[500px] w-full rounded bg-gradient-to-r  from-primary to-transparent">
          Hello Bangladesh
        </div>
      </div>
    </div>
  );
};

export default EventDetails;


