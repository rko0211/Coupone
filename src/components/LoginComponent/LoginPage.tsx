import React, { useState } from "react";
import loginFrame from "../../assets/loginFrame.png";

import EmailInput from "./UserEmailInput";
import PasswordInput from "./UserPassword";

import "./Loginstyles.css";

const LoginPage: React.FC = () => {
  const [useremail, setUseremail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className=" logincontainer min-h-[100vh] flex flex-1 justify-center items-center lg:gap-10">
      <div className="loginform mt-0 lg:mt-10">
        {/* Heading Part */}
        <div className="heading1 text-center">
          <h2 className="welcomeheading font-bold text-4xl lg:mb-4">
            Welcome Back!
          </h2>
          <p className="welcomeparagraph mb-6 text-customGray">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Form Part */}
        <div className="formdiv flex flex-col items-center">
          <form action="" className="w-full">
            <div className="formoptions w-full">
              <label
                htmlFor="useremai"
                className="usremai text-customLabelColor font-semibold block ml-3 lg:mb-3"
              >
                User name / Email
              </label>
              <EmailInput
                value={useremail}
                onChange={setUseremail}
                placeholder="example@gmail.com"
              />

              <label
                htmlFor="userpassword"
                className="usrpassword text-customLabelColor font-semibold block ml-3 lg:mb-3"
              >
                Password
              </label>
              <PasswordInput value={password} onChange={setPassword} />

              <div className=" forgotpassword flex justify-between items-center md:mb-10">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 w-5 h-5 rounded-sm" />
                  <span className="text-customLabelColor font-semibold">
                    Remember Me
                  </span>
                </label>

                <a
                  href="/forgot-password"
                  className="text-customGreenColor font-semibold"
                >
                  Forgot Password
                </a>
              </div>
              <button
                type="submit"
                className="bg-customGreenColor text-center w-full rounded-[4px] text-white px-4 py-4 font-semibold"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-5">
            Don't have an account
            <a
              href="/sing-up"
              className="text-customGreenColor font-semibold ml-4"
            >
              Sign up Now
            </a>
          </p>
        </div>
      </div>

      <div className="imgsection">
        {/* Heading Part */}
        <div className="heading2 text-center mt-10 ">
          <h2 className="welcomeheading font-bold text-4xl mb-1">
            Welcome Back!
          </h2>
          <p className="welcomeparagraph mb-2 p-5 text-customGray">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Image part */}
        <div className="loginimage">
          <img src={loginFrame} alt="Login Image" className="loginpic h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
