import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidator } from "../validators/RegisterValidator.ts";
import AuthenticationDataInput from "../components/input/AuthenticationDataInput.tsx";
import { useRegisterUserMutation } from "../hooks/mutations/useRegisterUserMutation.ts";
import { RegisterRequest } from "../models/RegisterRequest.ts";
import toast from "react-hot-toast";
import GenderSelect from "../components/select/GenderSelect.tsx";

const SignUp = () => {
  const { register, handleSubmit, getValues, reset, formState } = useForm({
    resolver: yupResolver(RegisterValidator),
  });
  const { errors } = formState;
  const { registerUser, registeringUser } = useRegisterUserMutation(() => {
    toast.success("User registered successfully.");
    reset();
  });

  console.log(getValues("username"));
  console.log(errors["userName"]);

  const data = [
    {
      type: "text",
      placeholder: "Username*",
      register: "userName",
      errors: errors?.userName?.message,
    },
    {
      type: "email",
      placeholder: "E-mail address*",
      register: "email",
      errors: errors?.email?.message,
    },
    {
      type: "text",
      placeholder: "First name*",
      register: "firstName",
      errors: errors?.firstName?.message,
    },
    {
      type: "text",
      placeholder: "Last name*",
      register: "lastName",
      errors: errors?.lastName?.message,
    },
    {
      type: "text",
      placeholder: "Country",
      register: "country",
      errors: undefined,
    },
    {
      type: "text",
      placeholder: "City",
      register: "city",
      errors: undefined,
    },
    {
      type: "date",
      placeholder: "Date of birth*",
      register: "dateOfBirth",
      errors: errors?.dateOfBirth?.message,
    },
    {
      type: "password",
      placeholder: "Password*",
      register: "password",
      errors: errors?.password?.message,
    },
    {
      type: "password",
      placeholder: "Confirm password*",
      register: "confirmPassword",
      errors: errors?.confirmPassword?.message,
    },
  ];

  const submit = (data: RegisterRequest) => {
    registerUser(data);
  };

  if (registeringUser) {
    return;
  }

  return (
    <div
      className={
        "flex h-full w-full items-center justify-center overflow-y-auto py-24"
      }
    >
      <div
        className={
          "flex h-auto min-h-[1050px] w-[650px] flex-col justify-between self-center rounded-xl border-2 border-custom-gray-100 bg-custom-black-100 px-12 py-16 text-custom-white-100"
        }
      >
        <h1 className={"mb-8 w-full text-center text-5xl"}>Sign Up</h1>
        <form
          autoFocus={false}
          onSubmit={handleSubmit((data) =>
            submit({
              userName: data.userName,
              email: data.email,
              password: data.password,
              firstName: data.firstName,
              lastName: data.lastName,
              gender: data.gender,
              country: data.country,
              city: data.city,
              dateOfBirth: data.dateOfBirth.toLocaleDateString(),
            }),
          )}
          className={
            "flex h-auto w-full flex-col items-center justify-center gap-8"
          }
        >
          {data.map((data, index) => (
            <AuthenticationDataInput
              key={index}
              type={data.type}
              placeholder={data.placeholder}
              register={{ ...register(data.register) }}
              errors={data.errors}
            />
          ))}
          <GenderSelect
            className={"h-[50px] w-full rounded-xl border-2"}
            register={register("gender")}
          />
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
      </div>
    </div>
  );
};

export default SignUp;
