import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Messages.css'; // Import the CSS file for styling

import Navbar from '../../components/navBar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
const socket = io('http://localhost:3001'); // Replace with your Socket.IO server URL

const MessagingPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();

    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:3001/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: Date.now(),
      content: newMessage,
    };

    socket.emit('sendMessage', message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage('');
  };

  return (
    <div>
        <Navbar/>
        <Sidebar/>
    <div className="messaging-page">
      <h2 className="page-title">Messages</h2>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            {message.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="input-field"
        />
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default MessagingPage;
