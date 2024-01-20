import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../redux/hooks";
import { profileUpdate } from "../../../types/profileUpdate";

const Profile_dev = () => {
  // User Details Data
  const { user } = useAppSelector((state) => state.userDetails);

  // Handel Update Profile
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<profileUpdate>({
    defaultValues: user
  });

  console.log(control);


  return <div>DD</div>;
};

export default Profile_dev;
