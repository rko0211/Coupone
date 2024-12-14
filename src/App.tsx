import ForgetPasswordPage from "./components/ForgetPassword/ForgetPasswordPage";
import LoginPage from "./components/LoginComponent/LoginPage";
import Checkemail from "./components/checkemail/Checkemail";

import CreateNewPassword from "./components/createnewpassword/CreateNewPassword";

import RegisterPage from "./components/signup/RegisterPage";
import { Route, Routes } from "react-router-dom";
import VerifyAccount from "./components/verifyaccount/VerifyAccount";
const App: React.FC = () => {
  return (
    <>
      <LoginPage />
      <ForgetPasswordPage />
      <RegisterPage />
      <CreateNewPassword />
      <Checkemail />
      <VerifyAccount />
      <Routes>
        <Route path="/Sign-in" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/Sign-up" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
