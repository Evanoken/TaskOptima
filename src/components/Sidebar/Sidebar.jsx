import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidepanel">
      <div className="logo">Task Management</div>
      <ul className="navigation">
        <li className="active">
          <a href="#">Overview</a>
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
