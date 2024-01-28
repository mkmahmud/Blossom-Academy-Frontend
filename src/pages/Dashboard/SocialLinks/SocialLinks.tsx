import CustomButton from "../../../components/Buttons/CustomButton";
import Empty from "../../../components/Dashboard/Ui/Empty/Empty";
import Font from "../../../components/icons/Font";
import { useState } from "react";
// import { useAppSelector } from "../../../redux/hooks";

const SocialLinks = () => {
  // Handle Edit
  const [editProfile] = useState(true);

  // Get User Profile
  // const { user } = useAppSelector((state) => state.userDetails);

  // Use Hook form

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="  border-2 border-primaryHover  ">
        <div className="flex border-b border-primary justify-between  mb-4 cursor-pointer   px-4 py-2">
          <div className="">
            <h2 className="text-xl font-semibold text-secondary ">
              Social Links
            </h2>
          </div>
          <div className="mx-2">
            <button>
              <Font iconName="fa-plus" />
            </button>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div></div>
            <div>
              {editProfile && (
                <CustomButton type="submit" content="Update" icon="fa-check" />
              )}
            </div>{" "}
          </form>

          <Empty content="No Links Available" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
