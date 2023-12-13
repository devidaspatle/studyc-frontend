import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
//import { apiBaseUrl } from '../components/Configs.js';
//import Swal from 'sweetalert2';
import axios from 'axios';

function Showshop() {
    
    const [id] = useState(useParams().id);
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [shop, setShop] = useState({shop_name:'', fullname:'',
            mobile:'',emailid:'',state:'',city:'',address:'',location_map:''})
      
    useEffect(() => {
        axios.get(apiBaseUrl + 'shops/${id}')
        .then(function (response) {
            setShop(response.data)
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
                    <h4>View Shop  </h4>
                </div>
            </div>
  <div className="user-profile-dash">
    <div className="product-form--1 mt-4">
                 <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                    <div className="col">
                        <div className="form-group">
                            <label>Shop Name</label>
                            <input 
                                    value={shop.fullname}
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Contact Persaon Name</label>
                           <input 
                                  
                                    value={shop.buttonfullname}
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Mobile Number</label>
                              <input 
                                    value={shop.mobile}
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Email Id</label>
                             <input 
                                    value={shop.emailid}
                                    type="email"
                                    className="form-control"
                                    id="emailid"
                                    name="emailid"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>State</label>
                            <input  value={shop.state}
                                    type="text"
                                    className="form-control"
                                    />
                         
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>City</label>
                            <input 
                                    value={shop.city}
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Address</label>
                            
                            <textarea 
                                    value={shop.address}
                                   
                                    className="form-control"
                                    id="address"
                                    rows="2"
                                    name="address"></textarea>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="form-group">
                            <label> Photo</label>
                          
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Location Map</label>
                            <textarea 
                                    value={shop.location_map}
                                   
                                    className="form-control"
                                    id="location_map"
                                    rows="3"
                                    name="location_map"></textarea>
                        </div>
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

export default Showshop;