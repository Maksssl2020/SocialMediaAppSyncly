import React, { useReducer, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpenEyeIcon from "../icons/OpenEyeIcon.tsx";
import CloseEyeIcon from "../icons/CloseEyeIcon.tsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthenticationDataInput from "../components/input/AuthenticationDataInput.tsx";
import { useLoginUserMutation } from "../hooks/mutations/useLoginUserMutation.ts";
import { LoginRequest } from "../models/LoginRequest.ts";
import { ApiError } from "../models/ApiError.ts";

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
  const { register, handleSubmit, formState, reset, clearErrors, getValues } =
    useForm();
  const { errors } = formState;

  const [state, dispatch] = useReducer(reducer, {
    inputType: "password",
    password: "hidden",
  });
  const [apiErrors, setApiErrors] = useState<ApiError>();

  const { loginUser, loggingUser } = useLoginUserMutation({
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      setApiErrors(error);
      clearErrors();
    },
  });
  const navigate = useNavigate();

  const submit = (data: LoginRequest) => {
    setApiErrors(undefined);
    loginUser(data);
  };

  console.log(getValues());

  return (
    <div
      className={"flex h-[100vh] content-center items-center justify-center"}
    >
      <div
        className={
          "flex h-[700px] w-[650px] flex-col justify-between rounded-xl border-2 border-custom-gray-100 bg-custom-black-100 px-12 py-16 text-custom-white-100"
        }
      >
        <h1 className={"w-full text-center text-5xl"}>Sign In</h1>
        <form
          autoFocus={false}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            submit({
              username: data.username,
              password: data.password,
            });
          })}
          className={
            "flex h-auto w-full flex-col items-center justify-center gap-8"
          }
        >
          <AuthenticationDataInput
            type={"text"}
            placeholder={"Username"}
            register={{
              ...register("username", { required: "Username is required!" }),
            }}
            errors={errors?.username?.message}
          />
          <div className={"relative flex h-auto w-full items-center"}>
            <AuthenticationDataInput
              type={state.inputType}
              placeholder={"Password"}
              register={{
                ...register("password", { required: "Password is required!" }),
              }}
              errors={errors?.password?.message || apiErrors?.message}
            />
            <button
              onClick={() =>
                state.password === "hidden"
                  ? dispatch("show_password")
                  : dispatch("hide_password")
              }
              type={"button"}
              className={`absolute right-0 flex size-10 items-center justify-center rounded-full ${(errors.password?.message || apiErrors?.message) && "-translate-y-4"}`}
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
                      className={"right-0 size-8 text-custom-gray-200"}
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
                      className={"right-0 size-8 text-custom-gray-200"}
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
              "h-[65px] w-full rounded-xl border-2 border-custom-gray-200 text-3xl font-bold uppercase tracking-wider text-custom-gray-200"
            }
          >
            submit
          </motion.button>
        </form>
        <div className={"h-auto w-full"}>
          <p
            className={"h-auto w-full text-center text-xl text-custom-gray-200"}
          >
            Forgot <span className={"text-custom-white-100"}>Password</span>?
          </p>
          <p
            className={"h-auto w-full text-center text-xl text-custom-gray-200"}
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
