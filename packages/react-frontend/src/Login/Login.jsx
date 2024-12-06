import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css"

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const host = 'https://bite-byte.azurewebsites.net/'
  //const host = 'http://localhost:8000'
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch(`${host}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, pwd: password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
      }

      const { token } = await response.json();
      localStorage.setItem('authToken', token);
      setSuccessMessage('Login successful!');
      setErrorMessage('');
      setTimeout(() => navigate('/myrecipes'), 2000);
    } catch (error) {
      setErrorMessage(error.message || 'Incorrect username or password.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container container-fluid" id="registerbody">
      <h1 className="text-center mb-4" id='login_h1'>Login</h1>
      
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3" id='button'>
          Login
        </button>
      </form>

      <div className="mt-3 text-center">
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
} 
  export default Login;
