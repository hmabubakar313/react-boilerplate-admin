import React, { useState } from 'react';

const GenericForm = ({ initialFormData, fields, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({}); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    // Real-time validation
    const fieldErrors = validateField(name, value);
  
    // Check if the current field error should be cleared
    if (!fieldErrors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    } else {
      setErrors({ ...errors, ...fieldErrors });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
      alert("Form Submitted Successfully");
    } else {
      setErrors(formErrors);
      alert("Form Submission Failed");
    }
  };

  // const validationRules = {
  //   email: {
  //     required: true,
  //     pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  //     message: 'Invalid email format',
  //   },
  //   name: {
  //     required: true,
  //     pattern: /^[A-Za-z\s]+$/, // Only letters and spaces allowed
  //     message: 'Name is required and should not contain numbers',
  //   },
  //   password: {
  //     required: true,
  //     minLength: 8,
  //     message: 'Password is required and should be at least 8 characters long',
  //   },
  //   username: {
  //     required: true,
  //     pattern: /^[A-Za-z]+$/, // Only letters allowed
  //     message: 'Username is required and should not contain numbers',
  //   },
  // };
  
  const validateField = (fieldName, value) => {
    const fieldErrors = {};
  
    if (fieldName === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        fieldErrors[fieldName] = 'Email is required';
      } else if (!emailPattern.test(value)) {
        fieldErrors[fieldName] = 'Invalid email format';
      }
      if (value.length > 255)
      {
        fieldErrors[fieldName] = "value can not greater than 250 characters"
        console.log(value.length)
      }
    } else if (fieldName === 'name') {
      if (!value) {
        fieldErrors[fieldName] = 'Name is required';
      } else if (/\d/.test(value)) {
        fieldErrors[fieldName] = 'Name should not contain numbers';
      }
      if (value.length <3 || value > 250 )
      { 
        fieldErrors[fieldName] = "Name can not less than 3 or Can not greater than 250"
      }
      
    } else if (fieldName === 'password') {
      // Add password validation logic here
      if (!value) {
        fieldErrors[fieldName] = 'Password is required';
      } else if (value.length < 8) {
        fieldErrors[fieldName] = 'Password should be at least 8 characters long';
      }
    } else if (fieldName === 'username') {
      if (!value) {
        fieldErrors[fieldName] = 'Username is required';
      } else if (/\d/.test(value)) {
        fieldErrors[fieldName] = 'Username should not contain numbers';
      }
      if (value.length <3 || value > 16 )
      {
        console.log(value.length,"username")
        fieldErrors[fieldName] = "Name can not less than 3 or Can not greater than 16 "
      }
    }
  
    return fieldErrors;
  };
  
  
  
  const validateForm = () => {
    // Validate all fields
    const formErrors = {};
    fields.forEach((field) => {
      const fieldErrors = validateField(field.name, formData[field.name]);
      if (Object.keys(fieldErrors).length > 0) {
        formErrors[field.name] = fieldErrors[field.name];
      }
    });
    return formErrors;
  };
  

  const renderField = (field) => {
    if (field.type === 'textarea') {
      return (
        <textarea
          className="form-control"
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
        />
      );
    }
    return (
      <input
        type={field.type}
        className="form-control"
        name={field.name}
        value={formData[field.name] || ''}
        required={field.required}
        onChange={handleChange}
       
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name} className="mb-3">
          <label className="form-label">{field.label}</label>
          {renderField(field)}
          {errors[field.name] && <small className="text-danger">{errors[field.name]}</small>}
        </div>
      ))}
      <div className='text-center'>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  );
};

export default GenericForm;

