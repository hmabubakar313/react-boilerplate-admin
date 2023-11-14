import React, { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    company: "",
    occupation: "",
    gender: "",
    phoneNumber: "",
    age: "",
    zipCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    userName: false,
    passWord: false,
    firstName: false,
    lastName: false,
    email: false,
    addressLine1: false,
    addressLine2: false,
    city: false,
    company: false,
    occupation: false,
    gender: false,
    phoneNumber: false,
    age: false,
    zipCode: false,
  });

  const validateForm = () => {
    let valid = true;
    const errors = {};
  
    const validateInput = (fieldName, regex) => {
      if (!formData[fieldName].match(regex)) {
        errors[fieldName] = true;
        valid = false;
      } else {
        errors[fieldName] = false;
      }
    };
    validateInput("userName", /^[a-zA-Z0-9]*$/);
    validateInput("passWord", /^[a-zA-Z0-9]*$/);
    validateInput("firstName", /^[a-zA-Z]*$/);
    validateInput("lastName", /^[a-zA-Z]*$/);
    validateInput("email", /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    validateInput("company", /^[a-zA-Z]*$/);
    validateInput("occupation", /^[a-zA-Z]*$/);
    validateInput("phoneNumber", /^[0-9]*$/);
    validateInput("addressLine1", /^[a-zA-Z0-9\s,'-]*$/);
    validateInput("addressLine2", /^[a-zA-Z0-9\s,'-]*$/);
    validateInput("city", /^[a-zA-Z\s]*$/);
    validateInput("zipCode", /^[0-9]*$/);
  
    
    const ageValue = parseInt(formData.age, 10);
    if (isNaN(ageValue) || ageValue <= 18) {
      errors.age = true;
      valid = false;
    } else {
      errors.age = false;
    }
  
    setFormErrors({ ...formErrors, ...errors });
    return valid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted:", formData);
      
    } else {
      console.log("Form has validation errors");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const errorMessages = {
    userName: 'Please enter a valid username (only letters and numbers allowed).',
    passWord: 'Please enter a valid password (only letters and numbers allowed).',
    firstName: 'Please enter a valid first name (only letters allowed).',
    lastName: 'Please enter a valid last name (only letters allowed).',
    email: 'Please enter a valid email address.',
    addressLine1: 'Please enter a valid address.',
    addressLine2: 'Please enter a valid address.',
    city: 'Please enter a valid city name. you can only use letters.',
    company: 'Please enter a valid company name. you can only use letters.',
    occupation: 'Please enter a valid occupation. you can only use letters.',
    phoneNumber: 'Please enter a valid phone number. you can only use numbers.',
    age: 'Please enter a valid age. you must be over 18.',
    zipCode: 'Please enter a valid zip code. you can only use numbers.',
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center w-75 mx-auto">
        <div className="col-lg-6">
          <div className="card p-5 contact-card shadow">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.userName ? "invalid" : ""}`}
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  style={formErrors.userName ? { borderColor: 'red' } : {}}
                  required
                />
                {formErrors.userName && (
                <small className="text-danger">{errorMessages.userName}</small>  
                )}
              </div>
              
              <div className="mb-3">
                <label htmlFor="passWord" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${formErrors.passWord ? "invalid" : ""}`}
                  id="passWord"
                  name="passWord"
                  value={formData.passWord}
                  onChange={handleInputChange}
                  style={formErrors.passWord ? { borderColor: 'red' } : {}}
                  required
                />
                {formErrors.passWord && (
                <small className="text-danger">{errorMessages.passWord}</small>
                )}  
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.firstName ? "invalid" : ""}`}
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={formErrors.firstName ? { borderColor: 'red' } : {}}
                  required
                />
               
                {formErrors.firstName && (
                  <small className="text-danger">{errorMessages.firstName}</small>
                )}
              </div>
              


          
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.lastName ? "invalid" : ""}`}
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={formErrors.lastName ? { borderColor: 'red' } : {}}
                  required
                />
               
                {formErrors.lastName && (
                  <small className="text-danger">{errorMessages.lastName}</small>
                )}
              </div>
         
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${formErrors.email ? "invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={formErrors.email ? { borderColor: 'red' } : {}}
                  required
                />
               
                {formErrors.email && (
                  <small className="text-danger">{errorMessages.email}</small>
                )}
              </div>
           
              <div className="mb-3">
                <label htmlFor="addressLine1" className="form-label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.addressLine1 ? "invalid" : ""}`}
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  style={formErrors.addressLine1 ? { borderColor: 'red' } : {}}
                />
               
                {formErrors.addressLine1 && (
                  <small className="text-danger">{errorMessages.addressLine1}</small>
                )}
              </div>
             
              <div className="mb-3">
                <label htmlFor="addressLine2" className="form-label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.addressLine2 ? "invalid" : ""}`}
                  id="addressLine2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  style={formErrors.addressLine2 ? { borderColor: 'red' } : {}}
                />
            
                {formErrors.addressLine2 && (
                  <small className="text-danger">{errorMessages.addressLine2}</small>
                )}
              </div>
          
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.city ? "invalid" : ""}`}
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={formErrors.city ? { borderColor: 'red' } : {}}
                />
               
                {formErrors.city && (
                  <small className="text-danger">{errorMessages.city}</small>
                )}
              </div>
            
              <div className="mb-3">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.company ? "invalid" : ""}`}
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={formErrors.company ? { borderColor: 'red' } : {}}
                />
               
                {formErrors.company && (
                  <small className="text-danger">{errorMessages.company}</small>
                )}
              </div>
           
              <div className="mb-3">
                <label htmlFor="occupation" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.occupation ? "invalid" : ""}`}
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  style={formErrors.occupation ? { borderColor: 'red' } : {}}
                />
                
                {formErrors.occupation && (
                  <small className="text-danger">{errorMessages.occupation}</small>
                )}
              </div>
              
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className={`form-control ${formErrors.gender ? "invalid" : ""}`}
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  style={formErrors.gender ? { borderColor: 'red' } : {}}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Phone Number */}
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`form-control ${formErrors.phoneNumber ? "invalid" : ""}`}
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  style={formErrors.phoneNumber ? { borderColor: 'red' } : {}}
                />
               
                {formErrors.phoneNumber && (
                  <small className="text-danger">{errorMessages.phoneNumber}</small>
                )}
              </div>
           
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className={`form-control ${formErrors.age ? "invalid" : ""}`}
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  style={formErrors.age ? { borderColor: 'red' } : {}}
                />
             
                {formErrors.age && (
                  <small className="text-danger">{errorMessages.age}</small>
                )}
              </div>
            
              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  className={`form-control ${formErrors.zipCode ? "invalid" : ""}`}
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  style={formErrors.zipCode ? { borderColor: 'red' } : {}}
                />
              
                {formErrors.zipCode && (
                  <small className="text-danger">{errorMessages.zipCode}</small>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
