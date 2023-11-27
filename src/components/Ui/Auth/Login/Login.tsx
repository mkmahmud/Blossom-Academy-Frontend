import { useForm, SubmitHandler } from "react-hook-form";
import MainInput from "../../../Forms/Input/MainInput";
import Font from "../../../icons/Font";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../../../redux/api/auth/authAPI";
import { setToLocalStorage } from "../../../../utils/localStorage";

const Login = () => {
  // Navigate If User logged In
  const navigate = useNavigate();

  // React hook form
  type Inputs = {
    id: string;
    password: string;
  };

  // Handle Redux Login
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await userLogin(data).unwrap();
    setToLocalStorage("access_token", res?.accessToken);
    
    navigate('/profile');
  };
  return (
    <div className="max-w-[400px] mx-auto mt-[150px]">
      <div className="text-center">
        <h2 className="font-bold text-extraLarge">Blossom</h2>
        <p className="text-xl my-4">Sign Into Your Accout</p>
      </div>
      {/* Login Form */}
      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <MainInput
          type="text"
          placeholder="User Id  "
          icon="fa-envelope"
          register={register("id", { required: true })}
          error={errors.id}
        />

        <MainInput
          type="password"
          placeholder="Password"
          icon="fa-lock"
          register={register("password", { required: true })}
          error={errors.password}
        />

        {/* Forgot password */}
        <div className="block flex justify-between items-center  ">
          <label>
            <input id="checkbox-1" className="" type="checkbox" />

            <label
              htmlFor="checkbox-1"
              className="cursor-pointer select-none  ml-2"
            >
              Remember me
            </label>
          </label>
          <p>Forgot Password?</p>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-primary px-6 py-4 text-base text-white font-semibold  rounded-full"
        >
          <span>Log in</span> {/* Button Icon */}
          {isLoading ? (
            <span className="animate-spin">
              <Font iconName="fa-spinner"></Font>
            </span>
          ) : (
            <span className="ml-4">
              <Font iconName="fa-paper-plane"></Font>{" "}
            </span>
          )}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-primaryHover opacity-40 group-hover:animate-shine" />
        </button>
      </form>
      {/* Social Media Login */}
      <div className="flex justify-around my-20">
        <div className="cursor-pointer flex">
          <span className="h-10 w-10 p-2 bg-black flex items-center justify-center">
            <Font iconName="fa-brands fa-google"></Font>
          </span>
          <span className="h-10 w-[100px]  p-2 bg-white text-primary text-sm font-semibold flex items-center justify-center">
            Facebook
          </span>
        </div>
        <div className="cursor-pointer flex">
          <span className="h-10 w-10 p-2 bg-black flex items-center justify-center">
            <Font iconName="fa-brands fa-github"></Font>
          </span>
          <span className="h-10 w-[100px]  p-2 bg-white text-primary text-sm font-semibold flex items-center justify-center">
            Facebook
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
