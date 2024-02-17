import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function Input(props) {
  const { id, name, label, placeholder, field, form, ...rest } = props;

  return (
    <FormControl fullWidth margin="normal">
      <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
        style={{ width: "200px" }} 
        InputProps={{ style: { border: 'none' } }}
        {...field}
        {...rest}
      />
      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </FormControl>
  );
}

export default Input;
