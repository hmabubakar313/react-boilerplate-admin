// LoginPage.js
import React from 'react';
import GenericForm from './GenericForm';

const LoginPage = () => {
  const fields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' }
  ];

  const initialFormData = {
    username: '',
    password: ''
  };

  const handleSubmit = (formData) => {
    console.log('Login Data:', formData);
    // Handle login logic here
  };

  return (
    <div className="container-fluid my-4 w-50 mx-auto">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-center">Login</h3>
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

export default LoginPage;
