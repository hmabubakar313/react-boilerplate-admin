import React from "react";
import Input from "./Input";
import TextArea from "./TextArea.js";
import Select from "./Select.js";
import RadioButtons from "./RadioButton.js";
import CheckBoxes from "./CheckBoxes.js";

function FormikController(props) {
  const {  ...rest } = props;
  switch (rest.type) {
    case "password":
    case "text":
    case "email":
      return <Input {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxes {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
