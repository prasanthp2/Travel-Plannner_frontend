import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Signup.css'
const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there are stored signup details on component mount
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData && isSignUp) {
      const userData = JSON.parse(storedUserData);
      setUsername(userData.username);
      setPassword(userData.password);
      setEmail(userData.email);
    } else {
      // Clear input fields when switching to login mode
      setUsername('');
      setPassword('');
      setEmail('');
    }
  }, [isSignUp]);

  const handleAuth = () => {
    if (isSignUp) {
      // Sign up
      const userData = { username, password, email };
      localStorage.setItem('userData', JSON.stringify(userData));
      setSuccessMessage('Signup successful. Redirecting to the home page...');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/'); // Navigate to the home page after successful signup
      }, 2000); // Redirect after 2 seconds
    } else {
      // Login
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.username === username && userData.password === password) {
          console.log('Login successful:', userData);
          navigate('/home'); // Navigate to the home page after successful login
        } else {
          console.log('Login failed. Invalid username or password.');
        }
      } else {
        console.log('Login failed. User not found.');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form>
        {isSignUp && (
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </label>
            <br />
          </div>
        )}
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </label>
        <br />
        <button type="button" onClick={handleAuth} className="auth-button">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

     
    </div>
  );
};

export default Auth;


