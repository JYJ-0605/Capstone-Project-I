import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="profile_image_url" alt="Profile" />
        <h2>Test</h2>
        <p>Student</p>
      </div>
      <nav>
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
