import { message } from "antd";
import { useAddStudentIntoBatchMutation } from "../../../../../redux/api/batch/batchAPI";
import { getUserInfo } from "../../../../../services/authService";
import Font from "../../../../icons/Font";
import CustomButton from "../../../../Buttons/CustomButton";

const LiveCourseCard = ({ data }: any) => {
  const { _id, thambnail, title, studentsId, session, startTime } = data;
  //   User
  const user = getUserInfo();

  const [addStudentIntoBatch] = useAddStudentIntoBatchMutation();

  const addStudent = async () => {
    //   Add student Data
    const addStudentData = {
      studentId: user?._id,
      batchId: _id,
    };

    const res = await addStudentIntoBatch(addStudentData).unwrap();

    if (res?._id) {
      message.success("Student added successfully");
    }

    if (res === "student already exists") {
      message.error("student already exists");
    }
  };

  return (
    <div className="md:flex items-center relative  shadow-lg shadow-gray my-10  w-full  ">
      <div>
        <img
          src={thambnail}
          alt="Thumbnail "
          className=" h-[200px] w-[400px]"
        />
      </div>
      <div className="px-2 md:px-8 w-full py-2">
        <div className="  w-full justify-between items-center ">
          <h2 className="text-extraLarge font-semibold">{title}</h2>
          <h2 className="text-extraLarge font-semibold  text-primary">
            {" "}
            <Font iconName="fa-users" /> {studentsId.length}
          </h2>
        </div>
        <h2 className="text-xl">
          Start Date:{" "}
          <span className="text-primary font-semibold ">{startTime}</span>
        </h2>
        <h2 className="text-xl">
          Start Time:{" "}
          <span className="text-primary font-semibold ">{session}</span>
        </h2>
      </div>
      <div className="mx-2" onClick={addStudent}>
        {/* <MainButton
          path={`/courses/checkout/${_id}`}
          content="Enroll"
          icon="fa-plus"
        /> */}

        <CustomButton type="button" content="Enroll" icon="fa-plus" />
      </div>
    </div>
  );
};

export default LiveCourseCard;
