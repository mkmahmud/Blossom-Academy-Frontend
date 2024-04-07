import Font from "../../icons/Font";

const UnderConstraction = () => {
  return (
    <div className="text-center my-20">
      <h2 className="text-extraLargeXL text-primary font-bold">
        The Page is Under Construction
      </h2>
      <h2 className="text-extraLargeXL text-primary font-bold my-10">
        <Font iconName="fa-screwdriver-wrench animate-bounce" />
      </h2>
      <p>We are working on it. We will back soon</p>
    </div>
  );
};

export default UnderConstraction;
