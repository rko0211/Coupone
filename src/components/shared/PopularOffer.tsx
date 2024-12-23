import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import MONDOframe from "../../assets/MONDOfarm.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopularOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Today", id: 0 },
    { name: "CD Exclusive", id: 1 },
    { name: "People are currently Using", id: 2 },
  ];

  const cards = [
    [
      {
        id: 0,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 1,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 2,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 3,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 4,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 5,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 6,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
      {
        id: 7,
        imgsrc: MONDOframe,
        title: "80% Off on Plants",
        subtitle: "Logo Upto 7%",
        buttonText: "Get Deal",
      },
    ],
    [
      {
        id: 0,
        imgsrc: MONDOframe,
        title: "50% Off on Seeds",
        subtitle: "Logo Upto 5%",
        buttonText: "Get Deal",
      },
      {
        id: 1,
        imgsrc: MONDOframe,
        title: "50% Off on Seeds",
        subtitle: "Logo Upto 5%",
        buttonText: "Get Deal",
      },
      {
        id: 2,
        imgsrc: MONDOframe,
        title: "50% Off on Seeds",
        subtitle: "Logo Upto 5%",
        buttonText: "Get Deal",
      },
    ],
    [
      {
        id: 0,
        imgsrc: MONDOframe,
        title: "70% Off on Tools",
        subtitle: "Logo Upto 10%",
        buttonText: "Get Deal",
      },

      {
        id: 1,
        imgsrc: MONDOframe,
        title: "70% Off on Tools",
        subtitle: "Logo Upto 10%",
        buttonText: "Get Deal",
      },
    ],
  ];

  return (
    <div className="mt-10 w-[90%] mx-auto">
      <SectionHeading heading="Popular Offer" />
      <div className="">
        {/* Tabs */}
        <div className="flex flex-col ">
          <div className="flex items-center gap-4 flex-wrap">
            {tabs.map((tab) => (
              <div>
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-2 text-center font-[Poppins] font-bold text-[20px] ${
                    activeTab === tab.id
                      ? "border-b-2 border-[#248D50] text-[#248D50]"
                      : " text-[#404040] "
                  }`}
                >
                  {tab.name}
                </button>

                {/*Pending Part */}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            navigation={false}
            pagination={false}
            mousewheel={false}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper "
          >
            {cards[activeTab]?.map((card) => (
              <SwiperSlide className="!w-max" key={card.id}>
                <div
                  key={card.id}
                  className=" w-[240px] border  rounded-[4px] p-4 shadow-custom flex flex-col items-center"
                >
                  <img
                    src={card.imgsrc}
                    alt="Company Logo"
                    className="w-[160px]"
                  />
                  <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[30px] text-[20px]">
                    {card.title}
                  </p>
                  <p className=" my-4  font-semibold text-[18px] leading-[27px] font-[Poppins]">
                    {card.subtitle}
                  </p>
                  <button className="bg-[#248D50] font-semibold text-white py-2 px-8 rounded-sm hover:bg-green-600">
                    {card.buttonText}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularOffer;
