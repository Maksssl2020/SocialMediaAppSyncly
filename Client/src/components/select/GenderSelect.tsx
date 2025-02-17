import { motion } from "framer-motion";
import { UseFormRegisterReturn } from "react-hook-form";

type genderSelectProps = {
  defaultValue?: string;
  register?: UseFormRegisterReturn<any>;
  disabled?: boolean;
  className?: string;
};

const GenderSelect = ({
  defaultValue,
  register,
  disabled = false,
  className,
}: genderSelectProps) => {
  return (
    <motion.select
      whileFocus={{
        backgroundColor: "#1B1C25",
        borderColor: "#F8F9FC",
        color: "#F8F9FC",
      }}
      style={{
        backgroundColor: "#00000000",
        borderColor: "#AEAFB8",
        color: "#AEAFB8",
      }}
      aria-placeholder={"Gender"}
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      {...register}
    >
      <option>Female</option>
      <option>Male</option>
      <option>Other</option>
    </motion.select>
  );
};

export default GenderSelect;
