import React, { useState } from 'react';

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
      <h2>Settings</h2>

      <h3>Profile Photo</h3>
      <img src={profilePhoto} alt="Profile" />
      <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />

      <h3>Name</h3>
      <input type="text" value={name} onChange={handleNameChange} />

      <h3>Password</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={handlePasswordChange}
        />

        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />

        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
        <input
          type="password"
          name="confirmNewPassword"
          value={confirmNewPassword}
          onChange={handlePasswordChange}
        />

        <button type="submit">Save Changes</button>
      </form>

      <h3>Email Preferences</h3>
      <label>
        <input
          type="checkbox"
          name="promotional"
          checked={emailPreferences.promotional}
          onChange={handleEmailPreferencesChange}
        />
        Receive promotional emails
      </label>

      <label>
        <input
          type="checkbox"
          name="notifications"
          checked={emailPreferences.notifications}
          onChange={handleEmailPreferencesChange}
        />
        Receive notifications
      </label>

      <label>
        <input
          type="checkbox"
          name="newsletters"
          checked={emailPreferences.newsletters}
          onChange={handleEmailPreferencesChange}
        />
        Subscribe to newsletters
      </label>

      <h3>Privacy Settings</h3>
      <label>
        Profile Visibility:
        <select
          name="profileVisibility"
          value={privacySettings.profileVisibility}
          onChange={handlePrivacySettingsChange}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends</option>
        </select>
      </label>

      <label>
        Data Visibility:
        <select
          name="dataVisibility"
          value={privacySettings.dataVisibility}
          onChange={handlePrivacySettingsChange}
        >
          <option value="all">All</option>
          <option value="limited">Limited</option>
          <option value="none">None</option>
        </select>
      </label>

      <h3>Language</h3>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>

      <h3>Theme</h3>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <h3>Two-Factor Authentication</h3>
      <label>
        <input
          type="checkbox"
          checked={twoFactorAuthEnabled}
          onChange={handleTwoFactorAuthToggle}
        />
        Enable two-factor authentication
      </label>

      <h3>Connected Accounts</h3>
      <label>
        <input
          type="checkbox"
          name="facebook"
          checked={connectedAccounts.includes('facebook')}
          onChange={handleConnectedAccountToggle}
        />
        Connect with Facebook
      </label>

      <label>
        <input
          type="checkbox"
          name="twitter"
          checked={connectedAccounts.includes('twitter')}
          onChange={handleConnectedAccountToggle}
        />
        Connect with Twitter
      </label>

      {/* Add more connected account options as needed */}

      <h3>Notification Settings</h3>
      <label>
        <input
          type="checkbox"
          name="push"
          checked={notificationSettings.push}
          onChange={handleNotificationSettingsChange}
        />
        Enable push notifications
      </label>

      <label>
        <input
          type="checkbox"
          name="email"
          checked={notificationSettings.email}
          onChange={handleNotificationSettingsChange}
        />
        Receive email notifications
      </label>

      <label>
        <input
          type="checkbox"
          name="inApp"
          checked={notificationSettings.inApp}
          onChange={handleNotificationSettingsChange}
        />
        Show in-app notifications
      </label>
    </div>
  );
};

export default SettingsPage;
