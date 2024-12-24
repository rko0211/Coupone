import React from "react";
import amazonpage from "../../assets/amazonpage.png";
import percentageImage from "../../assets/percentage.png";
const AmazonPageHeader: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={amazonpage} alt="Amazon" />
      </div>

      <div className="flex gap-5 p-4 items-center justify-center flex-wrap-reverse">
        {/* Left Section */}
        <div className=" w-full lg:w-[40%]">
          <h1 className="font-poppins font-semibold text-[48px] leading-[40px] tracking-[0.02em] mb-10">
            Description
          </h1>

          <p className="font-poppins font-normal text-[24px] leading-[40px] tracking-[0.02em] mb-6">
            Get an exclusive deal with our special coupon code.{" "}
            <span className="font-bold">Enjoy 20% off</span> your next purchase.
            Offer valid for a limited time only. Watch a product video to
            collect a free coupon and maximize your savings.
          </p>

          <button className="bg-[#4A4A4A] rounded-[15px] text-white py-5 px-10 font-poppins font-semibold text-[30px] leading-[48px]">
            ADD TO CART
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[40%] max-h-[500px] flex justify-center items-center">
          <img
            src={percentageImage}
            alt="Coupon Icon"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AmazonPageHeader;
