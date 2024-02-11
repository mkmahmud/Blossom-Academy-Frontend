import { Link } from "react-router-dom";
import logo from "../../../assets/logo/black-logo.png";
import Font from "../../icons/Font";
import { Input } from "antd";
import CustomButton from "../../Buttons/CustomButton";
const Footer = () => {
  return (
    <div>
      <div className=" border-t-2 border-primaryHover px-4 py-10 text-lg lg:text-base md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="my-6 leading-8">
          <img src={logo} alt="" />
          <p>
            <span>Call Us</span> <br />
            <span>800 388 80 90or667 234 32 67</span>
          </p>
          <p>hello@gmail.com</p>
          <p>9 AM – 5 PM DC, Monday – Friday</p>
          <p> PO Box 567 Hostin st. 433, Los Angeles California, US.</p>
        </div>
        <div className="my-6 ">
          <h2 className="text-large font-bold">Links</h2>
          <ul className="leading-8 ml-2">
            <li className="flex items-center">
              <Link to="/dashboard">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Profile</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/about">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">About Us</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/teachers">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Teachers</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/auth">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Register</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-6 ">
          <h2 className="text-large font-bold">Information</h2>
          <ul className="leading-8 ml-2">
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">facebook</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Linkedin</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Instagram</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-6 ">
          <h2 className="text-large font-bold">Sign Up for Our Newsletter</h2>
          <p className="my-4">
            Blossom is a flexible instructional delivery system that encompasses
            any kind of learning that takes place via the Internet.
          </p>

          <div>
            <Input className="my-4" placeholder="Enter Your Email" />
            <CustomButton content="Subscribe" />
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-10">
        <div className="flex space-x-2">
          <a href="#">Terms</a>
          <p className="w-[2px] bg-gray"></p>
          <a href="#">Privacy</a>
        </div>
        <p className="   ">
          Copyright @ 2023 Design & Developed By{" "}
          <Link to="/" className="text-primary">
            Blossom
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
