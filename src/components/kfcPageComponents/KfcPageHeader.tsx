import React from "react";
import kfc from "../../assets/kfc.png";

const KfcPageHeader: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={kfc} alt="Amazon" />
      </div>

      <div className="w-[90%] mx-auto my-12 ">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[48px] leading-[40px] tracking-[0.02em] mb-24">
            Description
          </h1>

          <p className="font-poppins font-normal text-[24px] leading-[40px] tracking-[0.02em] mb-16">
            Get an exclusive deal with our special coupon code.{" "}
            <span className="font-bold text-[32px]">Enjoy 20% off</span> your
            next purchase. Offer valid for a limited time only. Watch a product
            video to collect a free coupon and maximize your savings.
          </p>

          <button className="bg-[#4A4A4A] rounded-[15px] text-white py-5 px-10 font-poppins font-semibold text-[30px] leading-[48px] shadow-custom block mx-auto">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default KfcPageHeader;
