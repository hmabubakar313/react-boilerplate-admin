import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "./FormikController";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters"),
    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Grid container justifyContent="center" alignItems="center" >
  <Grid item xs={12} sm={8} md={6} lg={4}>
    <Card variant="outlined" sx={{ maxWidth: 350, textAlign: 'center', padding: 2 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h3 className="mb-3">Login Form</h3>

          <FormikController
            type="email"
            label="Email Address"
            placeholder="Enter email"
            name="email"
            wrapperClassName="mb-3"
          />

      

          <FormikController
            type="text"
            label="Username"
            placeholder="Enter username"
            name="username"
            wrapperClassName="mb-3"
          />

          <FormikController
            type="password"
            label="Password"
            placeholder="Enter password"
            name="password"
            wrapperClassName="mb-3"
          />

          <FormikController
            type="password"
            label="Confirm Password"
            placeholder="Confirm password"
            name="confirm_password"
            wrapperClassName="mb-3"
          />

          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </Form>
      </Formik>
    </Card>
  </Grid>
</Grid>
</div>


  );
};

export default SignUp;
