import { Link } from "react-router-dom";
import Linked from "../../../Buttons/Linked";
import Font from "../../../icons/Font";

const EventCard = ({ data }: any) => {
  // Slice Locaton
  const location = data.location;
  let words = location.split(" ");
  let lastTwoWords = words.slice(-2).join(" ");

  return (
    <div className="my-2 mx-auto   group ease-in-out duration-300     ">
      <div className="md:flex">
        <div className="h-[200px]  overflow-hidden">
          <img
            src={data.image}
            alt=""
            className="  origin-bottom  w-[300px]  h-full group-hover:scale-110 group-hover:skew-y-6 transform-gpu  h-full ease-in-out duration-300"
          />
        </div>
        <div className="mx-4 md:mx-8 my-10  md:my-2  ">
          <div className="flex space-x-8 my-2">
            <p>
              <Font iconName="fa-calendar-days" />{" "}
              <span className="text-primary">{data.date}</span>
            </p>
            <p>
              <Font iconName="fa-location-dot" />{" "}
              <span className="text-primary">{lastTwoWords}</span>
            </p>
          </div>
          <div className="text-xl font-semibold ">
            <h2 className="py-2 hover:text-primary">
              <Link to={`/eventdetails/${data._id}`}>{data.name}</Link>
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
