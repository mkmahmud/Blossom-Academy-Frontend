import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MainInput from "../../../Forms/Input/MainInput";
import Font from "../../../icons/Font";

const Register = () => {
  // Handel Terms and Conditions
  const [terms, setTerms] = useState(false);
  // React hook form
  type Inputs = {
    fullName: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="max-w-[400px] mx-auto mt-[150px]">
      <div className="text-center">
        <h2 className="font-bold text-extraLarge">Blossom</h2>
        <p className="text-xl my-4">Create An Account</p>
      </div>
      {/* Register Form */}
      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <MainInput
          type="text"
          placeholder="Full Name"
          icon="fa-user"
          register={register("fullName", { required: true })}
          error={errors.fullName}
        />
        <MainInput
          type="email"
          placeholder="Email Address"
          icon="fa-envelope"
          register={register("email", { required: true })}
          error={errors.email}
        />
        <MainInput
          type="password"
          placeholder="Password"
          icon="fa-lock"
          register={register("password", { required: true })}
          error={errors.password}
        />

        {/* Terms and conditions */}
        <div className="block flex justify-between items-center  ">
          <div>
            <input
              id="checkbox-1"
              className=""
              type="checkbox"
              required
              onClick={() => {
                setTerms(!terms);
              }}
            />

            <label
              htmlFor="checkbox-1"
              className="cursor-pointer select-none  ml-2"
            >
              I agree to the terms of service
            </label>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full my-10 group overflow-hidden flex justify-center items-center relative   bg-${
            terms ? "primary" : "primaryHover"
          } px-6 py-4 text-base text-white font-semibold  rounded-full`}
        >
          <span>Sign Up</span>{" "}
          <span className="ml-4">
            <Font iconName="fa-paper-plane"></Font>
          </span>
          <div
            className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 ${
              terms && "bg-primaryHover"
            } opacity-40 group-hover:animate-shine`}
          />
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

export default Register;
