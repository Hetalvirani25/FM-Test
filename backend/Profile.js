import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileSubMenu() {
    const [profile, setProfile] = useState({});
    const [userDetails, setUserDetails] = useState({});
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        // Assuming you have a way to get the logged-in user's ID
        const username = 'the_user_id'; 
        fetch(`http://localhost:5000/profile?username=${username}`)
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleChangePassword = () => {
        axios.post('http://localhost:5000/api/user/change-password', {
          currentPassword,
          newPassword
        })
        .then(() => alert('Password changed successfully.'))
        .catch(() => alert('Failed to change password.'));
      };

    return (
        <div>
            <h2>Profile Details</h2>
            <p>Username: {profile.username}</p>
            <p>Firstname: {profile.firstname}</p>
            <p>Lastname: {profile.lastname}</p>
            <p>Email: {profile.email}</p>
            <input type="password" placeholder="Current Password" onChange={(e) => setCurrentPassword(e.target.value)} />
      <input type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
}

export default ProfileSubMenu;
