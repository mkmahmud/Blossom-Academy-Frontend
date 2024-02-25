import MainButton from "../../../Buttons/MainButton";
import userImage from "../../../../assets/user/dummy.png";
import Font from "../../../icons/Font";
import { Link, useLocation } from "react-router-dom";
import { getUserInfo } from "../../../../services/authService";
import { useAppSelector } from "../../../../redux/hooks";

const Sidebar = () => {
  // User Information
  const user = getUserInfo();

  //   User Role
  const role = (user as { role: string }).role;

  // Url path
  const urlPath = `/dashboard`;

  // Active Path
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // profile Background

  let profileBG = "primary";
  if (role === "super_admin") {
    profileBG = "gray";
  } else if (role === "admin") {
    profileBG = "black";
  } else if (role === "management") {
    profileBG = "secondary";
  } else if (role === "teacher") {
    profileBG = "primaryHover";
  }

  // User Details Data
  const userDetails = useAppSelector((state) => state.userDetails);

  return (
    <div>
      <div className="px-2 py-4">
        <div className="bg-white border border-secondary text-center pb-4">
          <div className={`h-[100px] bg-${profileBG}`}></div>
          <div>
            <img
              src={
                userDetails?.user?.profileImage
                  ? userDetails?.user?.profileImage
                  : userImage
              }
              className="h-28 w-28 rounded-full p-1 border border-secondary mx-auto -mt-14 bg-white"
              alt="User Image"
            />
            <h2 className="text-xl font-semibold mt-4">
              {" "}
              {userDetails?.user?.firstName ? (
                <>
                  {userDetails?.user?.firstName}{" "}
                  <span>{userDetails?.user?.lastName}</span>
                </>
              ) : (
                "User Name"
              )}
            </h2>
            <p> {userDetails?.user?.bio ? userDetails?.user?.bio : "Bio"}</p>
            <div className="flex justify-center my-2">
              <MainButton path="/" content="Go To Dashboard" />
            </div>
          </div>
        </div>
        <div className="bg-white border border-secondary text-center  mt-10">
          <div className="text-left p-4  ">
            <h2 className="uppercase text-lg text-secondary font-semibold ">
              Dashboard
            </h2>
            {/* Super Admin */}
            {role === "super_admin" && (
              <ul className="mt-4">
                <Link to={`${urlPath}`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-home" />{" "}
                    <span className="ml-4"> Dashboard</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/profile`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/profile`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-user" />{" "}
                    <span className="ml-4"> Profile</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/users`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/users`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-users" />{" "}
                    <span className="ml-4"> Users</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/courses`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/courses`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-book" />{" "}
                    <span className="ml-4">Courses</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/batch`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/batch`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-layer-group" />{" "}
                    <span className="ml-4">Batch</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/management`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/management`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-list-check" />{" "}
                    <span className="ml-4">Managements</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/orders`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/orders`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-first-order" />{" "}
                    <span className="ml-4">Orders</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/notifications`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/notifications`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-first-order" />{" "}
                    <span className="ml-4">Notifications</span>
                  </li>
                </Link>
              </ul>
            )}
            {/*  Admin */}
            {role === "admin" && (
              <ul className="mt-4">
                <Link to={`${urlPath}`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-home" />{" "}
                    <span className="ml-4"> Dashboard</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/profile`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/profile`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-user" />{" "}
                    <span className="ml-4"> Profile</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/users`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/users`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-users" />{" "}
                    <span className="ml-4"> Users</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/courses`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/courses`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-book" />{" "}
                    <span className="ml-4">Courses</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/batch`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/batch`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-layer-group" />{" "}
                    <span className="ml-4">Batch</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/management`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/management`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-list-check" />{" "}
                    <span className="ml-4">Managements</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/orders`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/orders`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-first-order" />{" "}
                    <span className="ml-4">Orders</span>
                  </li>
                </Link>
              </ul>
            )}
            {/*  Management */}
            {role === "management" && (
              <ul className="mt-4">
                <Link to={`${urlPath}`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-home" />{" "}
                    <span className="ml-4"> Dashboard</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/profile`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/profile`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-user" />{" "}
                    <span className="ml-4"> Profile</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/users`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/users`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-users" />{" "}
                    <span className="ml-4"> Users</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/batch`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/batch`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-layer-group" />{" "}
                    <span className="ml-4">Batch</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/courses`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/courses`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-book" />{" "}
                    <span className="ml-4">Courses</span>
                  </li>
                </Link>
               
              </ul>
            )}
            {/*  Teacher */}
            {role === "teacher" && (
              <ul className="mt-4">
                <Link to={`${urlPath}`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-home" />{" "}
                    <span className="ml-4"> Dashboard</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/profile`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/profile`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-user" />{" "}
                    <span className="ml-4"> Profile</span>
                  </li>
                </Link>

                <Link to={`${urlPath}/my-courses`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/my-courses`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-book" />{" "}
                    <span className="ml-4">My Courses</span>
                  </li>
                </Link>

                <Link to={`${urlPath}/skills`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/skills`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-brands fa-hive" />
                    <span className="ml-4">Skills</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/social-links`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/social-links`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-link" />{" "}
                    <span className="ml-4">Social Links</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/schedule`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/schedule`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName=" fa-calendar-days" />{" "}
                    <span className="ml-4">Schedule</span>
                  </li>
                </Link>
             
              </ul>
            )}
            {/*  Student */}
            {role === "student" && (
              <ul className="mt-4">
                <Link to={`${urlPath}`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-home" />{" "}
                    <span className="ml-4"> Dashboard</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/profile`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/profile`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-user" />
                    <span className="ml-4"> Profile</span>
                  </li>
                </Link>
                <Link to={`${urlPath}/social-links`}>
                  <li
                    className={`hover:bg-gray p-4 border-l-4   ${
                      isActive(`${urlPath}/social-links`)
                        ? "bg-gray    border-primary "
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-link" />
                    <span className="ml-4">Social Links</span>
                  </li>
                </Link>
              </ul>
            )}
            <h2 className="uppercase text-lg text-secondary font-semibold mt-4">
              Accounts Settings
            </h2>
            {/* Super Admin */}
            <ul className="mt-4">
              <Link to={`${urlPath}/editUser`}>
                <li
                  className={`hover:bg-gray p-4 border-l-4   ${
                    isActive(`${urlPath}/editUser`)
                      ? "bg-gray    border-primary "
                      : "border-white"
                  }`}
                >
                  <Font iconName="fa-user-pen" />{" "}
                  <span className="ml-4">Edit Profile</span>
                </li>
              </Link>
              <Link to={`${urlPath}/notifications`}>
                  <li
                    className={`hover:bg-gray p-4  border-l-4    ${
                      isActive(`${urlPath}/notifications`)
                        ? "bg-gray border-primary"
                        : "border-white"
                    }`}
                  >
                    <Font iconName="fa-first-order" />{" "}
                    <span className="ml-4">Notifications</span>
                  </li>
                </Link>
              <Link to={`${urlPath}/security`}>
                <li
                  className={`hover:bg-gray p-4 border-l-4   ${
                    isActive(`${urlPath}/security`)
                      ? "bg-gray    border-primary "
                      : "border-white"
                  }`}
                >
                  <Font iconName="fa-shield-halved" />{" "}
                  <span className="ml-4">Security</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
