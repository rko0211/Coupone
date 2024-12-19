import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import mondofarm from "../../assets/MONDOfarm.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";

const BrandSection: React.FC = () => {
  const smallCards = [
    { id: 1, name: "Radian", discount: "10%", img: brand1 },
    { id: 2, name: "MONDOfarms", discount: "7%", img: brand2 },
    { id: 3, name: "Zikomarket", discount: "20%", img: brand3 },
    { id: 4, name: "Amazon", discount: "12%", img: brand4 },
    { id: 5, name: "Udemy", discount: "30%", img: brand5 },
    { id: 6, name: "Spotify", discount: "8%", img: brand6 },
  ];
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <div className="font-['Poppins'] text-lg font-bold leading-[40px] text-left decoration-[underline-from-font] decoration-skip-ink-none text-[#404040] w-max block mb-8">
        Popular Brands
        <br />
        <span className="w-full block h-1 bg-[#248D50]"></span>
      </div>

      <div className="bg-[#DAFFE9] p-6 rounded-[8px] flex flex-wrap gap-6">
        {/* Large Card */}
        <div className="w-[351px] h-[343px] rounded-[4px] p-4 bg-white">
          <div>
            <img src={mondofarm} alt="MONDOfarm" className="mx-auto" />
          </div>
          <div className="text-center mt-6">
            <div className="text-[28px] font-semibold font-['Poppins'] leading-[42px]">
              MONDOfarms
            </div>
            <div className="font-['Poppins'] text-[18px] font-semibold leading-[27px] mt-8">
              Logo Upto 7%
            </div>
          </div>
        </div>

        {/* Grid of Small Cards */}
        <div className=" brandWidth:hidden grid grid-cols-4 gap-4">
          {smallCards.map((card) => (
            <div
              key={card.id}
              className="w-[160px] h-[160px] rounded-[4px] p-4 bg-white shadow-custom flex flex-col justify-between"
            >
              <div>
                <img src={card.img} alt={card.name} className="mx-auto" />
              </div>
              <div className=" font-['Poppins'] text-center text-[18px] leading-[27px] font-semibold ">
                <div className="font-['Poppins'] text-[16px] text-gray-600">
                  Logo Upto {card.discount}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper !hidden brandWidth:!block"
        >
          {smallCards.map((card) => (
            <SwiperSlide className="!w-max" key={card.id}>
              <div
                key={card.id}
                className="w-[160px] h-[160px] rounded-[4px] p-4 bg-white shadow-custom flex flex-col justify-between"
              >
                <div>
                  <img src={card.img} alt={card.name} className="mx-auto" />
                </div>
                <div className=" font-['Poppins'] text-center text-[18px] leading-[27px] font-semibold ">
                  <div className="font-['Poppins'] text-[16px] text-gray-600">
                    Logo Upto {card.discount}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSection;
