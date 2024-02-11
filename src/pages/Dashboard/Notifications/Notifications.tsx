import CustomButton from "../../../components/Buttons/CustomButton";
import Toggle from "../../../components/Dashboard/Ui/Toggle/Toggle";

const Notifications = () => {
  // INput Types

  return (
    <div>
      <div className="border-2 border-primaryHover p-2 mb-4">
        <h2 className="font-bold text-xl text-primary">Notifications</h2>
        <p className="py-2">
          You will get only notification what have enabled.
        </p>
      </div>
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
            <Toggle />
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
