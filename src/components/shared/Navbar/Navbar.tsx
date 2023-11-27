import { useState, useEffect } from "react";
import logo from "../../../assets/logo/black-logo.png";
import { Link } from "react-router-dom";
import Font from "../../icons/Font";
import MainButton from "../../Buttons/MainButton";
const Navbar = () => {
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

  //   Handele Mobile Menus
  const [mobileMenu, setMobileMenu] = useState(false);

  //   Menus
  const menus = [
    { title: "home", dropdown: null },
    { title: "About", dropdown: null },
    {
      title: "Courses",
      dropdown: [
        {
          title: "Web-development",
          dropdown: null,
        },
        {
          title: "Digital-Marketing",
          dropdown: null,
        },
      ],
    },
    {
      title: "Class",
      dropdown: [
        {
          title: "Class",
          dropdown: null,
        },
        {
          title: "Class",
          dropdown: null,
        },
        {
          title: "Class",
          dropdown: null,
        },
        {
          title: "Class",
          dropdown: null,
        },
         
      ],
    },
    { title: "Contact", dropdown: null },
  ];

  return (
    <div
      className={`container    mx-auto p-4 max-w-[1280px] ${
        isSticky ? "fixed top-0 w-full z-10" : ""
      }`}
    >
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* Desktop Menus */}
        <div className="hidden md:block">
          <ul className=" flex space-x-4 uppercase font-medium">
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
                  <ul className="absolute bg-gray py-2 px-4 top-16 hidden group-hover:block z-10">
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
        <ul className="flex space-x-4 hidden md:block">
          <li>
            <MainButton
              path="/auth"
              content="log in / sign up"
              icon="fa-right-to-bracket"
            ></MainButton>
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
              <ul className="  uppercase font-medium ">
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
              <MainButton
                path="/auth"
                content="log in / sign up"
                icon="fa-right-to-bracket"
              ></MainButton>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
