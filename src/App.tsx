import ForgetPasswordPage from "./authComponents/ForgetPassword/ForgetPasswordPage";
import LoginPage from "./pages/LoginComponent/LoginPage";
import Checkemail from "./authComponents/checkemail/Checkemail";

import CreateNewPassword from "./authComponents/createnewpassword/CreateNewPassword";

import RegisterPage from "./pages/signup/RegisterPage";
import { Route, Routes } from "react-router-dom";
import VerifyAccount from "./authComponents/verifyaccount/VerifyAccount";
import EmailOtpVerification from "./authComponents/otpverification/EmailOtpVerification";
import PhoneOtpVerification from "./authComponents/otpverification/PhoneOtpVerification";
import HomeForm from "./pages/form/HomeForm";
import HomePage from "./pages/home/HomePage";
const App: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/Sign-up" element={<RegisterPage />} />
        <Route path="/emailverification" element={<EmailOtpVerification />} />
        <Route path="/phoneverification" element={<PhoneOtpVerification />} />
        <Route path="/changeverificationmode" element={<VerifyAccount />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/checkemail" element={<Checkemail />} />
        <Route path="/form" element={<HomeForm />} />
      </Routes>
    </>
  );
};

export default App;
