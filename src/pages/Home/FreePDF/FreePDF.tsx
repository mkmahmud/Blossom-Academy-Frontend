import book from "../../../assets/images/book.png";
import MainButton from "../../../components/Buttons/MainButton";

const FreePDF = () => {
  return (
    <div className="mt-20">
      <div className="md:flex justify-center items-center w-full bg-gray py-20 px-6">
        <div className="w-full md:w-1/2  ">
          <img src={book} alt="" className="mx-auto " />
        </div>
        <div  className="w-full md:w-1/2 pr-10 text-center md:text-left">
          <div> 
            <h2 className="text-extraLarge   font-bold my-4 leading-none">
              Free Admission Test online <br />
              <span className="text-primary"> Blossom EBook</span>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis iure, rerum quisquam laudantium dolorem eius architecto sunt voluptas eum molestias voluptates suscipit?</p>
            <div className="my-4 flex justify-center md:justify-start">
            <MainButton path='/' content='DOWNLOAD E-BOOk' icon='fa-download' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePDF;
