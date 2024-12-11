import React from "react";
import { FaUser } from "react-icons/fa";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-customFieldColor rounded-lg mb-6 ">
      {/* Icon */}
      <div className="">
        <FaUser className="w-6 h-6" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        id="useremai"
        className="outline-none hover:outline-none border-none p-3 bg-customFieldColor text-sm lg:text-lg w-full"
        required
      />
    </div>
  );
};

export default EmailInput;
