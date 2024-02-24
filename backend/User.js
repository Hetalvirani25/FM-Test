import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './UserMenu.css'; // Import CSS for styling

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    // Here, implement your authentication logic or API call.
    // On successful authentication:
    navigate('/');
  };
  const handleProfile = (e) => {
    e.preventDefault();
    // Here, implement your authentication logic or API call.
    // On successful authentication:
    navigate('/profile');
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Users
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={handleProfile}>Profile</button>
          <button onClick={handleLogout}>Logout</button> {/* Use a button for logout */}
        </div>
      )}
    </div>
  );
};


export default UserMenu;

