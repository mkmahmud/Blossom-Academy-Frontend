import user from "../../assets/user/dummy.png";

const UserCard = () => {
  return (
    <div className="flex  space-x-2 justify-between items-center   my-2 pb-2 px-2 border-b-2 border-gray">
      <div className="flex space-x-2">
        <div>
          <img src={user} alt="" className="h-14 w-14 rounded-full" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Zack FOx</h2>
          <p>THis will be messege</p>
        </div>
      </div>
      <div>
        <p className="text-sm">10:49 AM</p>
        <p className="flex justify-end">
          <span className="bg-primary px-2 rounded-full text-white">2</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
