import './Sidebar.css'
import {Link} from 'react-router-dom'
import Dashboard from '../../pages/Dashboard/Dashboard';
const Sidebar = () => {
  return (
    <div className="sidepanel">
      <div className="logo">Task Management</div>
      <ul className="navigation">

        <li className="active">
          <Link to='/dashboard'>
          Overview
          </Link>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Members</a>
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
