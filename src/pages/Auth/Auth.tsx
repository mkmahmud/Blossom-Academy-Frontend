import { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import Register from "../../components/Ui/Auth/Register/Register";
import Login from "../../components/Ui/Auth/Login/Login";
import { Link, useNavigate } from "react-router-dom";
import Font from "../../components/icons/Font";
import { isLoggedIn } from "../../services/authService";
 
const Auth = () => {
  // Navigate If User logged In
  const navigate = useNavigate();
  const loggedUser = isLoggedIn();

  useEffect(() => {
    if (loggedUser) {
      navigate("/dashboard");
    }
  }, [loggedUser]);

  // Set log/sign up stats
  const [register, setRegister] = useState(false);
  return (
    <div className="bg-secondary  relative  h-[100vh] container   max-w-[1280px] mx-auto text-white md:flex items-center">
      <div className="hidden md:block w-1/2 h-full relative border-l-2 border-secondary">
        <div className="bg-white h-full rounded-br-[400px] overflow-hidden relative">
          <div className="h-full flex items-center z-10">
            <div className="w-full px-6">
              <h2 className={styles.animatecharcter}>Wellcome to Blossom</h2>
              <p className="py-10 text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                ducimus reiciendis iure delectus asperiores. Doloremque,
                necessitatibus inventore excepturi perspiciatis, mollitia magnam
                laudantium aliquam delectus libero null s fuga vitae!
              </p>
            </div>
          </div>
        </div>
        {/* Dimond shape */}
        {/* <div
          className="text-center bg-secondary absolute h-[300px] bottom-0 left-0 w-[300px] "
          style={{
            clipPath: " circle(59.6% at 33% 67%)",
          }}
        >
          <img src={img} className="h-full w-full" alt="" />
        </div> */}
        {/* shape */}
        <div
          className="bg-secondary absolute h-[500px] top-0 w-full "
          style={{ clipPath: " polygon(25% 14%, 100% 100%, 100% 65%)" }}
        ></div>
      </div>{" "}
      <div className="w-full md:w-1/2 overflow-hidden">
        <div className="absolute top-0">
          <button
            onClick={() => {
              setRegister(!register);
            }}
            type="submit"
            className="w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-white px-6 py-4 text-base text-black font-semibold  rounded-r-full"
          >
            <span>{register ? "Log In" : "Register"}</span>{" "}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gray opacity-40 group-hover:animate-shine" />
          </button>
        </div>
        {/* Home Button */}
        <div className="absolute top-0 right-0">
          <button
            type="submit"
            className="w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-white px-6 py-4 text-base text-black font-semibold  rounded-l-full"
          >
            <Link to="/">
              <span>Home</span>{" "}
              <span className="ml-2">
                {" "}
                <Font iconName="fa-house"></Font>
              </span>
            </Link>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gray opacity-40 group-hover:animate-shine" />
          </button>
        </div>
        {/* Log In */}
        {!register && <Login />}

        {/* Sign Up */}
        {register && <Register setRegister={setRegister} />}
      </div>{" "}
    </div>
  );
};

export default Auth;
