import { useState, useEffect } from "react";
import logo from "../../../assets/logo/logo.png";
import logo1 from "../../../assets/logo/black-logo.png";
import logowhite from "../../../assets/logo/white-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Font from "../../icons/Font";
import MainButton from "../../Buttons/MainButton";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "../../../services/authService";
import userImage from "../../../assets/user/dummy.png";
import { useAppSelector } from "../../../redux/hooks";
import { Popover, Space } from "antd";
import {
  useGetNotificationsQuery,
  useUpdateNotificationsMutation,
} from "../../../redux/api/notification/notification";
import { timeAgo } from "../../../helpers/calculate/calculate";
import Empty from "../../Dashboard/Ui/Empty/Empty";

const Navbar = ({ dark, darkModeHandler }: any) => {
  // User logged data

  const loggedUser = isLoggedIn();

  const navigate = useNavigate();

  // Sticky Navbar
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Profile Menus
  const [profile, setProfile] = useState(false);

  //   Handele Mobile Menus
  const [mobileMenu, setMobileMenu] = useState(false);

  //   Menus
  const menus = [
    { title: "About", dropdown: null },
    { title: "Teachers", dropdown: null },
    {
      title: "Courses",
      dropdown: [
        {
          title: "Live-courses",
          dropdown: null,
        },
        {
          title: "Video-courses",
          dropdown: null,
        },
      ],
    },
    { title: "Faq", dropdown: null },
  ];

  // Handel Logout
  const handelLogout = () => {
    removeUserInfo("access_token");
    navigate("/auth");
  };

  // User Details Data
  const userDetails = useAppSelector((state) => state.userDetails);

  // Notifications Data
  const user = getUserInfo();
  //@ts-ignore
  const { data: notificationsData } = useGetNotificationsQuery(user?.userId, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 20000,
  });

  //  Check Is unread Notifications
  const isNotificationsavailable = notificationsData?.some(
    (notification: { status: boolean }) => notification.status === true
  );

  // Update Notification
  const [updateNotifications] = useUpdateNotificationsMutation();
  const handleNotificationUpdate = async (id: any) => {
    await updateNotifications(id);
  };

  return (
    <div
      className={`container   h-[60px] fixed top-0 w-full z-10  mx-auto py-2 px-4 max-w-[1280px] dark:text-white   ease-in-out duration-300 ${
        isSticky
          ? "dark:bg-gray-dark bg-transparent   ease-in-out duration-300"
          : "dark:bg-gray-dark "
      }`}
    >
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="flex space-x-2">
            <img src={logo} className=" h-[30px] rotate-90" alt="" />
            {dark ? (
              <img src={logowhite} className="" alt="" />
            ) : (
              <img src={logo1} className="" alt="" />
            )}
          </Link>
        </div>
        {/* Desktop Menus */}
        <div className="hidden md:block">
          <ul className=" flex space-x-4   font-medium">
            {menus.map((menu, index) => (
              <li className="py-2 group" key={index}>
                <Link
                  to={menu?.dropdown ? "" : menu.title}
                  className="hover:text-primary flex items-center text-base "
                >
                  <span className="mx-2">{menu?.title}</span>
                  {menu?.dropdown && (
                    <Font iconName="fa-angle-down text-base"></Font>
                  )}
                </Link>
                {/* Dropdown Menus */}
                {menu?.dropdown && (
                  <ul className="absolute bg-gray dark:bg-gray-dark py-2 px-4 top-14 hidden group-hover:block z-10">
                    {menu?.dropdown.map((m, i) => (
                      <li className="my-2" key={i}>
                        {" "}
                        <Link
                          to={m?.title}
                          className="hover:text-primary flex items-center text-base "
                        >
                          {m?.title}{" "}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex space-x-4 hidden md:block ">
          <li className="flex items-center ">
            {/* Dark / Light button */}
            <div className="mr-4">
              {dark && (
                <div
                  onClick={() => darkModeHandler()}
                  className="text-large  cursor-pointer   text-center text-primary  dark:text-white "
                >
                  <i className="fa-regular fa-moon"></i>{" "}
                </div>
              )}
              {!dark && (
                <div
                  onClick={() => darkModeHandler()}
                  className="text-large  cursor-pointer   text-center text-primary  "
                >
                  <Font iconName="fa-moon  " />
                </div>
              )}
            </div>
            {/* Logged User options */}
            {loggedUser ? (
              <div className="relative  flex items-center space-x-4">
                {/* Message */}
                <div className="text-large  cursor-pointer   text-center text-primary mx-2">
                  <Link to="/messenger">
                    <Font iconName="fa-message" />
                  </Link>
                  {/* <i className="fa-regular fa-message"></i> */}
                </div>
                {/* Notifications */}
                <div>
                  <Popover
                    content={
                      <div className="  pb-2 w-[400px] mt-2 dark:bg-gray-dark dark:text-white">
                        <h2 className="font-semibold p-4">Notifications</h2>
                        <div className="h-[400px]  overflow-y-scroll">
                          {notificationsData &&
                            notificationsData
                              .slice()
                              .sort(
                                (
                                  a: { createdAt: string | number | Date },
                                  b: { createdAt: string | number | Date }
                                ) =>
                                  new Date(b.createdAt).getTime() -
                                  new Date(a.createdAt).getTime()
                              )
                              .map((notification: any) => (
                                <div
                                  key={notification._id}
                                  className="px-4 py-2 flex items-center border-b border-gray cursor-pointer"
                                  onClick={() => {
                                    handleNotificationUpdate(notification._id);
                                  }}
                                >
                                  <div className="text-large w-[70px]   text-center text-primary">
                                    {notification?.status ? (
                                      <Font iconName="fa-bell" />
                                    ) : (
                                      <i className="fa-regular fa-bell"></i>
                                    )}
                                  </div>
                                  <div className="mx-2">
                                    <Link
                                      to={notification?.link}
                                      className="text-sm"
                                    >
                                      <strong>{notification?.content}</strong>
                                    </Link>
                                    <p className="my-2 text-sm">
                                      {timeAgo(notification.createdAt)}
                                    </p>
                                  </div>
                                </div>
                              ))}

                          {/* No Notification */}

                          {notificationsData?.length <= 0 && (
                            <Empty content="No Notification" />
                          )}
                        </div>
                      </div>
                    }
                    trigger="click"
                    placement="bottomLeft"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <div className="text-large  cursor-pointer   text-center text-primary">
                          {isNotificationsavailable ? (
                            <Font iconName="fa-bell" />
                          ) : (
                            <i className="fa-regular fa-bell"></i>
                          )}
                        </div>
                      </Space>
                    </a>
                  </Popover>
                </div>
                {/* Profile */}
                <div>
                  <Popover
                    content={
                      <div className="  dark:bg-gray-dark dark:text-white   p-4 w-[250px] mt-2">
                        <div className="flex items-center">
                          <img
                            src={
                              userDetails?.user?.profileImage
                                ? userDetails?.user?.profileImage
                                : userImage
                            }
                            alt="Profile Image"
                            className="rounded-full h-10 w-10 "
                          />
                          <div className="ml-4">
                            <h2 className="font-semibold">
                              {userDetails?.user?.firstName
                                ? userDetails?.user?.firstName
                                : "User Name"}
                            </h2>
                            <p className="font-bold">
                              {" "}
                              ID:{" "}
                              {userDetails?.user?.userId
                                ? userDetails?.user?.userId
                                : "ID"}
                            </p>
                          </div>
                        </div>
                        <ul className="mt-4">
                          <li className=" py-2   ">
                            <Link to="/dashboard">
                              {" "}
                              <Font iconName="fa-table-columns" />{" "}
                              <span className="ml-2">Dashboard</span>
                            </Link>
                          </li>
                          <li className=" py-2   ">
                            <Link to="/">
                              {" "}
                              <Font iconName="fa-pen-to-square" />{" "}
                              <span className="ml-2">Edit Profile</span>
                            </Link>
                          </li>
                          <li
                            className=" py-2  text-primary cursor-pointer"
                            onClick={() => {
                              handelLogout();
                            }}
                          >
                            {" "}
                            <Font iconName="fa-right-to-bracket"></Font>{" "}
                            <span className="ml-2">Log Out</span>
                          </li>
                        </ul>
                      </div>
                    }
                    trigger="click"
                    placement="bottomRight"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <img
                          src={
                            userDetails?.user?.profileImage
                              ? userDetails?.user?.profileImage
                              : userImage
                          }
                          alt="Profile Image"
                          className="rounded-full h-10 w-10 cursor-pointer border"
                        />
                      </Space>
                    </a>
                  </Popover>
                </div>
              </div>
            ) : (
              <MainButton
                path="/auth"
                content="log in / sign up"
                icon="fa-right-to-bracket"
              ></MainButton>
            )}
          </li>
        </ul>
        {/* Mobile Menu */}
        <button className="font-semibold md:hidden">
          {mobileMenu ? (
            <i
              className="fa-solid fa-minus"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars-staggered"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            ></i>
          )}
        </button>
        {mobileMenu && (
          <div className="absolute bg-gray h-screen top-0 w-2/3 sm:w-1/2 left-0 px-4">
            <div>
              <div className="text-2xl font-bold py-10">
                <img className="block mx-auto" src={logo} alt="" />
              </div>
              <ul className="    font-medium ">
                {menus.map((menu, index) => (
                  <li className="py-2 group my-4 w-full relative" key={index}>
                    <Link
                      to={menu?.dropdown ? "" : menu.title}
                      className="hover:text-primary flex items-center justify-between text-base "
                    >
                      <span className="mx-2 ">{menu?.title}</span>
                      {menu?.dropdown && (
                        <Font iconName="fa-angle-down text-base"></Font>
                      )}
                    </Link>
                    {/* Dropdown Menus */}
                    {menu?.dropdown && (
                      <ul className="  bg-white py-2 px-4 mt-4  hidden group-hover:block z-10">
                        {menu?.dropdown.map((m, i) => (
                          <li className="my-2" key={i}>
                            {" "}
                            <Link
                              to={m?.title}
                              className="hover:text-primary flex items-center text-base "
                            >
                              {m?.title}{" "}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {loggedUser ? (
                <div className="relative  ">
                  <img
                    src={
                      userDetails?.user?.profileImage
                        ? userDetails?.user?.profileImage
                        : userImage
                    }
                    alt="Profile Image"
                    className="rounded-full h-10 w-10 cursor-pointer"
                    onClick={() => {
                      setProfile(!profile);
                    }}
                  />
                  {profile && (
                    <div className="absolute right-0 bg-white shadow-lg p-4 w-[250px] mt-2">
                      <div className="flex items-center">
                        <img
                          src={
                            userDetails?.user?.profileImage
                              ? userDetails?.user?.profileImage
                              : userImage
                          }
                          alt="Profile Image"
                          className="rounded-full h-10 w-10 "
                        />
                        <div className="ml-4">
                          <h2 className="font-semibold">
                            {userDetails?.user?.firstName
                              ? userDetails?.user?.firstName
                              : "user Namw"}
                          </h2>
                          <p className="font-bold">
                            ID:{" "}
                            {userDetails?.user?.userId
                              ? userDetails?.user?.userId
                              : "ID"}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-4">
                        <li className=" py-2   ">
                          <Link to="/dashboard">
                            {" "}
                            <Font iconName="fa-table-columns" />{" "}
                            <span className="ml-2">Dashboard</span>
                          </Link>
                        </li>
                        <li className=" py-2   ">
                          <Link to="/">
                            {" "}
                            <Font iconName="fa-pen-to-square" />{" "}
                            <span className="ml-2">Edit Profile</span>
                          </Link>
                        </li>
                        <li
                          className=" py-2  text-primary cursor-pointer"
                          onClick={() => {
                            handelLogout();
                          }}
                        >
                          {" "}
                          <Font iconName="fa-right-to-bracket"></Font>{" "}
                          <span className="ml-2">Log Out</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <MainButton
                  path="/auth"
                  content="log in / sign up"
                  icon="fa-right-to-bracket"
                ></MainButton>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
