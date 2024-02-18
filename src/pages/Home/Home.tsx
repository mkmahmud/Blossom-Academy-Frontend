import { useEffect } from "react";
import { useGetUserDetailsQuery } from "../../redux/api/users/usersAPI";
import { getUserInfo } from "../../services/authService";
import Courses from "./Courses/Courses";
import Events from "./Events/Events";
import FreePDF from "./FreePDF/FreePDF";
import Hero from "./Hero/Hero";
import Solutions from "./Solutions/Solutions";
import Teachers from "./Teachers/Teachers";
import Testimonials from "./Testimonials/Testimonials";
import { addUserDetails } from "../../redux/features/users/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import Blogs from "./Blogs/Blogs";
import Mentor from "./Mentor/Mentor";

const Home = () => {
  const user = getUserInfo();
  // @ts-expect-error
  const { data } = useGetUserDetailsQuery(user._id);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addUserDetails(data));
  }, [user]);

  return (
    <div>
      <Hero />
      <Solutions />
      <Teachers />
      <Courses />
      <FreePDF />
      <Testimonials />
      <Mentor />
      <Events />
      <Blogs />
      <div className="mt-20"></div>
    </div>
  );
};

export default Home;
