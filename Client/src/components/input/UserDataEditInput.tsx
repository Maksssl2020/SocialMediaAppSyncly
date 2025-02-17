import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedPencilWithSquareIcon from "../../icons/AnimatedPencilWithSquareIcon.tsx";
import { UseFormRegisterReturn } from "react-hook-form";

type userDataEditInputProps = {
  title: string;
  type: string;
  register?: UseFormRegisterReturn<any>;
  inputValue?: string;
  errors?: any;
};

const UserDataEditInput = ({
  title,
  type,
  register,
  inputValue,
  errors,
}: userDataEditInputProps) => {
  const [editInputData, setEditInputData] = useState<boolean>(false);
  const [isEditButtonHovered, setIsEditButtonHovered] =
    useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editInputData && inputRef.current) {
      inputRef?.current?.focus();
    }
  }, [editInputData]);

  return (
    <>
      <div
        className={
          "flex h-[75px] w-auto items-center gap-4 text-custom-white-200"
        }
      >
        <label className={"w-[100px] text-xl text-custom-white-100"}>
          {title}
        </label>
        <motion.input
          ref={inputRef}
          defaultValue={inputValue}
          disabled={!editInputData}
          type={type}
          whileFocus={{ borderColor: "#B3B4BC", color: "#F8F9FC" }}
          style={{ borderColor: "#22222B", color: "#B3B4BC" }}
          className={
            "h-[65px] w-[250px] rounded-xl border-2 bg-custom-gray-300 px-4 focus:outline-none"
          }
          {...register}
        />
        <button
          onClick={() => setEditInputData(!editInputData)}
          onMouseEnter={() => setIsEditButtonHovered(true)}
          onMouseLeave={() => setIsEditButtonHovered(false)}
          className={"size-8"}
        >
          <AnimatedPencilWithSquareIcon
            isHovered={isEditButtonHovered}
            className={"size-8"}
          />
        </button>
      </div>
      {errors && <p className="text-sm text-red-500">{errors}</p>}
    </>
  );
};

export default UserDataEditInput;
