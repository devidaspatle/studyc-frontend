import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
//import { apiBaseUrl } from '../components/Configs.js';
//import Swal from 'sweetalert2';
import axios from 'axios';

function Showstudent() {
    const [id] = useState(useParams().id);
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [student, setStudent] = useState({fullname:'', mobile:'',
            emailid:'',state:'',city:'',address:'',location_map:''})
      
    useEffect(() => {
        axios.get(apiBaseUrl + 'students/${id}')
        .then(function (response) {
          setStudent(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  
    return (
    <Fragment>
     <Navbar/>
    <section className="dashboard--1">
      <div className="d-flex">
        
      <div className="sidebar">
      <Sidebar/>
    
      </div>
  

      <div className="side-bar content">
   <div className="d-flex align-items-center">
                <div className="title-dash">
                    <h4>View Student  </h4>
                    
                </div>

              
            </div>
  <div className="user-profile-dash">
    <div className="product-form--1 mt-4">
                 <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                    <div className="col">
                        <div className="form-group">
                            <label>Full Name</label>
                             <input 
                                    value={student.fullname}
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname" disabled/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input 
                                    value={student.mobile}
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    disabled/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Email Id</label>
                             <input 
                                    
                                    value={student.emailid}
                                    type="email"
                                    className="form-control"
                                    id="emailid"
                                    name="emailid"
                                    disabled/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>State</label>
                            <select name="state" id="state"  className="form-control" 
                                    value={student.state} disabled>
                                 <option value="">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>City</label>
                            <input 
                                    value={student.city}
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    disabled/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Address</label>
                            <textarea 
                                    value={student.address}
                                   
                                    className="form-control"
                                    id="address"
                                    rows="2"
                                    name="address" disabled></textarea>
                        </div>
                    </div>
                  
                    

                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Location Map</label>
                           <textarea 
                                    value={student.location_map}
                                   
                                    className="form-control"
                                    id="location_map"
                                    rows="3"
                                    name="location_map" disabled></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label> Photo</label>
                            <img src="admin/images/blank-img.jpg" className="user-img" width="50" />
                        </div>
                    </div>
                    <div className="col">
                     
                    </div>
                </div>
            </div>  
  </div>


</div>
    </div>
</section>

  <Footer/>

  </Fragment>
    );
}

export default Showstudent;