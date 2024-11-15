import React from "react";
import { motion } from "framer-motion";
import { UseFormRegisterReturn } from "react-hook-form";

type AuthenticationDataInputProps = {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<any>;
  errors?: any;
};

const AuthenticationDataInput = ({
  type,
  placeholder,
  register,
  errors,
}: AuthenticationDataInputProps) => {
  console.log(errors);

  return (
    <div className={"flex h-auto w-full flex-col gap-2"}>
      <motion.input
        type={type}
        whileFocus={{ borderColor: "#F8F9FC", color: "#F8F9FC" }}
        style={{ borderColor: "#AEAFB8", color: "#AEAFB8" }}
        placeholder={placeholder}
        className={
          "h-[50px] w-full rounded-xl border-2 border-custom-gray-200 bg-transparent px-2 placeholder:text-custom-gray-200 focus:outline-none"
        }
        {...register}
      />
      {errors && (
        <p className={"h-auto w-full text-center text-xl text-red-600"}>
          {errors}
        </p>
      )}
    </div>
  );
};

export default AuthenticationDataInput;
