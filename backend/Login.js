import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // API call for authentication
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful authentication
        navigate('/admin');
        navigate('/navigation'); // Update this to your success route
      } else {
        // Handle failed authentication
        setError(data.message || 'Authentication failed');
      }
    } catch (error) {
      // Handle network or other errors
      setError('An error occurred, please try again later.');
    }
  };
  const navigateToSignUp = () => {
    // Implement navigation to the sign-up page
    navigate('/Signup'); // Assuming '/signup' is the route for the sign-up page
  };
  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={navigateToSignUp}>Sign Up</button>
    </div>
  );
}

export default Login;