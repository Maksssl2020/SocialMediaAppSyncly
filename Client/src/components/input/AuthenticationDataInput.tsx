import React from "react";
import { motion } from "framer-motion";

const AuthenticationDataInput = ({ type, placeholder, register, errors }) => {
  console.log(errors);

  return (
    <div className={"flex h-auto w-full flex-col gap-2"}>
      <motion.input
        type={type}
        whileFocus={{ borderColor: "#F8F9FC", color: "#F8F9FC" }}
        style={{ borderColor: "#AEAFB8", color: "#AEAFB8" }}
        placeholder={placeholder}
        className={
          "border-custom-gray-200 placeholder:text-custom-gray-200 h-[50px] w-full rounded-xl border-2 bg-transparent px-2 focus:outline-none"
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
