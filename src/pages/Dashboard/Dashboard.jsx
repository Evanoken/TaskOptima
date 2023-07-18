import React from "react";
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
        <div className="row3">
          <div className="r3col1">
            <h2>Timeline of the Year</h2>
          </div>
          <div className="r3col2">
            <button>
              <select name="" id="">
                <option value="january">january ...</option>
                <option value="feb">February ...</option>
                <option value="march">March ...</option>
              </select>
            </button>
          </div>
        </div>
        <div className="row4">
        <div className="chart">
          <h5 style={{textAlign: "center"}}>Line Chart</h5>
          <Line data={lineChartData} options={{}} className="chart1" style={{height: 300, padding: 20}} />
        </div>
        <div className="chart">
          <h5 style={{textAlign: "center"}}>Bar Chart</h5>
          <Bar data={barChartData} options={{}} className="chart1" style={{height: 300, padding: 20}}/>
        </div>
      </div>
        </div>
      </div>
      );
}

export default Dashboard;
