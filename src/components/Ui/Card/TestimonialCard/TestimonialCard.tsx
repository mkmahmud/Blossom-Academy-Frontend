import user from "../../../../assets/user/client-4.jpg";

import styles from "./testimonialCard.module.css";

const TestimonialCard = () => {
  return (
    <div className="w-full md:w-[450px] mx-auto">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-gray text-extraLargeXL">Awesome</h2>
          <img src={user} alt="" className="rounded-full" />
        </div>
        <div
          className={`mt-16 py-6 px-4 border border-dashed border-primary relative ${styles.comment}`}
        >
          <div className=" ">
            <h2 className="text-large">
              <span className="text-primary">“</span> Perfect Solutions{" "}
              <span className="text-primary"> ”</span>
            </h2>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sunt, optio architecto eligendi quam debitis a
              facere voluptate velit excepturi in provident,  .{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
