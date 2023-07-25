import './Sidebar.css'
import {Link} from 'react-router-dom'
import {GrOverview} from 'react-icons/gr'
import {GoProjectSymlink} from 'react-icons/go'
import {BiMessageSquareDots} from 'react-icons/bi'
import {MdOutlineGroups2} from 'react-icons/md'
import {FcCalendar} from 'react-icons/fc'
import {TbSettingsStar} from 'react-icons/tb'


const Sidebar = () => {
  return (
    <div className="sidepanel">
      <div className="logo">Task Management</div>
      <ul className="navigation">

        <li className="active">
        <GrOverview style={{fontSize:30, marginRight:15}}/>
          <Link to='/dashboard'> Overview </Link>
        </li>
        <li>
        <GoProjectSymlink style={{fontSize:30, marginRight:15}}/>
          <Link to='/projects'> Projects</Link>
        </li>
        {/* <li>
          <Link> Activity</Link> 
        </li> */}
        <li>
        <BiMessageSquareDots style={{fontSize:30, marginRight:15}}/>
          <Link to='/messages'> Messages</Link>
        </li>
        <li>
        <MdOutlineGroups2 style={{fontSize:30, marginRight:15}}/>
          <Link to='/members'> Members</Link> 
        </li>
        <li>
        <FcCalendar style={{fontSize:30, marginRight:15}}/>
          <Link to='/calendar'> Calendar</Link> 
        </li>
        <li>
        <TbSettingsStar style={{fontSize:30, marginRight:15}}/>
          <Link to='/settings'> Settings</Link> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
