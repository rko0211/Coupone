import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SectionHeading from "./SectionHeading";

import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";

const ReviewSection: React.FC = () => {
  const smallCards = [
    {
      id: 1,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 2,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 3,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 4,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
    {
      id: 5,
      img: "brand1",
      name: "Madhuri Naik, Navi Mumbai",
      description:
        "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    },
  ];
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <SectionHeading heading="Hear It From Our Customers" />
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper "
        >
          {smallCards.map((card) => (
            <SwiperSlide className="!w-max" key={card.id}>
              <div
                key={card.id}
                className="w-[360px]  rounded-[8px] py-8 px-7 shadow-custom flex flex-col items-start justify-between gap-2 bg-[#BFFFD9]"
              >
                <div>
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    sx={{ marginRight: "2.5rem" }}
                    readOnly
                  />
                </div>
                <div className=" w-full font-['Poppins'] text-[16px] leading-[24px] text-left ">
                  {card.description}
                </div>
                <div className=" w-full font-['Poppins'] text-pretty   text-[16px] leading-[24px] text-right">
                  {card.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
