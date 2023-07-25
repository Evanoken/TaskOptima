import React from "react";
import {useState, useEffect} from "react"
import { Line, Bar } from "react-chartjs-2";
import "./Dashboard.css";
import Navbar from '../../components/navBar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { MdUpcoming } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { VscDebugContinue } from 'react-icons/vsc'
import { MdIncompleteCircle } from 'react-icons/md'
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement,} from "chart.js";
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend );
function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [team, setTeam] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const labels = [ "jan", "feb", "march", "april", "may", "june", "July", "aug", "Sep", "Oct", "Nov", "Dec",];
  const sampleData = [
    { date: "2023-01-01", total_amount: 100 },
    { date: "2023-02-01", total_amount: 150 },
    { date: "2023-03-01", total_amount: 200 },
    // Add more data points as needed
  ];
  const amounts = sampleData.map((item) => item.total_amount);
  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Sales per Anum",
        data: amounts,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 3,
        tension: 0.1,
      },
    ],
  };
  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Amount",
        data: amounts,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 3,
      },
    ],
  };

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  
  function handleModalClose() {
    setIsModalOpen(false);
  }
  return (
    <div className="cd">
      <Navbar />
      <Sidebar />
      <div className="cdashboard">

        <div className="row1">
          <div className="col1">
            <h1>Projects Summary</h1>
            <p>Add a new Project and manage all the projects</p>
          </div>
          <div className="col2">
            <button>+ Add Project</button>
          </div>
        </div>
        <div className="row2">
          <div className="r2col1">
            <span><MdUpcoming className="upcoming" /> Upcoming</span>
            {/* <h1>50</h1> */}
            <p className="available1">50</p>
            <p>check for <br />upcoming projects <br /> <AiOutlineArrowRight className="right" /></p>
          </div>
          <div className="r2col2">
            <span><VscDebugContinue className="upcoming" /> Ongoing</span>
            {/* <h1>50</h1> */}
            <p className="available1">50</p>
            <p>check for <br />ongoing projects <br /> <AiOutlineArrowRight className="right" /></p>
          </div>
          <div className="r2col3">
            <span><MdIncompleteCircle className="upcoming" /> Complete</span>
            {/* <h1>50</h1> */}
            <p className="available1">50</p>
            <p>check for <br />complete projects <br /> <AiOutlineArrowRight className="right" /></p>
          </div>
        </div>
        
        <div className="row4">
        <div className="chart">
          <h5 style={{textAlign: "center"}}>Tasks each month</h5>
          <Line data={lineChartData} options={{}} className="chart1" style={{height: 300, padding: 20}} />
        </div>
        <div className="chart">
          <h5 style={{textAlign: "center"}}>Task Optima Growth rate </h5>
          <Bar data={barChartData} options={{}} className="chart1" style={{height: 300, padding: 20}}/>
        </div>
      </div>
        </div>
        {isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleModalClose}>&times;</span>
          <h2>Add Project</h2>
          <form>
            <label>Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            {/* Add Dropdown for Team */}
            <label>Team</label>
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            >
              {/* Add options for teams */}
            </select>

            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    )}
      </div>
      );
}

export default Dashboard;
