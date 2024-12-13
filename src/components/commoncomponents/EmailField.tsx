import React from "react";
import { FaUser } from "react-icons/fa";
import { UseFormRegister } from "react-hook-form";
interface EmailInputProps {
  placeholder?: string;
  register: UseFormRegister<any>;
  id: string;
}

const EmailField: React.FC<EmailInputProps> = ({
  placeholder,
  register,
  id,
}) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-customFieldColor rounded-lg mb-6 ">
      {/* Icon */}
      <div className="">
        <FaUser className="w-6 h-6" />
      </div>

      <input
        type="email"
        placeholder={placeholder}
        id={id}
        className="outline-none hover:outline-none border-none p-3 bg-customFieldColor text-sm lg:text-lg w-full customMax:p-2"
        {...register("useremail", {
          required: true,
        })}
        required
      />
    </div>
  );
};

export default EmailField;
