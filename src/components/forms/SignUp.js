import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "./FormikController";
export default function SignUp() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_Password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    first_name: Yup.string().required("Required"),
    last_name_name: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    new_password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikController
            id="floatingInput"
            control="input"
            type="email"
            label="Email Address"
            placeholer="Enter email"
            name="Enter Email"
          />

          <FormikController
            id="floatingInput"
            control="input"
            type="text"
            label="Name"
            placeholer="Enter name"
            name="Enter Name"
          />

          <FormikController
            id="floatingInput"
            control="input"
            type="password"
            label="Password"
            placeholder="Enter Password"
            name="Enter Password"
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
