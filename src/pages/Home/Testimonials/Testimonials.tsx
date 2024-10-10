import TestimonialCard from "../../../components/Ui/Card/TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="mt-20 px-6">
      <div className="text-center mb-10">
        <p className="text-primary">Testimonials</p>
        <h2 className="text-extraLarge   font-bold my-4 leading-none">
          Customers
          <span className="text-primary"> Kindful Words</span>
        </h2>
      </div>
      <div className="w-full   ">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
