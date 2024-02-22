// Import necessary modules
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleLogin = () => {
 
    if (username === 'exampleUser' && password === 'password123') {
      setError('');
      navigate('/'); // Redirect to home page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <h2 className="login-header">Login</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error">{error}</p>}
        <p>
          Don't have an account? <Link to="/signup" className="login-toggle-button">Sign up</Link>
        </p>
        {/* Link to home page */}
        <p>
          <Link to="/"></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
