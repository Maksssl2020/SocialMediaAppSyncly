import * as Yup from "yup";
import { AnyObject } from "yup";

export const RegisterValidator: Yup.ObjectSchema<AnyObject> =
  Yup.object().shape({
    userName: Yup.string().required("Username is required!"),
    email: Yup.string()
      .email("E-mail address must be valid!")
      .required("E-mail address is required!"),
    firstName: Yup.string().required("First name is required!"),
    lastName: Yup.string().required("Last name is required!"),
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must be equal!")
      .required("Confirm password is required!"),
    dateOfBirth: Yup.date()
      .typeError("Date must be valid!")
      .required("Date is required!")
      .test("is-in-past", "Date must be in the past!", (value) => {
        return value && new Date(value) < new Date();
      }),
  });
