import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import { Link} from "react-router-dom";
//import { apiBaseUrl } from '../components/Configs.js';

function Dashboard() {
    return (
    <Fragment>
     <Navbar/>
    <section className="dashboard--1 ">
      <div className="d-flex">
        
      <div className="sidebar">
      <Sidebar/>
    
      </div>


        <div className="side-bar content">
      <div className="title-dash">
          <h4>Dashboard  </h4>
          <ul>
                <li className="list-inline-item"><Link>Home </Link></li>
                <li className="list-inline-item"><span>/</span> <Link  className="breadcrum">Dashboard</Link></li>
            </ul>
      </div>
      <div className="row  row-cols-1 row-cols-lg-4 row-cols-md-2 justify-content-start align-items-center">
        
          <div className="col">
            <div className="dash-card--1 d-flex">
            
              <div className="dash-card-img">
                  <i className="fa fa-line-chart"></i>
              </div>
              <div className="dash-content ms-4">
                <h5>4</h5>
                <h6>Total Students </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="dash-card--1 d-flex">
            
              <div className="dash-card-img">
                  <i className="fa fa-line-chart"></i>
              </div>
              <div className="dash-content ms-4">
                <h5>44</h5>
                <h6>Total Shops </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="dash-card--1 d-flex">
            
              <div className="dash-card-img">
                  <i className="fa fa-line-chart"></i>
              </div>
              <div className="dash-content ms-4">
                <h5>144</h5>
                <h6>Total Book </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="dash-card--1 d-flex">
            
              <div className="dash-card-img">
                  <i className="fa fa-line-chart"></i>
              </div>
              <div className="dash-content ms-4">
                <h5>104</h5>
                <h6>Total Payment </h6>
              </div>
            </div>
          </div>
      </div>
      <hr/>
    
    </div>
      </div>
    </section>

  <Footer/>

  </Fragment>
    );
}

export default Dashboard;