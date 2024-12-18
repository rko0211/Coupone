import React from "react";
import carousel1 from "../../assets/carousel1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

// Import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const Carousel: React.FC = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <Swiper
        breakpoints={{
          772: {
            slidesPerView: 2, // 2 slides on screens >= 640px
            spaceBetween: 20,
          },

          1152: {
            slidesPerView: 3, // 3 slides on screens >= 1024px
            spaceBetween: 20,
          },
          1660: {
            slidesPerView: 4, // 3 slides on screens >= 1024px
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true} // Enable navigation
        modules={[FreeMode, Pagination, Navigation]} // Add Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="Slide 1" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 2" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 3" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 4" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 5" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 6" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 7" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 8" className="w-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="Slide 9" className="w-[360px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
