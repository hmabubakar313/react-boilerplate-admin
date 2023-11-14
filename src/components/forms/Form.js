import React, { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [formData, setFormData] = useState({
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

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center w-75 mx-auto">
        <div className="col-lg-6">
          <div className="card p-5 contact-card shadow">
            <form onSubmit={handleSubmit}>
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
              </div>
              {/* Email */}
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
              </div>
              {/* Address Line 1 */}
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
              </div>
              {/* Address Line 2 */}
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
              </div>
              {/* City */}
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
              </div>
              {/* Company */}
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
              </div>
              {/* Occupation */}
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
              </div>
              {/* Gender */}
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
              </div>
              {/* Age */}
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
              </div>
              {/* Zip Code */}
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
