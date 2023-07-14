import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import image1 from '../../assets/Task-Management.png'
import { useNavigate, Link } from 'react-router-dom'
import './Home.css'
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className='homePage'>
        <div className="left">
          <h1>Get all your job done here</h1>
          <h3>Welcome to the Task Management System</h3>
          <br />
          <p className='p1'>Get organized and stay on top of your tasks with our powerful Task Management System. Streamline your workflow, collaborate with your team, and never miss a deadline again.</p>
       <Link to='/register'>
       <button className='bton' title='click here to get started' onClick={handleClick}><AiOutlineArrowRight className='btnc'/></button>
       </Link>   
        </div>
        <div className="right">
        <h2>Stay Organized with taskz</h2>
        <img src={image1} alt="image" className='image1'/>
        </div>
    </div>
  )
}

export default Home