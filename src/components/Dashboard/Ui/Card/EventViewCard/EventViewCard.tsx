 
import Font from "../../../../icons/Font";
import CustomButton from "../../../../Buttons/CustomButton";

const EventViewCard = () => {
  return (
    <div className="flex justify-between items-center border-2 border-primaryHover  my-2 ">
      <div className="bg-primary p-2 text-white leading-none">
        <h2 className="text-extraLarge font-bold">20</h2>
        <p className="text-sm text-center">OCT</p>
      </div>
      <div className="flex space-x-2">
        <div className="text-primary">
          <Font iconName="fa-location-pin" />
        </div>
        <h2>Remote</h2>
      </div>
      <div className="mr-2">
        <CustomButton type="button" icon="fa-eye" content="view ticket" />
      </div>
    </div>
  );
};

export default EventViewCard;
