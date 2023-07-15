import React from "react";
import "./Projects.css";
import Navbar from '../../components/navBar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
function Dashboard() {
  return (
    <div className="cd">
      <Navbar />
      <Sidebar />
    <div className="cprojects">
      
      <div className="row1">
        <div className="col1">
          <h1>Projects Summary</h1>
         
        </div>
        
      </div>
      <div className="row2">
        <div className="r2col1">hey thee</div>
        <div className="r2col2">hey there</div>
        <div className="r2col3">hey thsre</div>
        <div className="r2col1">hey thee</div>
        <div className="r2col2">hey there</div>
        <div className="r2col3">hey thsre</div>
        <div className="r2col1">hey thee</div>
        <div className="r2col2">hey there</div>
        <div className="r2col3">hey thsre</div>
        <div className="r2col1">hey thee</div>
        <div className="r2col2">hey there</div>
        <div className="r2col3">hey thsre</div>
        <div className="r2col1">hey thee</div>
        <div className="r2col2">hey there</div>
        <div className="r2col3">hey thsre</div>
        <div className="r2col1">hey thee</div>
        <div className="r2col2">hey there</div>
        <div className="r2col3">hey thsre</div>
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
    </div>
    </div>
  );
}

export default Dashboard;
