import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { id, name,type,label,placeholer, ...rest } = props;
  console.log("password");
  return (
      <div class="form-floating mb-3">
        <Field
          type={type}
          className="form-control"
          id="floatingInput"
          label={label}
          placeholder={placeholer}
          name={name}
          {...rest}
        />
        <label for="floatingInput">{name}</label>
       
        <ErrorMessage name={name} />
      
      </div>
    
  );
}
export default Input;
