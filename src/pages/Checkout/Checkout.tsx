import CustomButton from "../../components/Buttons/CustomButton";
import CustomInput from "../../components/Dashboard/Ui/Input/CustomInput";
import PageHead from "../../components/Ui/PageHead/PageHead";
import { useForm } from "react-hook-form";
import { getUserInfo } from "../../services/authService";
import { redirect, useParams } from "react-router-dom";
import { useGetBatchQuery } from "../../redux/api/batch/batchAPI";
import { generateTransactionId } from "../../helpers/generateTranId/generateTranId";
import { useInitPaymentMutation } from "../../redux/api/Payments/paymentsAPI";

const Checkout = () => {
  // User Details

  const user = getUserInfo();

  // Batch / Course Id
  const { id } = useParams();

  // Data Tyes
  type Inputs = {
    fullName: string;
    address: string;
    phoneNumber?: string;
    zipCode?: string;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  // Get Batch Information
  const batchData = useGetBatchQuery(id);

  // Init Payment By Redux
  const [initPayment] = useInitPaymentMutation();

  const onSubmit = async (data: Inputs) => {
    const tranId = generateTransactionId(user.userId, 3333);
    const initData = {
      userId: user.userId,
      fullName: data.fullName,
      phone: data.phoneNumber,
      address: data.address,
      zipCode: data.zipCode,
      amount: 3333,
      currency: "BDT",
      method: "SSL",
      status: false,
      tranID: tranId,
      courseId: id,
      email: user._id,
    };
    const response = await initPayment(initData);
    console.log(response.data);
    if (response) {
      window.location.href = response.data;
    }
  };

  return (
    <div>
      <PageHead subHead="" title="Checkout" />

      <div className="my-10 md:flex w-full space-x-4">
        <div className="w-full md:w-9/12">
          <div className="shadow p-4">
            <h2 className="text-large font-semibold">Billing Address</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  name="fullName"
                  placeholder="Full Name  "
                  errors={errors}
                  control={control}
                />

                <CustomInput
                  name="phoneNumber"
                  placeholder="Phone Number"
                  errors={errors}
                  control={control}
                />

                <CustomInput
                  name="address"
                  placeholder="Address Line 1"
                  errors={errors}
                  control={control}
                />

                <CustomInput
                  name=""
                  placeholder="Address Line 2 (Optional)"
                  errors={errors}
                  control={control}
                />
                <CustomInput
                  name="zipCode"
                  placeholder="Zip Code  "
                  errors={errors}
                  control={control}
                  type="number"
                />
              </div>
              <div className="flex justify-center w-full my-6">
                <CustomButton content="Make Payment" icon="fa-arrow-right" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-3/12">
          <div className="shadow p-4">
            <h2 className="text-center bg-primary text-white text-large  py-2">
              Slelected Course
            </h2>
            <div className="my-4">
              <img
                src={batchData?.data?.thambnail}
                className="h-[150px] w-full mb-4"
                alt=""
              />
              <h2 className="font-semibold text-lg text-primary">
                {batchData?.data?.title}
              </h2>
              <h3>
                <strong>Start Date:</strong> {batchData?.data?.startTime}
              </h3>
              <h3>
                <strong>Start Time:</strong> {batchData?.data?.session}
              </h3>
              <h2 className="my-2 text-primary font-bold">
                <span>৳</span>
                <span className="text-extraLarge">3333</span>
              </h2>
            </div>
            <h2 className="font-semibold my-4">Benefits</h2>
            <ul className="list-disc mx-4">
              <li> Access To Slack Community</li>
              <li> Access To the suport Team</li>
              <li> Algorithomic biddibg</li>
              <li> Keyword And ASIN harvesting </li>
            </ul>
            <h2 className="font-semibold my-4">Features</h2>
            <ul className="list-disc mx-4">
              <li> Access To Slack Community</li>
              <li> Access To the suport Team</li>
              <li> Algorithomic biddibg</li>
              <li> Keyword And ASIN harvesting </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
