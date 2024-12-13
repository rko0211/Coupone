import React from "react";
import createPassword from "../../assets/createPassword.png";

import PasswordField from "../commoncomponents/PasswordField";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  userphone: number;
  useremail: string;
  userpassword: string;
};

const CreateNewPassword: React.FC = () => {
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
    <div className=" logincontainer min-h-[100vh] flex flex-wrap-reverse justify-center items-center gap-0  customlg:gap-10 ">
      <div className="loginform customMax:w-full customMax:p-5 customMax:-mt-40  lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-2xl md:text-3xl lg:mb-10">
            Create a New Password
          </h2>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <div className="formoptions w-full">
              <label
                htmlFor="newUserPassword"
                className="usrpassword text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                New Password
              </label>
              <PasswordField
                register={register}
                id="newUserPassword"
                name="oldPassword"
              />

              <label
                htmlFor="newConfirmPassword"
                className="usrpassword text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Confirm Password
              </label>
              <PasswordField
                register={register}
                id="newConfirmPassword"
                name="confirmPassword"
              />

              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold lg:mt-9 customMax:mt-5"
                disabled={isSubmitting}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-4">
            Create a New Password
          </h2>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={createPassword}
            alt="SignUp Image"
            className="loginpic h-auto customMax:w-[240px] customMax:h-[180px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
