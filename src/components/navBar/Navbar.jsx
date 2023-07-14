import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import Avator from "../../../src/assets/avatar.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { ImBlog } from "react-icons/im";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nleft">
        <input type="text" name="" id="" placeholder="search anything here" />
        <BsSearch style={{marginLeft:5, fontSize:20}}/>
      </div>
      <div className="nright">
        <IoMdNotificationsOutline className="notifications" />
        <img src={Avator} alt="" className="profile" />
        <MdOutlineRoundaboutRight className="about"/>
        <FiHelpCircle className="about"/>
        <ImBlog className="about"/>
      </div>
    </div>
  );
}

export default Navbar;
