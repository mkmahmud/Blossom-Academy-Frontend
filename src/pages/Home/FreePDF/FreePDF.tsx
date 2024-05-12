import book from "../../../assets/images/book.png";
 import shape2 from "../../../assets/images/shape/3.png";
import Font from "../../../components/icons/Font";

const FreePDF = () => {
  const pdfUrl =
    "https://blossom-academy-images.s3.amazonaws.com/mahmudul_hasan.pdf";

  return (
    <div className="mt-20 relative overflow-hidden">
      <img
        src={shape2}
        className="absolute  rotate-180 -right-[50px] -top-[50px]"
        alt=""
      />

      <div className="md:flex justify-center items-center w-full bg-gray dark:bg-gray-dark py-20 px-6">
        <div className="w-full md:w-1/2  ">
          <img src={book} alt="" className="mx-auto " />
        </div>
        <div className="w-full md:w-1/2 pr-10 text-center md:text-left">
          <div>
            <h2 className="text-extraLarge   font-bold my-4 leading-none">
              Free Admission Test online <br />
              <span className="text-primary"> Blossom EBook</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis corporis iure, rerum quisquam laudantium dolorem eius
              architecto sunt voluptas eum molestias voluptates suscipit?
            </p>
            <div className="my-4 flex justify-center md:justify-start">
              <div>
                <button className=" group overflow-hidden flex justify-center items-center relative   bg-primary px-6 py-2 text-base text-white font-semibold  rounded-full">
                  <a href={pdfUrl} className="flex items-center">
                    <span> DOWNLOAD E-BOOk</span>{" "}
                    <span className="ml-4">
                      <Font iconName={"fa-download"}></Font>
                    </span>
                  </a>
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-primaryHover opacity-40 group-hover:animate-shine" />
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePDF;
