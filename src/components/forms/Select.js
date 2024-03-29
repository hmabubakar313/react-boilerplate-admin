import React from "react";
import { Field, ErrorMessage } from "formik";

function Select(props) {
  const { label, name, options, ...rest } = props;
  console.log("options", options);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        className="btn btn-primary dropdown-toggle"
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default Select;
