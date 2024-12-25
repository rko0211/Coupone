import React from "react";
import couponevalidityImage from "../../assets/couponevalidityImage.png";
const CouponeValidityDetails: React.FC = () => {
  return (
    <div className="mt-40">
      <div>
        <div className="font-semibold font-poppins text-[64px] tracking-[0.02em] leading-[80px] p-5 lg:px-[87px] text-[#404040]">
          Validity & <br />
          Details
        </div>

        <div className=" w-[800px] h-[800px] mx-auto bg-[#D9D9D94D] rounded-full flex flex-col items-center gap-10">
          <div className="bg-custom-radial-gradient p-5 rounded-full h-[500px] w-[500px] flex flex-col justify-center items-center">
            <div>
              <img src={couponevalidityImage} alt="VALIDITY" />
            </div>
            <div className=" font-poppins text-[20px] font-semibold leading-[40px]">
              Expiration Date: June 30, 2024
            </div>
          </div>
          <div>
            <div className="font-poppins font-semibold text-[20px] my-5">
              Terms & Conditions:
            </div>
            <ul className="list-disc ml-7">
              <li>Valid on purchases above $50.</li>
              <li>Single-use per customer.</li>
              <li>Cannot be combined with other offers.</li>
              <li>Applicable on select items only.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponeValidityDetails;
