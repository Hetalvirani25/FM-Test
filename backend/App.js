import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
// Placeholder home page
import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';
import Navigation from './components/Navigation';
import Profile from './components/Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/profile' element={<Profile/>} />

        <Route path='/navigation' element={<Navigation/>} />
        
        {/* Define other routes as needed */}
      </Routes>
    </Router>
    
  );
}

export default App;
