import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        "fixed inset-0 z-10 flex items-center justify-center font-lato"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-lg`}
      ></motion.div>
      <dialog
        className={
          "z-10 flex h-auto w-auto items-center justify-center bg-transparent"
        }
      >
        {children}
      </dialog>
    </motion.div>,
    document.body,
  );
};

export default Modal;
