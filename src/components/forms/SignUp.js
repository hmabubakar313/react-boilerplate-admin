// SignupPage.js
import React from 'react';
import GenericForm from './GenericForm';

const SignupPage = () => {
  const fields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' }
  ];

  const initialFormData = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (formData) => {
    console.log('Signup Data:', formData);
    // Handle signup logic here
  };

  return (
    <div className="container-fluid my-4 w-50 mx-auto">
      <div className="card">
        <div className="card-body p-5">
          <h3 className="card-title text-center">Sign Up</h3>
          <GenericForm
            initialFormData={initialFormData}
            fields={fields}
            onSubmit={handleSubmit}
            autoComplete="new-password" // Add autoComplete here
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
