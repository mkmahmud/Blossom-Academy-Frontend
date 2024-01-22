/* eslint-disable @typescript-eslint/no-unused-vars */
import Font from "../../../components/icons/Font";

const Skills = () => {
  return (
    <div>
      <div className="shadow p-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-secondary">SKills</h2>
        </div>
      </div>
      {/* Skills  */}
      <div className="my-10  p-2 md:flex space-x-2 justify-between">
        <div className="border border-primaryHover p-2 w-full">
          <h2 className="text-lg font-semibold ">Primary Skills <span className="text-sm text-blackGray  ">(upto 5)</span> </h2>
          <p className="mb-4">(This skills will show on your profile)</p>
          <div className="  ">
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>Node JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>Laravel </h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>C#</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>Java</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
          </div>
        </div>
        <div className="border border-primaryHover p-2 w-full">
          <h2 className="text-lg font-semibold ">All Skills</h2>
          <p className="mb-4">(All Selected Skills)</p>
          <div className="  ">
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
            <div className="p-2 m-2  flex items-center justify-between border-2 border-primaryHover">
              <h2>React JS</h2>
              <Font iconName="fa-brands fa-hive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
