import { Button } from "antd";
import shape1 from "../../../assets/images/shape/1.png";
import teacherImage from "../../../assets/user/user8.jpg";
import Font from "../../../components/icons/Font";
import MainTag from "../../../components/Ui/Tag/MainTag";
import TeacherReviewCard from "../../../components/Ui/Card/TeacherCard/TeacherReviewCard/TeacherReviewCard";
import { useParams } from "react-router-dom";
import { useGetSingleTeachersQuery } from "../../../redux/api/users/teachers/teachersApi";
import { Key } from "react";

const TeacherDetails = () => {
  const { id } = useParams();

  // Get Teacher Details
  const { data } = useGetSingleTeachersQuery(id);
  console.log(data);
  return (
    <div>
      <div className="mt-20"></div>

      {data && (
        <div>
          <div className="h-[200px]     md:flex  justify-between items-center pl-6 my-4 overflow-hidden">
            <div className="flex items-center">
              <div>
                <img
                  src={data.profileImage ? data.profileImage : teacherImage}
                  alt="Teacher"
                  className="h-[200px] p-1 rounded border-2 border-primary"
                />
              </div>
              <div className="px-8 flex flex-col justify-between  h-[200px] py-4">
                <div>
                  <h2 className="text-large font-bold text-primary">
                    {data.firstName ? data.firstName : "Name"}{" "}
                    <span> {data.lastName ? data.lastName : ""}</span>
                  </h2>
                  <p className="">Instructor</p>
                  <Button type="primary" className="bg-primary my-2">
                    Beginner
                  </Button>
                </div>
                <ul className="text-primary flex space-x-2">
                  <li>
                    <a
                      href={
                        data.socialProfile
                          ? data.socialProfile[0].facebook
                          : "#"
                      }
                    >
                      <Font iconName="fa-brands fa-facebook" />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        data.socialProfile
                          ? data.socialProfile[0].linkedin
                          : "#"
                      }
                    >
                      <Font iconName="fa-brands fa-linkedin" />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        data.socialProfile
                          ? data.socialProfile[0].instagram
                          : "#"
                      }
                    >
                      <Font iconName="fa-brands fa-x-instagram" />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        data.socialProfile ? data.socialProfile[0].github : "#"
                      }
                    >
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
                {data?.career[0]?.aboutMe.map((about: any) => (
                  <p className="mt-4" key={about._id}>
                    {about.title}
                  </p>
                ))}
              </div>
              {/* Education */}
              <div className="border-2 border-gray p-4 mt-10">
                <h2 className="font-semibold text-secondary text-xl mt-4">
                  Education
                </h2>{" "}
                {data?.career[0]?.education &&
                  data?.career[0]?.education.map(
                    (edu: any, d: Key | null | undefined) => (
                      <div className="flex mt-6" key={d}>
                        <div className="px-4 text-large text-primary">
                          <Font iconName="fa-graduation-cap" />
                        </div>
                        <div>
                          <h2 className="font-semibold text-secondary text-lg  ">
                            {edu.description}
                          </h2>
                          <p className="my-2">
                            {edu?.institution} - ({edu.startYear} -{" "}
                            {edu.endYear})
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>
              {/* Experience */}
              <div className="border-2 border-gray p-4 mt-10">
                <h2 className="font-semibold text-secondary text-xl mt-4">
                  Experience
                </h2>{" "}
                {data?.career[0]?.experience &&
                  data?.career[0]?.experience.map(
                    (exp: any, d: Key | null | undefined) => (
                      <div className="flex mt-6" key={d}>
                        <div className="px-4 text-large text-primary">
                          <Font iconName="fa-briefcase" />
                        </div>
                        <div>
                          <h2 className="font-semibold text-secondary text-lg  ">
                            {exp.description}
                          </h2>
                          <p className="my-2">
                            {exp?.institution} - ({exp.startYear} -{" "}
                            {exp.endYear})
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>
              {/* Reviews */}
              <div className="border-2 border-gray p-4 mt-10">
                <h2 className="font-semibold text-secondary text-xl mt-4">
                  Reviews
                </h2>{" "}
                {/* <TeacherReviewCard />
                <TeacherReviewCard />
                <TeacherReviewCard /> */}
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
                  {data?.career[0]?.skills &&
                    data?.career[0]?.skills.map(
                      (skill: any, d: Key | null | undefined) => (
                        <MainTag text={skill.title} key={d} />
                      )
                    )}
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
                      <p>{data?.email}</p>
                    </div>
                  </div>
                  <div className="flex mt-6">
                    <div className="text-large p-2  text-white bg-primary h-12 w-12 text-center rounded-full     mx-2">
                      <Font iconName="fa-location-dot" />
                    </div>
                    <div>
                      <h2 className="font-semibold ">Address</h2>
                      <p>{data?.address}</p>
                    </div>
                  </div>
                  <div className="flex mt-6">
                    <div className="text-large p-2  text-white bg-primary h-12 w-12 text-center rounded-full     mx-2">
                      <Font iconName="fa-phone" />
                    </div>
                    <div>
                      <h2 className="font-semibold ">Phone</h2>
                      <p>{data?.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDetails;
