import { useState, useEffect } from "react";
import { Drawer } from "antd";
const ViewCourseDetails = ({ isEdit, isEditData }: any) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isEdit) {
      showDrawer();
    }
  }, [isEdit]);

  // data
  const { thumbnail, code, title } = isEditData;

  return (
    <>
      {/* <div onClick={showDrawer}>
        <CustomButton content="Add New Course" icon="fa-book " />
      </div> */}

      <Drawer
        title="Course"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="flex justify-end mb-10">
          {/* <CustomButton content="Edit Course" icon="fa-pen " /> */}
        </div>
        <img src={thumbnail} className="h-[200px] w-full" alt="" />
        <div>
          <h2 className="my-2 text-xl my-2 font-semibold">
            Course Name: <span>{title}</span>
          </h2>
          <h2 className="my-2 text-xl my-2 font-semibold">
            Course Code: <span>{code}</span>
          </h2>
        </div>
      </Drawer>
    </>
  );
};

export default ViewCourseDetails;
