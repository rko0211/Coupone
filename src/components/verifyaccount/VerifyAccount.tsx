import React from "react";

import verify_account from "../../assets/verify_account.png";
import { useForm, SubmitHandler } from "react-hook-form";
import VerifyField from "../commoncomponents/VerifyField";
type Inputs = {
  useremail: boolean;
  userphone: boolean;
};

const VerifyAccount: React.FC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className=" logincontainer min-h-[100vh] flex customMax:flex-col-reverse justify-center items-center customMax:gap-0  customlg:gap-10 ">
      <div className="loginform customMax:w-full customMax:p-5 lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Verify Your Account
          </h2>
          <p className="welcomeparagraph mb-6 max-w-[524.067px] text-customGray">
            To continue, please provide your email address where we can send the
            One-Time Password (OTP).
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="formoptions w-full">
              <VerifyField
                register={register}
                id="checkemail"
                name="emailcheck"
                content="Continue With Email"
              />

              <VerifyField
                register={register}
                id="checkphone"
                name="phonecheck"
                content="Continue With Phone Number"
              />

              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                disabled={isSubmitting}
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            Verify Your Account
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            To continue, please provide your email address where we can send the
            One-Time Password (OTP).
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={verify_account}
            alt="Login Image"
            className="loginpic h-auto customMax:w-[240px] customMax:h-[240px]"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
