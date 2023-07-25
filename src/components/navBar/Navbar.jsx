import React, { useState } from 'react';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';
import Avatar from '../../../src/assets/avatar.png';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { FiHelpCircle } from 'react-icons/fi';
import { ImBlog } from 'react-icons/im';

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationsClick = () => {
    setShowNotifications(true);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <div className="Navbar">
      <div className="nleft">
        <input
          type="text"
          name=""
          id=""
          placeholder="search anything here"
        />
        <BsSearch style={{ marginLeft: 5, fontSize: 20 }} />
      </div>
      <div className="nright">
        <IoMdNotificationsOutline
          className="notifications"
          onClick={handleNotificationsClick}
        />
        <img src={Avatar} alt="" className="profile" />
        <MdOutlineRoundaboutRight className="about" />
        <FiHelpCircle className="about" />
        <ImBlog className="about" />

        {showNotifications && (
          <div className="modal">
            <div className="modal-content">
              <h3>Notifications</h3>
              {/* Add the content of the notifications here */}
              <button onClick={handleCloseNotifications}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
