// ContactUs.js
import React from 'react';
import GenericForm from './GenericForm';

const ContactUs = () => {
  const fields = [
    { name: 'name', label: 'Name', type: 'text',required: true },
    { name: 'email', label: 'Email', type: 'email' ,required: true},
    { name: 'message', label: 'Message', type: 'textarea'} 
  ];

  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = (formData) => {
    console.log('Contact Form Data:', formData);
   
  };

  return (
    <div className="container-fluid my-4 w-50 mx-auto">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Contact Us</h3>
          <GenericForm
            initialFormData={initialFormData}
            fields={fields}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
