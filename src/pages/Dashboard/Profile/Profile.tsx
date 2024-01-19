import userImage from "../../../assets/user/client-4.jpg";
import { useAppSelector } from "../../../redux/hooks";

const Profile = () => {
  // User Details Data
  const { user } = useAppSelector((state) => state.userDetails);

  return (
    <div className=" ">
      <div>
        <div className="">
          <div className="flex space-x-4 p-4 justify-between    shadow">
            <div className=" ">
              <h2 className="text-xl font-semibold text-secondary">
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.bio}</p>
              <p>{user.phone}</p>
            </div>
            <img
              src={user?.profileImage ? user?.profileImage : userImage}
              className="h-[100px] w-[100px] rounded-full"
              alt="User Image"
            />
          </div>

          {/* Profile Details */}

          <div className="my-10  shadow p-4">
            <div className="flex justify-between  mb-4 cursor-pointer">
              <div>
                <h2 className="text-xl font-semibold text-secondary">
                  Personal Details
                </h2>
              </div>
            </div>
            <div>
              {user &&
                user?.career[0]?.aboutMe.map((p, index) => (
                  <div key={index} className="my-4">
                    {p.title}{" "}
                  </div>
                ))}
            </div>
          </div>

          {/* Education */}
          <div className="my-10 shadow p-4">
            <div className="flex justify-between  mb-4 cursor-pointer">
              <div>
                <h2 className="text-xl font-semibold text-secondary">
                  Education
                </h2>
              </div>
            </div>
            {user &&
              user?.career[0]?.education.map((p, index) => (
                <div key={index} className="my-4 shadow-lg p-2">
                  <h2 className="text-xl font-semibold">
                    {p.institution}, <span>{p.location}</span>
                  </h2>
                  <h3 className="text-lg font-semibold">{p.description}</h3>
                  <p className="py-2">{p.description}</p>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <p>{p.startYear}</p>
                      <p>~</p>
                      <p>{p.endYear}</p>
                    </div>
                    <p>CGPA: {p.result}</p>
                  </div>
                </div>
              ))}
          </div>
          {/* Experience */}
          <div className="shadow my-10 p-4">
            <div className="flex justify-between  mb-4 cursor-pointer">
              <div>
                <h2 className="text-xl font-semibold text-secondary">
                  Experience
                </h2>
              </div>
            </div>
            {user &&
              user?.career[0]?.experience.map((p, index) => (
                <div key={index} className="my-4 shadow-lg p-2">
                  <h2 className="text-xl font-semibold">
                    {p.institution}, <span>{p.location}</span>
                  </h2>
                  <h3 className="text-lg font-semibold">{p.description}</h3>
                  <p className="py-2">{p.description}</p>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <p>{p.startYear}</p>
                      <p>~</p>
                      <p>{p.endYear}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
