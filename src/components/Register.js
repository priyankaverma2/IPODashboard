// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useTheme } from './ThemeContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { themeStyles } = useTheme();
  const handleRegister = async () => {
    if (!name || !email || !username || !password) {
      setError('All fields are required');
      return;
    }
  
    const user = {
      name,
      email,
      username,
      password
    };
    console.log(user+"registered")
        navigate('/');
    
  };
  

  return (
    <div className='regsiter-entire'  style={themeStyles}>
    <div className="register-container">
      <h2>SignUp</h2>
      <form className="register-form">
        <label>
          
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
            className="register-input"
          />
        </label>
        <label>
          
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
        </label>
        <label>
          
          <input
            type="text"
            value={username}
            placeholder="Choose a username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="register-input"
          />
        </label>
        <label>
          
          <input
            type="password"
            value={password}
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
        </label>
        <p className="error-message">{error}</p>
        <button type="button" onClick={handleRegister} className="register-button">
        Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
