import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { UseFormRegister } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface PhoneNumberInputProps {
  register: UseFormRegister<any>;

  name: string;
}

const Inputotp: React.FC<PhoneNumberInputProps> = ({ register, name }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-2 rounded-lg mb-5 ">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          required
          {...register(`${name}`, { required: true })}
        >
          <InputOTPGroup className="flex gap-3">
            <InputOTPSlot
              index={0}
              className="bg-customFieldColor p-6 rounded-lg"
            />
            <InputOTPSlot
              index={1}
              className="bg-customFieldColor p-6 rounded-lg"
            />
            <InputOTPSlot
              index={2}
              className="bg-customFieldColor p-6 rounded-lg"
            />
            <InputOTPSlot
              index={3}
              className="bg-customFieldColor p-6 rounded-lg"
            />
            <InputOTPSlot
              index={4}
              className="bg-customFieldColor p-6 rounded-lg"
            />
            <InputOTPSlot
              index={5}
              className="bg-customFieldColor p-6 rounded-lg"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="w-full flex items-center flex-wrap gap-4 justify-center mb-5">
        <span className="text-customgraydark font-semibold lg:ml-16">
          Didn’t receive the OTP?
        </span>
        <a href="/resend" className="text-customGreenColor font-semibold">
          Resend OTP
        </a>
      </p>
    </div>
  );
};

export default Inputotp;
