import { useForm } from "react-hook-form";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";

const Security = () => {
  // INput Types
  interface Inputs {
    currentPass: string;
    newPass: string;
    confirmPass: string;
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };

  return (
    <div>
      <div className="border-2 border-primaryHover p-2 mb-4">
        <h2 className="font-bold text-xl text-primary">Security</h2>
        <p className="py-2">
          Edit your account settings and change your password here.
        </p>
      </div>
      <div className="border-2 border-primaryHover p-2">
        <h2 className="font-bold text-xl text-primary">Change Password</h2>
        <p className="py-2">
          We will email you a confirmation when changing your password, so
          please expect that email after submitting.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            name="currentPass"
            placeholder="Current Password"
            errors={errors}
            control={control}
          />
          <CustomInput
            name="newPass"
            placeholder="New Password"
            errors={errors}
            control={control}
            type="password"
          />
          <CustomInput
            name="confirmPass"
            placeholder="Confirm New Password"
            errors={errors}
            control={control}
            type="password"
          />
          <div className="my-4 flex">
            <div>
              <CustomButton content="Update" icon="fa-plus" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
