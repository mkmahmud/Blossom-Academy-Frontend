import image1 from "../../../../assets/images/event.jpg";
import Linked from "../../../Buttons/Linked";
import Font from "../../../icons/Font";

const EventCard = () => {
  return (
    <div className="my-2 mx-auto   group ease-in-out duration-300     ">
      <div className="md:flex">
        <div className="h-[200px]  overflow-hidden">
          <img
            src={image1}
            alt=""
            className="  origin-bottom	w-full  h-full group-hover:scale-110 group-hover:skew-y-6 transform-gpu  h-full ease-in-out duration-300"
          />
        </div>
        <div className="mx-4 md:mx-8 my-10  md:my-2  ">
          <div className="flex space-x-8 my-2">
            <p>
              <Font iconName="fa-calendar-days" />{" "}
              <span className="text-primary">22 January, 2023</span>
            </p>
            <p>
              <Font iconName="fa-location-dot" />{" "}
              <span className="text-primary">New York</span>
            </p>
          </div>
          <div className="text-xl font-semibold ">
            <h2 className="py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              enim?
            </h2>
            <div>
              <Linked path="/" content="Get A ticket" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
