import './Navbar.css'
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="nleft">
        <input type="text" name="" id="" placeholder='search anything here'/>
        {/* <BsSearch style={{marginLeft:5, fontSize:25}}/> */}
      </div>
      <div className="nright">
        <IoMdNotificationsOutline className='notifications'/>
        <img src="https://images.unsplash.com/photo-1621574534326-4b7b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className='profile'/>

      </div>
    </div>
  )
}

export default Navbar