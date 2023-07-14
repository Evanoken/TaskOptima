import React, { useState } from 'react';
import './Forgotpassword.css';

function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email exists in the database (simulate database check)
    const isEmailValid = checkEmailExistence(email);

    if (isEmailValid) {
      // Generate the reset password link and send it to the email
      const resetPasswordLink = generateResetPasswordLink(email);
      // You can send the link via email using a backend service or display it on the page for testing purposes
      setMessage(`Reset password link: ${resetPasswordLink}`);
    } else {
      setMessage('Email not found');
    }
  };

  const checkEmailExistence = (email) => {
    // Simulate checking if the email exists in the database
    // Replace this with your own logic to check email existence in your backend
    const mockEmailDatabase = ['user1@example.com', 'user2@example.com'];
    return mockEmailDatabase.includes(email);
  };

  const generateResetPasswordLink = (email) => {
    // Generate the reset password link here
    // Replace this with your own logic to generate the link based on your backend implementation
    const resetPasswordLink = `https://example.com/reset-password?email=${encodeURIComponent(email)}`;
    return resetPasswordLink;
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Forgotpassword;
