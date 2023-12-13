import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Editshop() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [id, setId] = useState(useParams().id)
    const [shop_name, setShop_name] = useState('');
    const [fullname, setFullname] = useState('');
    const [mobile, setMobile] = useState('')
    const [emailid, setEmailid] = useState('');
    const [state, setState] = useState('')
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('')
    const [location_map, setLocation_map] = useState('')
    const [isSaving, setIsSaving] = useState(false)
      
    useEffect(() => {
        axios.get(apiBaseUrl + 'shops/${id}')
        .then(function (response) {
            let shop = response.data
            setId(shop.id);
            setShop_name(shop.shop_name);
            setFullname(shop.fullname);
            setMobile(shop.mobile);
            setEmailid(shop.emailid);
            setState(shop.state);
            setCity(shop.city);
            setAddress(shop.address);
            setLocation_map(shop.location_map);
        })
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
        })
          
    }, [id])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.patch(apiBaseUrl + 'shops/${id}', {
            shop_name: shop_name,
            fullname: fullname,
            mobile: mobile,
            emailid: emailid,
            state: state,
            city: city,
            address: address,
            location_map: location_map
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Student updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
        })
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
        });
    }
  
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
                    <h4>Edit Shop  </h4>
                </div>
            </div>
  <div className="user-profile-dash">
    <div className="product-form--1 mt-4">
                 <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                    <div className="col">
                        <div className="form-group">
                            <label>Shop Name</label>
                            <input 
                                    onChange={(event)=>{setFullname(event.target.value)}}
                                    value={fullname}
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
                                    onChange={(event)=>{setFullname(event.target.value)}}
                                    value={fullname}
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
                                    onChange={(event)=>{setMobile(event.target.value)}}
                                    value={mobile}
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
                                    onChange={(event)=>{setEmailid(event.target.value)}}
                                    value={emailid}
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
                            <select name="state" id="state"  className="form-control" onChange={(event)=>{setEmailid(event.target.value)}}
                                    value={emailid} required="required">
                                 <option value="">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>City</label>
                            <input 
                                    onChange={(event)=>{setCity(event.target.value)}}
                                    value={city}
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
                                    value={address}
                                    onChange={(event)=>{setAddress(event.target.value)}}
                                    className="form-control"
                                    id="address"
                                    rows="2"
                                    name="address"></textarea>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="form-group">
                            <label>Upload Photo</label>
                            <input type="file" name="file" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Location Map</label>
                            <textarea 
                                    value={location_map}
                                    onChange={(event)=>{setLocation_map(event.target.value)}}
                                    className="form-control"
                                    id="location_map"
                                    rows="3"
                                    name="location_map"></textarea>
                        </div>
                    </div>
                    <div className="col">
                        <button 
                            disabled={isSaving}
                            onClick={handleSave} 
                            type="button"
                            className="btn btn-dash--1 mt-4">
                            Update
                            </button>
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

export default Editshop;