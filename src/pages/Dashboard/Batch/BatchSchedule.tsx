import { useParams } from "react-router-dom";
import CourseTimeline from "../MyCourses/MyCourseDetails/CourseTimeline/CourseTimeline";
import CustomButton from "../../../components/Buttons/CustomButton";
import { useState } from "react";
import {  Drawer } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import CustomDatePicker from "../../../components/Dashboard/Ui/Input/CustomDatePicker";

const BatchSchedule = () => {
  // Get Batch Id
  const { id, title } = useParams();

  //   Drawer Status
  const [open, setOpen] = useState(false);

  //   Open Drawer
  const showDrawer = () => {
    setOpen(true);
  };

  //   Close Drawer
  const onClose = () => {
    setOpen(false);
  };

  //   React hook form
  const methods = useForm({
    defaultValues: {}, // Provide an empty object if user is null
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="shadow p-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-secondary">
            Class Schedule <span className="text-primary ">[{title}]</span>
          </h2>
          <div onClick={showDrawer}>
            <CustomButton content="Add Schedule" type="button" icon="fa-plus" />
          </div>
        </div>
      </div>
      <div className="mt-10  p-2">
        <CourseTimeline id={id} />
      </div>
      {/* Drawer */}
      <Drawer
        title="Add Course Schedule"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <div>
          <h2 className="text-large text-center text-primary font-bold">
            {title}
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="my-2 border border-primary p-2">
                  <div>
                  <CustomDatePicker  name={`date`}  />
                  </div>
                  <div>
                    <CustomInput
                      name={`classNummber`}
                      placeholder="Class Number"
                    />
                    <CustomInput name={`title`} placeholder="Title" />
                  </div>
                </div>
                <div className="mt-4">
                <CustomButton type='submit' content="Submit" icon='fa-check' />
                </div>

              </form>
            </FormProvider>
          </h2>
        </div>
      </Drawer>
    </div>
  );
};

export default BatchSchedule;
