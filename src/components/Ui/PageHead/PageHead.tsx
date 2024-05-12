import shape1 from "../../../assets/images/shape/1.png";

const PageHead = ({ subHead, title }: any) => {
  return (
    <div>
      <div className="mt-10"></div>
      <div className="h-[150px]   md:flex  justify-between items-center pl-6 overflow-hidden">
        <div>
          <p className="">{subHead}</p>
          <h2 className="text-large font-bold text-primary">{title}</h2>
        </div>
        <img src={shape1} alt="shape" className="   -z-10" />
      </div>
    </div>
  );
};

export default PageHead;
