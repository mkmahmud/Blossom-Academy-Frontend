import { Link } from "react-router-dom";
import user from "../../../../assets/user/user7.jpg";
import Font from "../../../icons/Font";

const TeacherCard = ({ data }: any) => {
  const { id, firstName, lastName, bio, profileImage } = data;
 
  return (
    <Link to={`/teacher/${id}`}>
      <div className="my-6 mx-auto max-w-[300px] overflow-hidden group ease-in-out duration-300   hover:drop-shadow-xl hover:bg-white ">
        <div className="">
          <div className="h-[300px] bg-primary overflow-hidden">
            <img
              src={profileImage ? profileImage : user}
              alt=""
              className=" w-full origin-bottom	 group-hover:scale-110 h-full ease-in-out duration-300  "
            />
          </div>
          <div className="mx-4 mb-10 mt-4  ">
            <div className="text-center ">
              <div>
                <h2 className="text-large font-semibold">
                  {firstName ? firstName : "Name"}{" "}
                  <span> {lastName ? lastName : ""}</span>
                </h2>
                <h2 className="text-base font-semibold mb-4">
                  {bio ? bio : "bio"}
                </h2>
              </div>

              <div className="flex justify-between space-x-8 my-2">
                <p className="my-2">
                  <span className="text-primary ">
                    <Font iconName="fa-users" />
                  </span>{" "}
                  <span> 0 students</span>
                </p>
                <p className="my-2">
                  <span className="text-primary ">
                    <Font iconName="fa-book" />
                  </span>{" "}
                  <span> 4 Batch</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeacherCard;
