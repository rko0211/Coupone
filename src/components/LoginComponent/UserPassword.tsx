import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiMiniEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const [passwordType, setPasswordType] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setPasswordType((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-2 p-2 bg-customFieldColor rounded-lg mb-6 ">
      {/* Icon */}
      <div className="">
        <RiLockPasswordFill className="w-6 h-6" />
      </div>

      <input
        type={passwordType ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="userpassword"
        className="outline-none hover:outline-none border-none p-3 bg-customFieldColor text-sm lg:text-lg w-full"
        required
      />
      {/* Icon */}
      <div className="cursor-pointer" onClick={togglePasswordVisibility}>
        {passwordType ? (
          <HiEyeSlash className="w-6 h-6 cursor-pointer" />
        ) : (
          <HiMiniEye className="w-6 h-6 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
