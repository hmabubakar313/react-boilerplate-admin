import React from "react";
import { Field, ErrorMessage } from "formik";

function Checkboxes(props) {
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
                  className="form-check-input"
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label className="form-check-label">{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default Checkboxes;
