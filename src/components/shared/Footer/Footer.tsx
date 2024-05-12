import { Link } from "react-router-dom";
import logo from "../../../assets/logo/black-logo.png";
import logowhite from "../../../assets/logo/white-logo.png";
import logo1 from "../../../assets/logo/logo.png";
import Font from "../../icons/Font";
import { Input, message } from "antd";
import CustomButton from "../../Buttons/CustomButton";
import { useInsertNewslatterEmailMutation } from "../../../redux/api/newslatter/newslatter";
const Footer = ({ dark }: any) => {
  // Insert Newsletter Email Address in the database
  const [insertNewslatterEmail] = useInsertNewslatterEmailMutation();

  // Handle newslatter form
  const handleNewslatter = async (e: any) => {
    e.preventDefault();
    const res = await insertNewslatterEmail({ email: e.target.email.value });

    // Notify
    if (res) {
      message.success("Subscribed. Thank you for keeping with us");
    }
  };

  return (
    <div>
      <div className=" border-t-2 border-primaryHover dark:border-gray-dark  px-4 py-10 text-lg lg:text-base md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="my-6 leading-8">
          <div className="flex space-x-2">
            <img src={logo1} className="h-[30px] rotate-90" alt="" />
            {dark ? <img src={logowhite} alt="" /> : <img src={logo} alt="" />}
          </div>
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
            <form onSubmit={handleNewslatter}>
              <Input
                name="email"
                className="my-4"
                placeholder="Enter Your Email"
              />
              <CustomButton type="submit" content="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-10 px-4">
        <div className="flex space-x-2">
          <Link to="terms">Terms</Link>
          <p className="w-[2px] bg-gray"></p>
          <Link to="privacy">Privacy</Link>
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
