import { useNavigate, useParams } from "react-router-dom";
import Font from "../../components/icons/Font";
import { useState } from "react";
import { useValidateAndUpdateMutation } from "../../redux/api/Payments/paymentsAPI";
import Loading from "../../components/Ui/Loading/Loading";
import { useAddStudentIntoBatchMutation } from "../../redux/api/batch/batchAPI";
import { message } from "antd";
import { getUserInfo } from "../../services/authService";
import CustomButton from "../../components/Buttons/CustomButton";

const SuccessPayment = () => {
  //  Payment status
  const [status, setStatus] = useState(true);

  // Get User Id
  const { id, tranID } = useParams();

  //
  const navigate = useNavigate();

  //   User info
  const user = getUserInfo();

  const [validateAndUpdate] = useValidateAndUpdateMutation();

  // Add Student After successful payment
  const [addStudentIntoBatch] = useAddStudentIntoBatchMutation();

  const handleSuccess = async () => {
    const res = await validateAndUpdate({ id, tranID });

    // @ts-ignore
    if (res?.data?.message === "Payment Success") {
      setStatus(true);
      // Add Student Into Batch After Successful Payment

      const addStudentResponse = await addStudentIntoBatch({
        //@ts-ignore
        studentId: user?._id,
        // @ts-ignore
        batchId: res?.data?.batchId,
      }).unwrap();

      if (addStudentResponse?._id) {
        message.success("Enrolled successfull");
        // @ts-ignore
        navigate(`/dashboard/my-courses/${res?.data?.batchId}`);
      }

      if (addStudentResponse === "student already exists") {
        message.error("You Already exists On this Batch");
      }
    }

    // @ts-ignore
    if (res?.data?.message === "Invalid payment") {
      setStatus(false);
      // @ts-ignore
    }
  };

  return (
    <div className="pt-20 relative h-screen">
      {!status && <Loading />}

      {status && (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
          <div className="mx-auto bg-primary p-2 text-extraLarge h-20 w-20 flex justify-center items-center rounded-full text-white ">
            <Font iconName="fa-check-double" />
          </div>
          <div>
            <div className="my-10">
              <h2 className="text-extraLarge font-semibold ">
                Congratulations
              </h2>
              <p className="my-2">You have successfylly purched our course</p>
            </div>
            <div className="flex justify-center" onClick={handleSuccess}>
              <CustomButton icon="fa-plane" content="Confirm Enroll" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPayment;
