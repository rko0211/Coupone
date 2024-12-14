import ForgetPasswordPage from "./components/ForgetPassword/ForgetPasswordPage";
import LoginPage from "./components/LoginComponent/LoginPage";
import Checkemail from "./components/checkemail/Checkemail";

import CreateNewPassword from "./components/createnewpassword/CreateNewPassword";

import RegisterPage from "./components/signup/RegisterPage";
import { Route, Routes } from "react-router-dom";
import VerifyAccount from "./components/verifyaccount/VerifyAccount";
import EmailOtpVerification from "./components/otpverification/EmailOtpVerification";
import PhoneOtpVerification from "./components/otpverification/PhoneOtpVerification";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/Sign-in" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/Sign-up" element={<RegisterPage />} />
        <Route path="/emailverification" element={<EmailOtpVerification />} />
        <Route path="/phoneverification" element={<PhoneOtpVerification />} />
        <Route path="/changeverificationmode" element={<VerifyAccount />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/checkemail" element={<Checkemail />} />
      </Routes>
    </>
  );
};

export default App;
