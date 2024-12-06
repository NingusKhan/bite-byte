import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const host = 'https://bite-byte.azurewebsites.net/';
  // const host = 'http://localhost:8000'
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username: name, password, confirmPassword } = formData;

    if (!name || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      setSuccessMessage('');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch(`${host}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: name, pwd: password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
      }

      const { token } = await response.json();
      localStorage.setItem('authToken', token);
      setSuccessMessage('Registration successful!');
      setErrorMessage('');
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
      });

      setTimeout(() => {
        navigate('/myrecipes');
      }, 2000);
    } catch (error) {
      setErrorMessage(error.message || 'Registration failed.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container container-fluid" id="registerbody">
      <h1 className="text-center mb-4" id='register_h1'>Register</h1>

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your Username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create a password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Register
        </button>
      </form>

      <div className="mt-3 text-center">
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
