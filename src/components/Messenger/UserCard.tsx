const UserCard = ({ data }: any) => {
   
  return (
    <div className="flex  space-x-2 justify-between items-center   my-2 pb-2 px-2 border-b-2 border-gray cursor-pointer">
      <div className="flex space-x-2">
        <div>
          <img
            src={data?.reciverImg}
            alt=""
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{data?.reciverName}</h2>
          <p>THis will be messege</p>
        </div>
      </div>
      <div>
        <p className="text-sm">10:49 AM</p>
        <p className="flex justify-end">
          {/* <span className="bg-primary px-2 rounded-full text-white">2</span> */}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
