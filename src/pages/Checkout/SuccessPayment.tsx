import MainButton from "../../components/Buttons/MainButton";
import Font from "../../components/icons/Font";

const SuccessPayment = () => {
  return (
    <div className="pt-20 relative h-screen">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
        <div className="mx-auto bg-primary p-2 text-extraLarge h-20 w-20 flex justify-center items-center rounded-full text-white ">
          <Font iconName="fa-check-double" />
        </div>
        <div>
          <div className="my-10">
            <h2 className="text-extraLarge font-semibold ">Congratulations</h2>
            <p className="my-2">You have successfylly purched our course</p>
          </div>
          <div className="flex justify-center">
            <MainButton
              path="/dashboard"
              icon="fa-plane"
              content="Go Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
