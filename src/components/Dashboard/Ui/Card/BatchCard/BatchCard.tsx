import Font from "../../../../icons/Font";

const BatchCard = ({ data, setDetails }: any) => {
  const { title, studentsId, teachersId, courseId, startTime, status } = data;
  return (
    <div
      className="flex h-full max-w-[300px] shadow-xl m-2 mx-auto cursor-pointer"
      onClick={() => {
        setDetails(data);
      }}
    >
      <div className="w-full p-2  ">
        <h2 className="text-xl font-bold my-2 ">{title}</h2>
        <div className="flex items-center justify-between pr-10 ">
          <p className="text-lg font-bold">
            <span>
              <Font iconName="fa-users" />
            </span>{" "}
            <span className="mx-2">{studentsId.length}</span>
          </p>
          <p className="text-lg font-bold  ">
            <span>
              <Font iconName="fa-chalkboard-user" />
            </span>{" "}
            <span className="mx-2">{teachersId.length}</span>
          </p>
          <p className="text-lg font-bold  ">
            <span>
              <Font iconName="fa-book-bookmark" />
            </span>{" "}
            <span className="mx-2">{courseId.length}</span>
          </p>
        </div>
        <p className="my-2 text-primary font-bold"> Regular</p>
        <p className="my-2 ">
          {" "}
          Start date: <span className="mx-2">{startTime}</span>
        </p>
      </div>
      <div
        className={`w-10 ${status ? "bg-green" : "bg-red"} flex justify-center`}
      >
        <h2
          className="text-white font-semibold text-xl text-center"
          style={{ writingMode: "vertical-rl" }}
        >
          {status ? "Active" : "In Active"}
        </h2>
      </div>
    </div>
  );
};

export default BatchCard;
