import { useState } from "react"; 
import EventViewCard from "../../../components/Dashboard/Ui/Card/EventViewCard/EventViewCard";

const Events = () => {
  // Set Active button
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className="border-2 border-primaryHover p-2 mb-4">
        <h2 className="font-bold text-xl text-primary">Events</h2>
        <p className="py-2">Your All events here</p>
      </div>
      <div className="border-2 border-primaryHover p-2 mb-4">
        <div className="md:flex justify-around border border-1 border-primary">
          <button
            onClick={() => {
              setActive(!active);
            }}
            className={`${
              active ? "bg-primary text-white" : "text-black"
            }  w-full py-2 `}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => {
              setActive(!active);
            }}
            className={`${
              active ? "text-black" : "bg-primary text-white"
            }  w-full py-2 `}
          >
            Past Events
          </button>
        </div>
        {/* Events Card */}
        <div>
          <EventViewCard />
          <EventViewCard />
          <EventViewCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
