import MainButton from "../../../components/Buttons/MainButton";
import user from "../../../assets/user/u2.png";
import EventCard from "../../../components/Ui/Card/EventCard/EventCard";

const Events = () => {
  return (
    <div className="mt-20 px-6">
      <div className="w-full md:flex ">
        <div className="w-full md:w-1/3">
          <div>
            <p className="text-primary">Our Events</p>
            <h2 className="text-extraLarge   font-bold my-4 leading-none">
              Be Ready For
              <br />
              <span className="text-primary"> Upcoming Events</span>
            </h2>
            <MainButton path="/events" content="ALL EVENTS" icon="fa-calendar" />
          </div>
          <div className="mt-20">
            <img src={user} className="mx-auto" alt="" />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:px-4">
          <div className="pb-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              debitis at, maiores libero nesciunt veritatis reprehenderit ullam
              in quos explicabo eos, provident sit voluptatem accusamus numquam
              optio. Cumque, beatae consequatur!
            </p>
          </div>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
