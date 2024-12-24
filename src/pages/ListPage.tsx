import BestDealsTabs from "@/components/shared/BestDealsTabs";
import React from "react";
import giftpic from "../assets/giftpic.png";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
const ListPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto my-20">
          <h1 className=" text-center font-[Poppins] font-semibold text-[30px] md:text-[48px] leading-[40px] tracking-[0.07em] decoration-skip-ink-none underline-offset-auto text-[#248D50]">
            Find the Best Deals
          </h1>
          <p className="font-[Poppins] font-normal leading-[20px] md:leading-[40px] text-center tracking-[0.02em] text-[15px] md:text-[20px] mt-4 md:mt-5 ">
            Explore a wide range of deals on various products and services. Save
            money and enjoy great discounts.
          </p>
        </div>

        <div>
          <BestDealsTabs />
        </div>

        <div className="flex justify-center  items-center w-full  bg-white mt-20 mb-96 ">
          <div className="flex flex-row gap-10 flex-wrap-reverse justify-center items-center  w-full lg:px-6">
            {/* Left Content */}
            <div className="flex flex-col justify-start items-start gap-8 max-w-lg">
              <h1 className="font-poppins text-[30px] md:text-[40px] leading-[60px] font-semibold text-black">
                Discover the Power of Our Products
              </h1>
              <p className="font-poppins font-normal text-[20px] leading-[30px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <button className="bg-[#68FFA5] rounded-[15px] text-[24px] leading-[36px] font-bold text-[#025725] py-4 px-10 shadow-md hover:shadow-lg hover:bg-[#56e694]">
                ACTION
              </button>
            </div>
            {/* backGroundGradient */}
            {/* Right Content */}

            <div className="bg-backGroundGradient  rounded-full w-[500px] h-[500px] flex justify-center items-center">
              <img src={giftpic} alt="Gift Picture" className="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListPage;
