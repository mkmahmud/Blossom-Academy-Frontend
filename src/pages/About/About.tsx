import PageHead from "../../components/Ui/PageHead/PageHead";
import aboutimage from "../../assets/images/about1.jpg";
import Font from "../../components/icons/Font";
import CustomButton from "../../components/Buttons/CustomButton";
import States from "../Home/States/States";
import { useGetAllTeachersQuery } from "../../redux/api/users/teachers/teachersApi";
import TeacherCard from "../../components/Ui/Card/TeacherCard/TeacherCard";
import Testimonials from "../Home/Testimonials/Testimonials";

const About = () => {
  // Teachers Data
  const { data } = useGetAllTeachersQuery(undefined);

  return (
    <div>
      <PageHead subHead="About" title="About Us" />
      <div>
        <div className="md:flex md:space-x-10 w-full p-2">
          <div className="w-full">
            <img
              src={aboutimage}
              alt="About Us Image"
              className="rounded-lg block mx-auto "
            />
          </div>
          <div className="w-full  ">
            <div className="text-left md:mb-10 mt-2">
              <p className="text-primary">About Us</p>
              <h2 className="text-extraLarge   font-bold my-4 leading-none">
                We Care About Your Life
                <br />
                <span className="text-primary"> For Better Future</span>
              </h2>
              <p className="py-4">
                We understand the importance of approaching each work integrally
                and believe in the power of simple and easy communication and
                this is at the heart.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex space-x-4 my-4  ">
                  <div className="text-extraLarge text-primary   ">
                    <Font iconName="fa-school" />
                  </div>
                  <div>
                    <h2 className="text-large">Master Coach</h2>
                    <p>Quis autem reprehenderit quein voluptate v .</p>
                  </div>
                </div>
                <div className="flex space-x-4 my-4">
                  <div className="text-extraLarge text-primary">
                    <Font iconName="fa-user-tie" />
                  </div>
                  <div>
                    <h2 className="text-large">Professional Advisors</h2>
                    <p>Sed ut perspiciati natuerror voluptatem.</p>
                  </div>
                </div>
                <div className="flex space-x-4 my-4">
                  <div className="text-extraLarge text-primary">
                    <Font iconName="fa-stamp" />
                  </div>
                  <div>
                    <h2 className="text-large">Coach Certification</h2>
                    <p>Sed ut perspiciatis unde voluptatem.</p>
                  </div>
                </div>
                <div className="flex space-x-4 my-4">
                  <div className="text-extraLarge text-primary">
                    <Font iconName="fa-business-time" />
                  </div>
                  <div>
                    <h2 className="text-large">Coaching Scholars</h2>
                    <p>Quis autem repreh n voluptate velit esseua.</p>
                  </div>
                </div>
              </div>
              <div className="my-4 flex">
                <div>
                  <CustomButton content="Join Now" icon="fa-joint" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* States */}
        <div>
          <States />
        </div>
        {/* Teachers */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-primary">Featured Instructor</p>
            <h2 className="text-extraLarge   font-bold my-4 leading-none">
              Featured Instructor
              <br />
              <span className="text-primary"> Your Teacher</span>
            </h2>
          </div>
          <div className="px-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ">
            {data &&
              data
                .slice(0, 4)
                .map((teacher: any) => (
                  <TeacherCard key={teacher._id} data={teacher} />
                ))}
          </div>
        </div>
        {/* Testimonialss */}
        <div>
          <Testimonials />
        </div>
        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default About;
