import { formatCustomDate } from "../../helpers/calculate/calculate";

const UserCard = ({ data }: any) => {
  return (
    <div className="flex  space-x-2 justify-between items-center   my-2 pb-2 px-2 border-b-2 border-gray cursor-pointer">
      <div className="flex space-x-2">
        <div className="relative">
          <img
            src={data?.reciverImg}
            alt=""
            className="h-14 w-14 rounded-full"
          />
          {data.totalUnrad > 0 ? (
            <p className="absolute top-0 right-0 bg-primary text-white text-center rounded-full txt-sm h-6 w-6">
              {data.totalUnrad}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold">{data?.reciverName}</h2>
          <p className="font-semibold text-primary">
            {data ? data.lastmessages : "This will be message"}{" "}
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm">
          {data?.lastMessageTime
            ? formatCustomDate(data?.lastMessageTime)
            : "00:00"}
        </p>
        <p className="flex justify-end">
          {/* <span className="bg-primary px-2 rounded-full text-white">2</span> */}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
