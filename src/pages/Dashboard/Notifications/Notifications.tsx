import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../../components/Buttons/CustomButton";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import Toggle from "../../../components/Dashboard/Ui/Toggle/Toggle";
import { Select, message } from "antd";
import { Option } from "antd/es/mentions";
import { getUserInfo } from "../../../services/authService";
import { useCreateNotificationsMutation } from "../../../redux/api/notification/notification";

const Notifications = () => {
  // User Information
  const user = getUserInfo();
  //   User Role
  const role = (user as { role: string }).role;

  // INput Types
  interface Inputs {
    status: boolean;
    content: string;
    link: string;
    receiver: string;
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  // Create Notification using Redux

  const [createNotifications] = useCreateNotificationsMutation();

  const onSubmit = async (data: Partial<Inputs>) => {
    data.status = true;

    const res = await createNotifications(data);
    // @ts-ignore
    if (res?.data?.data?.status) {
      message.success("Notification sent successfully");
    }
  };

  return (
    <div>
      <div className="border-2 border-primaryHover p-2 mb-4">
        <h2 className="font-bold text-xl text-primary">Notifications</h2>
        <p className="py-2">
          You will get only notification what have enabled.
        </p>
      </div>
      {/* Create Fake Notification */}
      {
        //@ts-ignore
        user?.role === "admin" && (
          <div className="border-2 border-primaryHover p-2 mb-4">
            <h2 className="font-bold text-xl text-primary">
              Make A Notification
            </h2>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-4 space-x-2 items-center"
              >
                <CustomInput
                  name="content"
                  placeholder="Content  "
                  errors={errors}
                  control={control}
                />

                <CustomInput
                  name="link"
                  placeholder="Path"
                  errors={errors}
                  control={control}
                />

                <CustomInput
                  name="receiver"
                  placeholder="Receiver  "
                  errors={errors}
                  control={control}
                />

                <div>
                  <CustomButton type="submit" content="Send" />
                </div>
              </form>
            </div>
          </div>
        )
      }

      <div className="border-2 border-primaryHover p-2">
        <h2 className="font-bold text-xl text-primary">Security Alerts</h2>
        <p className="py-2">
          You will get only those email notification what you want.
        </p>
        <div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Email me whenever encounter unusual activity</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Email me if new browser is used to sign in</p>
          </div>
        </div>
      </div>
      <div className="border-2 border-primaryHover p-2 mt-10">
        <h2 className="font-bold text-xl text-primary">News</h2>
        <p className="py-2">
          You will get only those email notification what you want.
        </p>
        <div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Notify me by email about sales and latest news</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Email me about new features and updates</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Email me about tips on using account</p>
          </div>
        </div>
      </div>
      <div className="border-2 border-primaryHover p-2 mt-10">
        <h2 className="font-bold text-xl text-primary">Courses</h2>
        <p className="py-2">
          You will get only those email notification what you want.
        </p>
        <div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Updates from Classes You're Taking</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Updates from Teacher Discussions</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Personalized Class Recommendations</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle status={true} />
            <p>Featured content</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Product updates</p>
          </div>
          <div className="flex space-x-4 items-center my-2">
            <Toggle />
            <p>Events and offers</p>
          </div>
        </div>
      </div>
      <div className="flex my-4">
        <div className="">
          <CustomButton type="submit" content="Update" icon="fa-pen" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
