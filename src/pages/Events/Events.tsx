import EventCard from "../../components/Ui/Card/EventCard/EventCard";
import { useGetEventsQuery } from "../../redux/api/events/eventsAPI";

const Events = () => {
  // Events Data
  const { data } = useGetEventsQuery(undefined);

  return (
    <div className="mt-20">
      <div>
        <div>
          {data &&
            data.map((event: any) => (
              <EventCard key={event._id} data={event} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
