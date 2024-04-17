import { useForm } from "react-hook-form";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";
import { getUserInfo } from "../../../services/authService";
import { useUpdateUserPasswordMutation } from "../../../redux/api/users/usersAPI";
import { message } from "antd";

const Security = () => {
  // Get User information
  const userInfo = getUserInfo();

  // INput Types
  interface Inputs {
    currentPass: string;
    newPass: string;
    confirmPass: string;
  }

  // Handle submit
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  // Handle Update Password by redux
  const [updateUserDetails] = useUpdateUserPasswordMutation();

  const onSubmit = async (data: Inputs) => {
    // @ts-ignore
    const id = userInfo.userId;
    const result = await updateUserDetails({ id, data });

    // @ts-ignore
    if (result.data == id) {
      message.success("Password updated successfully");
      // @ts-ignore
    } else if (result.data == "invalid password") {
      message.error("Invalid Password ");
    }
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
            name="currentPassword"
            placeholder="Current Password"
            errors={errors}
            control={control}
          />
          <CustomInput
            name="newPassword"
            placeholder="New Password"
            errors={errors}
            control={control}
            type="password"
          />
          <CustomInput
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            errors={errors}
            control={control}
            type="password"
          />
          <div className="my-4 flex">
            <div>
              <CustomButton type="submit" content="Update" icon="fa-check" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
