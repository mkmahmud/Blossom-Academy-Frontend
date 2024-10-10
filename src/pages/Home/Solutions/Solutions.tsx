import SolutionCard from "../../../components/Ui/Card/SolutionCard/SolutionCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import States from "../States/States";

const Solutions = () => {
  return (
    <div className=" ">
      <States />

      <div className="md:flex mt-20 px-6 items-center ">
        <div className="w-full md:w-1/2">
          <div>
            <p className="text-primary">Blossom Solutions</p>
            <h2 className="text-extraLarge font-bold my-4 leading-none">
              Guidance Always Appreciated <br />
              <span className="text-primary"> By Learners</span>
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is <= 640px
              430: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is > 640px
              1240: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SolutionCard
                icon="fa-book"
                title="Take It Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet, facilis necessitatibus"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SolutionCard
                icon="fa-book"
                title="Take It Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet, facilis necessitatibus"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SolutionCard
                icon="fa-book"
                title="Take It Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet, facilis necessitatibus"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SolutionCard
                icon="fa-book"
                title="Take It Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet, facilis necessitatibus"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
