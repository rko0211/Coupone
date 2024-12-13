import React from "react";
import loginFrame from "../../assets/loginFrame.png";

import EmailField from "../commoncomponents/EmailField";
import PasswordField from "../commoncomponents/PasswordField";

import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";

type Inputs = {
  useremail: string;
  userpassword: string;
};

const LoginPage: React.FC = () => {
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
      <div className="loginform customMax:w-full customMax:p-5 customMax:mt-0 lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 block customMax:hidden  text-center">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl lg:mb-4">
            Welcome Back!
          </h2>
          <p className="welcomeparagraph mb-6 text-customGray">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="formoptions w-full">
              <label
                htmlFor="useremail"
                className="usremail text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                User name / Email
              </label>
              <EmailField
                placeholder="example@gmail.com"
                register={register}
                id="useremail"
              />

              <label
                htmlFor="userpassword"
                className="usrpassword text-customLabelColor font-semibold block ml-5 customMax:mb-3 customlg:mb-3"
              >
                Password
              </label>
              <PasswordField
                register={register}
                id="userpassword"
                name="userpassword"
              />

              <div className=" forgotpassword flex justify-between items-center lg:mb-9 customMax:mb-5">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 w-5 h-5 rounded-sm" />
                  <span className="text-customLabelColor font-semibold">
                    Remember Me
                  </span>
                </label>

                <NavLink
                  to="/forget-password"
                  className="text-customGreenColor font-semibold"
                >
                  Forgot Password
                </NavLink>
              </div>
              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
                disabled={isSubmitting}
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-5">
            Don't have an account
            <NavLink
              to="/Sign-up"
              className="text-customGreenColor font-semibold ml-4"
            >
              Sign up Now
            </NavLink>
          </p>
        </div>
      </div>

      <div className="imgsection customMax:text-center">
        {/* Heading Part */}
        <div className="heading2 hidden customMax:block text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-3xl md:text-4xl mb-1">
            Welcome Back!
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage  customMax:inline-block">
          <img
            src={loginFrame}
            alt="Login Image"
            className="loginpic h-auto customMax:w-[200px] customMax:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
