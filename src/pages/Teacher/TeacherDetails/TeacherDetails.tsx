import { Button } from "antd";
import shape1 from "../../../assets/images/shape/1.png";
import teacherImage from "../../../assets/user/user8.jpg";
import Font from "../../../components/icons/Font";
import MainTag from "../../../components/Ui/Tag/MainTag";
import TeacherReviewCard from "../../../components/Ui/Card/TeacherCard/TeacherReviewCard/TeacherReviewCard";

const TeacherDetails = () => {
  return (
    <div>
      <div className="mt-20"></div>

      <div className="h-[200px]     md:flex  justify-between items-center pl-6 my-4 overflow-hidden">
        <div className="flex items-center">
          <div>
            <img
              src={teacherImage}
              alt="Teacher"
              className="h-[200px] p-1 rounded border-2 border-primary"
            />
          </div>
          <div className="px-8 flex flex-col justify-between  h-[200px] py-4">
            <div>
              <h2 className="text-large font-bold text-primary">
                Jenny Wilson
              </h2>
              <p className="">Instructor</p>
              <Button type="primary" className="bg-primary my-2">
                Beginner
              </Button>
            </div>
            <ul className="text-primary flex space-x-2">
              <li>
                <a href="#">
                  <Font iconName="fa-brands fa-facebook" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <Font iconName="fa-brands fa-linkedin" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <Font iconName="fa-brands fa-x-twitter" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <Font iconName="fa-brands fa-github" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src={shape1} alt="shape" className="   -z-10" />
      </div>

      {/* Content */}
      <div className="w-full md:flex p-6 my-10">
        <div className="w-full md:w-8/12  md:mr-6">
          <div className="border-2 border-gray p-4">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              About Me
            </h2>
            <p className="mt-4">
              Very well thought out and articulate communication. Clear
              milestones, deadlines and fast work. Patience. Infinite patience.
              No shortcuts. Even if the client is being careless. Some quick
              example text to build on the card title and bulk the card's
              content Moltin gives you platform.
            </p>
            <p className="mt-4">
              As a highly skilled and successfull product development and design
              specialist with more than 4 Years of My experience lies in
              successfully conceptualizing, designing, and modifying consumer
              products specific to interior design and home furnishings.
            </p>
          </div>
          {/* Education */}
          <div className="border-2 border-gray p-4 mt-10">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              Education
            </h2>{" "}
            <div className="flex mt-6">
              <div className="px-4 text-large text-primary">
                <Font iconName="fa-graduation-cap" />
              </div>
              <div>
                <h2 className="font-semibold text-secondary text-lg  ">
                  BCA - Bachelor of Computer Applications
                </h2>
                <p className="my-2">International University - (2004 - 2010)</p>
                <p>
                  There are many variations of passages of available, but the
                  majority alteration in some form. As a highly skilled and
                  successfull product development and design specialist with
                  more than 4 Years of My experience.
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="px-4 text-large text-primary">
                <Font iconName="fa-graduation-cap" />
              </div>
              <div>
                <h2 className="font-semibold text-secondary text-lg  ">
                  MCA - Master of Computer Application
                </h2>
                <p className="my-2">International University - (2004 - 2010)</p>
                <p>
                  There are many variations of passages of available, but the
                  majority alteration in some form. As a highly skilled and
                  successfull product development and design specialist with
                  more than 4 Years of My experience.
                </p>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="border-2 border-gray p-4 mt-10">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              Experience
            </h2>{" "}
            <div className="flex mt-6">
              <div className="px-4 text-large text-primary">
                <Font iconName="fa-briefcase" />
              </div>
              <div>
                <h2 className="font-semibold text-secondary text-lg  ">
                  Web Design & Development Team Leader
                </h2>
                <p className="my-2">Creative Agency - (2013 - 2016)</p>
                <p>
                  There are many variations of passages of available, but the
                  majority alteration in some form. As a highly skilled and
                  successfull product development and design specialist with
                  more than 4 Years of My experience.
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="px-4 text-large text-primary">
                <Font iconName="fa-briefcase" />
              </div>
              <div>
                <h2 className="font-semibold text-secondary text-lg  ">
                  Project Manager
                </h2>
                <p className="my-2">Jobcy Technology Pvt.Ltd - (Pressent)</p>
                <p>
                  There are many variations of passages of available, but the
                  majority alteration in some form. As a highly skilled and
                  successfull product development and design specialist with
                  more than 4 Years of My experience.
                </p>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <div className="border-2 border-gray p-4 mt-10">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              Reviews
            </h2>{" "}
            <TeacherReviewCard />
            <TeacherReviewCard />
            <TeacherReviewCard />
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-4/12">
          {/* Professional Skills */}
          <div className="border-2 border-gray p-4  ">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              Professional Skills
            </h2>
            <ul className="flex space-x-2    flex-wrap flex-row  ">
              <MainTag text="Web Development" />
              <MainTag text="Mobile App Development" />
              <MainTag text="Game Development" />
              <MainTag text="JavaScript" />
              <MainTag text="Database" />
            </ul>
          </div>
          {/* Profile Overview */}
          <div className="border-2 border-gray p-4 mt-10">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              Profile Overview
            </h2>
            <div className="flex justify-between items-center my-2">
              <div className="text-primary">
                <Font iconName="fa-star" />
                <Font iconName="fa-star" />
                <Font iconName="fa-star" />
                <Font iconName="fa-star" />
                <Font iconName="fa-star-half-stroke" />
                <span className="mx-2 text-black"> 4.0 (15)</span>
              </div>
              <div className="text-primary">
                <Font iconName="fa-heart" />{" "}
                <span className="mx-2 text-black"> (15,908)</span>
              </div>
            </div>
            <div className="">
              <div className="flex mt-6">
                <div className="text-large p-2  text-primary rounded-full     mx-2">
                  <Font iconName="fa-book-open" />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">0</h2>
                  <p>Online Course</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="text-large p-2  text-primary rounded-full     mx-2">
                  <Font iconName="fa-users" />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">11,604</h2>
                  <p>Students</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="text-large p-2  text-primary rounded-full     mx-2">
                  <Font iconName="fa-star" />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">1,223</h2>
                  <p>Reviews</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="border-2 border-gray p-4 mt-10">
            <h2 className="font-semibold text-secondary text-xl mt-4">
              Contact Details
            </h2>

            <div className="">
              <div className="flex mt-6">
                <div className="text-large p-2  text-white bg-primary h-12 w-12 text-center rounded-full     mx-2">
                  <Font iconName="fa-envelope" />
                </div>
                <div>
                  <h2 className="font-semibold ">Email</h2>
                  <p>jennywilson@example.com</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="text-large p-2  text-white bg-primary h-12 w-12 text-center rounded-full     mx-2">
                  <Font iconName="fa-location-dot" />
                </div>
                <div>
                  <h2 className="font-semibold ">Address</h2>
                  <p>877 Ferry Street, Huntsville, Alabama</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="text-large p-2  text-white bg-primary h-12 w-12 text-center rounded-full     mx-2">
                  <Font iconName="fa-phone" />
                </div>
                <div>
                  <h2 className="font-semibold ">Phone</h2>
                  <p>+1 (347) 456 9087</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
