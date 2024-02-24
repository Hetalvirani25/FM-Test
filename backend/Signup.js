import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // API call to backend to register the user
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the backend sends a response indicating successful registration
        console.log('Signup successful:', data);
        // Optionally navigate to login page or somewhere else after successful signup
        navigate('/');
      } else {
        // Handle unsuccessful signup
        alert('Signup failed: ' + (data.message || 'Please check your details'));
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again later.');
    }
  };
  const navigateToSignUp = () => {
    // Implement navigation to the sign-up page
    navigate('/'); // Assuming '/signup' is the route for the sign-up page
  };
  
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
      <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={navigateToSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
