import React, { useState } from 'react';
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navBar/Navbar';
const SettingsPage = () => {
  const [profilePhoto, setProfilePhoto] = useState('');
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [emailPreferences, setEmailPreferences] = useState({
    promotional: true,
    notifications: true,
    newsletters: false,
  });
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    dataVisibility: 'all',
  });
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [notificationSettings, setNotificationSettings] = useState({
    push: true,
    email: true,
    inApp: false,
  });

  const handleProfilePhotoChange = (event) => {
    const photoFile = event.target.files[0];
    setProfilePhoto(URL.createObjectURL(photoFile));
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handlePasswordChange = (event) => {
    const passwordField = event.target.name;
    const value = event.target.value;

    switch (passwordField) {
      case 'currentPassword':
        setCurrentPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'confirmNewPassword':
        setConfirmNewPassword(value);
        break;
      default:
        break;
    }
  };

  const handleEmailPreferencesChange = (event) => {
    const preferenceName = event.target.name;
    const isChecked = event.target.checked;

    setEmailPreferences((prevState) => ({
      ...prevState,
      [preferenceName]: isChecked,
    }));
  };

  const handlePrivacySettingsChange = (event) => {
    const settingName = event.target.name;
    const value = event.target.value;

    setPrivacySettings((prevState) => ({
      ...prevState,
      [settingName]: value,
    }));
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  };

  const handleTwoFactorAuthToggle = () => {
    setTwoFactorAuthEnabled((prevState) => !prevState);
  };

  const handleConnectedAccountToggle = (event) => {
    const accountName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setConnectedAccounts((prevState) => [...prevState, accountName]);
    } else {
      setConnectedAccounts((prevState) =>
        prevState.filter((account) => account !== accountName)
      );
    }
  };

  const handleNotificationSettingsChange = (event) => {
    const settingName = event.target.name;
    const isChecked = event.target.checked;

    setNotificationSettings((prevState) => ({
      ...prevState,
      [settingName]: isChecked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform necessary operations with the form data
    // Example: Send updated profile information to the server

    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div>
        <Navbar/>
        <Sidebar/>
    

    <div className='settings-container'>
      <h2 className='settings-heading'>Settings</h2>

      {/* Profile Photo */}
      <div className="profile-photo-container">
        <h3>Profile Photo</h3>
        <img className="profile-photo" src={profilePhoto} alt="Profile" />
        <input
          className="profile-photo-input"
          type="file"
          accept="image/*"
          onChange={handleProfilePhotoChange}
        />
      </div>
       {/* Name */}
       <div className="name-container">
        <h3>Name</h3>
        <input
          className="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <h3>Password</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password" className="password-input"
          name="currentPassword"
          value={currentPassword}
          onChange={handlePasswordChange}
        />

        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password" className="password-input"
          name="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />

        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
        <input
          type="password" className="password-input"
          name="confirmNewPassword"
          value={confirmNewPassword}
          onChange={handlePasswordChange}
        />

        <button type="submit" style={{marginTop: 10, width: 180}}>Save Changes</button>
      </form>
  

      <h3>Theme</h3>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

    </div>
    </div>
  );
};

export default SettingsPage;
