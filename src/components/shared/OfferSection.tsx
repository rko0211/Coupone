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
import Card from "./Card";

const OfferSection: React.FC = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <div className="font-['Poppins'] text-lg font-bold leading-[40px] text-left decoration-[underline-from-font] decoration-skip-ink-none text-[#404040] w-max block mb-8">
        Popular Offer Of The Day
        <br />
        <span className="w-full block h-1 bg-[#248D50]"></span>
      </div>

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
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OfferSection;
