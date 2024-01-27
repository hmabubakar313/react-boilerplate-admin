import React from "react";
import { Field, ErrorMessage } from "formik";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-check">
      <label>{label}</label>
      <Field name={name}>
        {(formik) => {
          const { field } = formik;
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  className="form-check-input"
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RadioButtons;
