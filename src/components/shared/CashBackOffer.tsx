import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import SectionHeading from "./SectionHeading";
import MONDOfarm from "../../assets/smallimage.png";
interface CardData {
  id: number;
  logosrc: string;
  title: string;
  discount: string;
}

const cards: CardData[] = [
  {
    id: 1,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 2,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 3,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 4,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 5,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 6,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
  {
    id: 7,
    logosrc: MONDOfarm,
    title: "MONDOfarms",
    discount: "Flat 30% Cashback",
  },
];

const CashBackOffer: React.FC = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <SectionHeading heading="High Cashback Offer" />

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
          {cards.map((card) => (
            <SwiperSlide className="!w-max" key={card.id}>
              <div
                key={card.id}
                className="w-[360px]  rounded-[8px] py-8 px-7 shadow-custom flex flex-col items-start justify-between gap-2 "
              >
                <div className="flex justify-between items-center gap-8">
                  <div className="flex items-center justify-center ">
                    <img
                      src={card.logosrc}
                      alt="Company Logo"
                      className="max-w-[120px] max-h-[120px] object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-8">
                    <h2 className="font-[Poppins] leading-[36px] text-[24px] font-semibold">
                      {card.title}
                    </h2>
                    <button className="bg-[#68FFA5] rounded-sm text-left py-2 px-8">
                      {card.discount}
                    </button>
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

export default CashBackOffer;
