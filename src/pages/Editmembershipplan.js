import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import {  useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Editmembershipplan() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [id, setId] = useState(useParams().id)
    const [plan_type, setPlan_type] = useState('');
    const [description, setDescription] = useState('');  
    const [price, setPrice] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        axios.get(apiBaseUrl + 'membershipplans/${id}')
        .then(function (response) {
            let membershipplan = response.data
            setId(membershipplan.id);
            setPlan_type(membershipplan.plan_type);
            setDescription(membershipplan.description);
            setPrice(membershipplan.price);
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
        axios.patch(`http://localhost:4000/api/membershipplans/${id}`, {
            plan_type: plan_type,
            description: description,
            price: price,
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Membership Plan updated successfully!',
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
                   <h4> Edit Membership Plan</h4>
                    
                </div>

              
            </div>
  <div className="user-profile-dash">
 <form action="/manage-books" method="post" name="frm">
          
            <div className="product-form--1 mt-4">
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                     <div className="col">
                        <div className="form-group">
                            <label>Student Name</label>
                            <select name="plan_type" id="plan_type" onChange={(event)=>{setPlan_type(event.target.value)}}  className="form-control" required="required">
                                 <option value="">Select Plan Type</option>
                                <option value="Bronze">Bronze</option>
                                 <option value="Silver">Silver</option>
                                  <option value="Gold">Gold</option>
                            </select>
                        </div>
                    </div>
                   
                     
                    <div className="col">
                        <div className="form-group">
                            <label>Price</label>
                            <input 
                                    onChange={(event)=>{setPrice(event.target.value)}}
                                    value={price}
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    required="required"/>
                        </div>
                    </div>
                   <div className="col-md-12">
                        <div className="form-group">
                            <label>Description</label>
                            <textarea 
                                    value={description}
                                    onChange={(event)=>{setDescription(event.target.value)}}
                                    className="form-control"
                                    id="description"
                                    rows="2"
                                    name="description"></textarea>
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
 </form>
</div>
    </div>
    </div>
</section>

  <Footer/>

  </Fragment>
    );
}

export default Editmembershipplan;