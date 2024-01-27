import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "./FormikController.js"

function FormikWrapper() {
  const choices = [
    { key: "select options", value: "" },
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" }
  ];
  const radioOptions = [
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" }
  ];
  const CheckBoxOptions = [
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" }
  ];

  const initialValues = {
    email: "",
    description: "",
    selectChoice: "",
    radioChoice: "",
    checkBoxChoice: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectChoice: Yup.string().required("Required"),
    radioChoice: Yup.string().required("Required"),
    checkBoxChoice: Yup.array().required("Required")
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
            label="Email"
            placeholer="enter email"
            name="email"
          />
            <FormikController
            id="floatingInput"
            control="input"
            type="text"
            label="name"
            placeholer="enter name"
            name="name"
          />
          <FormikController
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikController
            control="select"
            label="Select your choice"
            name="selectChoice"
            options={choices}
          />
          <FormikController
            control="radio"
            label="Click your choice"
            name="radioChoice"
            options={radioOptions}
          />
          <FormikController
            control="checkbox"
            label="select your choices"
            name="checkBoxChoice"
            options={CheckBoxOptions}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default FormikWrapper;
