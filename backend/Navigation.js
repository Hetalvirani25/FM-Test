// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
            <Link to="/home">Home</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/user">User</Link>
            
        </div>
    );
};

export default NavigationBar;
