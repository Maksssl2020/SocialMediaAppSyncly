import React, { useReducer, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpenEyeIcon from "../icons/OpenEyeIcon.tsx";
import CloseEyeIcon from "../icons/CloseEyeIcon.tsx";
import { useNavigate } from "react-router-dom";

type State = { inputType: "text" | "password"; password: "visible" | "hidden" };
type Action = "show_password" | "hide_password";

function reducer(state: State, action: Action): State {
  switch (action) {
    case "show_password":
      return { ...state, inputType: "text", password: "visible" };
    case "hide_password":
      return { ...state, inputType: "password", password: "hidden" };
    default:
      return state;
  }
}

const SignIn = () => {
  const [state, dispatch] = useReducer(reducer, {
    inputType: "password",
    password: "hidden",
  });
  const navigate = useNavigate();

  return (
    <div className={"flex h-full w-full items-center justify-center"}>
      <div
        className={
          "flex min-h-[700px] w-[650px] flex-col justify-between rounded-xl border-2 border-custom-gray-100 bg-custom-black-100 px-12 py-16 text-custom-white-100"
        }
      >
        <h1 className={"w-full text-center text-5xl"}>Sign In</h1>
        <form
          className={
            "flex h-auto w-full flex-col items-center justify-center gap-8"
          }
        >
          <motion.input
            type={"text"}
            whileFocus={{ borderColor: "#F8F9FC", color: "#F8F9FC" }}
            style={{ borderColor: "#AEAFB8", color: "#AEAFB8" }}
            placeholder={"Username"}
            className={
              "border-custom-gray-200 placeholder:text-custom-gray-200 h-[50px] w-full rounded-xl border-2 bg-transparent px-2 focus:outline-none"
            }
          />
          <div className={"relative flex h-auto w-full items-center"}>
            <motion.input
              type={state.inputType}
              whileFocus={{ borderColor: "#F8F9FC", color: "#F8F9FC" }}
              style={{ borderColor: "#AEAFB8", color: "#AEAFB8" }}
              placeholder={"Password"}
              className={
                "border-custom-gray-200 placeholder:text-custom-gray-200 h-[50px] w-full rounded-xl border-2 bg-transparent px-2 autofill:bg-transparent autofill:shadow-none focus:outline-none"
              }
            />
            <button
              onClick={() =>
                state.password === "hidden"
                  ? dispatch("show_password")
                  : dispatch("hide_password")
              }
              type={"button"}
              className={
                "absolute right-0 flex size-10 items-center justify-center rounded-full"
              }
            >
              <AnimatePresence mode={"wait"} initial={false}>
                {state.password === "hidden" ? (
                  <motion.div
                    key="open-eye-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <OpenEyeIcon
                      className={"text-custom-gray-200 right-0 size-8"}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close-eye-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CloseEyeIcon
                      className={"text-custom-gray-200 right-0 size-8"}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <motion.button
            whileHover={{
              backgroundColor: "#F8F9FC",
              color: "#1B1C25",
              borderColor: "#F8F9FC",
            }}
            style={{
              backgroundColor: "#1B1C25",
              color: "#F8F9FC",
              borderColor: "#AEAFB8",
            }}
            type={"submit"}
            className={
              "border-custom-gray-200 text-custom-gray-200 h-[65px] w-full rounded-xl border-2 text-3xl font-bold uppercase tracking-wider"
            }
          >
            submit
          </motion.button>
        </form>
        <div className={"h-auto w-full"}>
          <p
            className={"text-custom-gray-200 h-auto w-full text-center text-xl"}
          >
            Forgot <span className={"text-custom-white-100"}>Password</span>?
          </p>
          <p
            className={"text-custom-gray-200 h-auto w-full text-center text-xl"}
          >
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className={"text-custom-white-100 hover:cursor-pointer"}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
