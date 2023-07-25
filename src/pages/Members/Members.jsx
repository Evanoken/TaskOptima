import React, { useState, useEffect } from 'react';
import './Members.css';
import Navbar from '../../components/navBar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {

    const fetchedMembers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        team: 'Team A',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        team: 'Team B',
      },
    ];
    setMembers(fetchedMembers);
  }, []);

  return (
    <div className="cm">
        <Navbar/>
        <Sidebar/>
    <div className="members-page">

      <h2>Members</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Members;
