import { Link } from "react-router-dom";
import logo from "../../../assets/logo/white-logo.png";
import Font from "../../icons/Font";
const Footer = () => {
  return (
    <div>
      <div className="bg-secondary text-white px-4 py-10 text-lg lg:text-base md:grid md:grid-cols-2 lg:grid-cols-4">
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
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
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
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <Font iconName="fa-angle-right"></Font>
                <span className="ml-4">Start Here</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-6 ">
          <h2 className="text-large font-bold">Sign Up for Our Newsletter</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            necessitatibus dolor eius magnam fugit quae pariatur beatae, ab
            voluptatibus aut eum repellat cumque ad et tenetur, officia ut
            inventore ducimus.
          </p>
        </div>
      </div>
      <p className="text-center py-2 text-lg">
        Copyright @ 2023 Design & Developed By <Link to="/" className="text-primary">Blossom</Link>
      </p>
    </div>
  );
};

export default Footer;
