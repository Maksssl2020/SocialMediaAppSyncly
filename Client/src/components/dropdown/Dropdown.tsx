import React from "react";
import { motion } from "framer-motion";

const Dropdown = ({ isOpen, className, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-200%" }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-200%" }}
      exit={{ opacity: 0, y: "-200%" }}
      style={{ zIndex: 0 }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Dropdown;
