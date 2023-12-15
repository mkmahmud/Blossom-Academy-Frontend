import Courses from "./Courses/Courses";
import Events from "./Events/Events";
import FreePDF from "./FreePDF/FreePDF";
import Hero from "./Hero/Hero";
import Solutions from "./Solutions/Solutions";
import Teachers from "./Teachers/Teachers";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Solutions />
      <Teachers />
      <Courses />
      <FreePDF />
      <Testimonials />
      <Events />
      <div className="mt-20"></div>
    </div>
  );
};

export default Home;
