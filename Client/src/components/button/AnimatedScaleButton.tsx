import React from "react";
import { motion } from "framer-motion";

type AnimatedScaleButtonProps = {
  className?: string;
  onClick?: () => void;
  children: any;
};

const AnimatedScaleButton = ({
  key,
  className,
  onClick,
  children,
}: AnimatedScaleButtonProps) => {
  return (
    <motion.button
      key={key}
      whileHover={{ scale: 1.15 }}
      type={"button"}
      onClick={onClick}
      className={`${className}`}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedScaleButton;
