/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Font from "../../../components/icons/Font";
import ReactDragListView from "react-drag-listview";
import { useAppSelector } from "../../../redux/hooks";
import CustomButton from "../../../components/Buttons/CustomButton";
import { useUpdateUserDetailsMutation } from "../../../redux/api/users/usersAPI";
import { message } from "antd";

const Skills = () => {
  // User Details
  const { user } = useAppSelector((state) => state.userDetails);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Update data when user?.skills changes
    if (user?.skills) {
      setData(
        //@ts-ignore
        user?.skills.map((data, index) => ({ title: data?.title, index }))
      );
    }
  }, [user?.skills]);

  const onDragEnd = (fromIndex: number, toIndex: number) => {
    const newData = [...data];
    const [movedItem] = newData.splice(fromIndex, 1);
    newData.splice(toIndex, 0, movedItem);

    // Update the id property of each item to reflect their new index
    newData.forEach((item, index) => {
      //@ts-ignore
      item.index = index;
    });

    setData(newData);
  };

  const dragProps = {
    onDragEnd,
    nodeSelector: "li",
    handleSelector: "a",
  };

  const handleAddSkill = (e: any) => {
    e.preventDefault();
    const skillvalue = e.target.skill.value;
    //@ts-ignore
    setData([...data, { index: data.length + 1, title: skillvalue }]);
  };

  const [updateUserDetails] = useUpdateUserDetailsMutation();

  const handleUpdateSkill = async () => {
    const updatedSkills = {
      userId: user.userId,
      email: user.email,
      skills: data,
    };

    const res = await updateUserDetails(updatedSkills);
    if (res) {
      // setEdtiProfile(false);
      message.success("Skills successfully");
    }

    console.log(updatedSkills);
  };

  return (
    <div>
      <div className="shadow p-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-secondary">SKills</h2>
        </div>
      </div>

      {/* Skills  */}
      <div className="my-10  p-2 md:flex space-x-2 justify-between">
        <div className="border border-primaryHover p-2 w-full">
          <h2 className="text-lg font-semibold ">
            Primary Skills{" "}
            <span className="text-sm text-blackGray  ">(Dragable)</span>{" "}
          </h2>
          <p className="mb-4">(This skills will show on your profile)</p>
          <div className="  ">
            <ReactDragListView {...dragProps}>
              <ol>
                {data.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover"
                  >
                    <h2>
                      {" "}
                      {
                        //@ts-ignore
                        item?.title
                      }
                    </h2>
                    <a href="#">
                      {" "}
                      <Font iconName="fa-brands fa-hive" />
                    </a>
                  </li>
                ))}
              </ol>
            </ReactDragListView>
          </div>
        </div>
        <div className="border border-primaryHover p-2 w-full h-[220px]">
          <h2 className="text-lg font-semibold ">Add New Skill</h2>
          <p className="mb-4">(Hit Enter and update)</p>
          <form onSubmit={handleAddSkill}>
            <div className="mx-2 my-4 flex space-x-2">
              <input
                type="text "
                className="w-full bg-gray text-lg py-2 px-4"
                placeholder="Add Skills"
                name="skill"
                id=""
              />
              <button type="submit">
                {" "}
                <Font iconName="fa-plus bg-primary p-2 text-white text-lg" />{" "}
              </button>
            </div>
          </form>

          <div className="my-4" onClick={handleUpdateSkill}>
            <CustomButton type="button" content="Update" icon="fa-check" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
