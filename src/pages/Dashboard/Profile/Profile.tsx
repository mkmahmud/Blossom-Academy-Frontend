import { useState } from "react";
import userImage from "../../../assets/user/client-4.jpg";
import { Input } from "antd";
import CustomButton from "../../../components/Buttons/CustomButton";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className=" ">
      <div>
        <div className="">
          <div className="flex space-x-4 p-4 justify-between    shadow">
            <div className=" ">
              <h2 className="text-xl font-semibold text-secondary">
                Profile Details
              </h2>
              <p>You have full control to manage your own account setting.</p>
            </div>
            <img
              src={userImage}
              className="h-[100px] w-[100px] rounded-full"
              alt="User Image"
            />
          </div>
          <div className="my-10  shadow p-4">
            <div className="flex justify-between  my-4">
              <div>
                <h2 className="text-xl font-semibold text-secondary">
                  Personal Details
                </h2>
                <p>Personal information and address.</p>
              </div>
              <div
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                {isEdit ? (
                  <CustomButton content="Edit Profile" icon="fa-user-pen" />
                ) : (
                  <div className="flex space-x-2">
                    <div
                      onClick={() => {
                        setIsEdit(!isEdit);
                      }}
                    >
                      <CustomButton content="Cancel" icon="fa-x" />
                    </div>
                    <CustomButton content="Save" icon="fa-check" />
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-secondary">
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Full Name:</p>
                <Input
                  placeholder="Full Name"
                  disabled={isEdit}
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Email:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Email"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
              <div className="py-2 max-w-[450px] text-lg">
                <p className="my-2 text-secondary">Phone Number:</p>
                <Input
                  disabled={isEdit}
                  placeholder="Full Name"
                  className={`text-lg`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
