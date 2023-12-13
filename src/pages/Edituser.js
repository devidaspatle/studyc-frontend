import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Edituser() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [id, setId] = useState(useParams().id)
    const [usertype, setUsertype] = useState('');
    const [fullname, setFullname] = useState('');
    const [mobile, setMobile] = useState('')
    const [emailid, setEmailid] = useState('');
    const [password, setPassword] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        axios.get(apiBaseUrl + 'users/${id}')
        .then(function (response) {
            let user = response.data
            setId(user.id);
            setUsertype(user.usertype);
            setFullname(user.fullname);
            setMobile(user.mobile);
            setEmailid(user.emailid);
            setPassword(user.password);
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
        axios.patch(apiBaseUrl + 'users/${id}', {
            usertype: usertype,
            fullname: fullname,
            mobile: mobile,
            emailid: emailid,
            password: password
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'User updated successfully!',
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
                    <h4>Add User  </h4>
                </div>
            </div>
  <div className="user-profile-dash">
    <div className="product-form--1 mt-4">
                 <div className="row row-cols-1 row-cols-lg-12 row-cols-md-12 mt-8">
                 <div className="col">
                        <div className="form-group">
                            <label>User Type</label>
                            <input 
                                    onChange={(event)=>{setUsertype(event.target.value)}}
                                    value={usertype}
                                    type="text"
                                    className="form-control"
                                    id="usertype"
                                    name="usertype"
                                    required="required"/>
                        </div>
                    </div> 
                    <div className="col">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                    onChange={(event)=>{setFullname(event.target.value)}}
                                    value={fullname}
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname"
                                    required="required"/>
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
                            <label>Password</label>
                            <input 
                                    onChange={(event)=>{setPassword(event.target.value)}}
                                    value={password}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                    type="password"
                                    className="form-control"
                                    id="cpassword"
                                    name="cpassword"
                                    required="required"/>
                        </div>
                    </div>
                   
                    <div className="col">
                    <button 
                                disabled={isSaving}
                                onClick={handleSave} 
                                type="button"
                                className="btn btn-dash--1 mt-4">
                                Submit
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

export default Edituser;