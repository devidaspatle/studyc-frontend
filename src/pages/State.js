import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function State() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [state_name, setState_name] = useState('');
    const [isSaving, setIsSaving] = useState(false)
  
    const handleSave = () => {
        setIsSaving(true);
        axios.post(apiBaseUrl + 'states', {
            state_name: state_name
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'State saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setState_name('')
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
    
   const  [stateList, setStateList] = useState([])
  
   useEffect(() => {
       fetchStateList()
   }, [])
 
   const fetchStateList = () => {
       axios.get(apiBaseUrl + 'states')
       .then(function (response) {
        setStateList(response.data);
       })
       .catch(function (error) {
         console.log(error);
       })
   }
 
   const handleDelete = (id) => {
       Swal.fire({
           title: 'Are you sure?',
           text: "You won't be able to revert this!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
         }).then((result) => {
           if (result.isConfirmed) {
               axios.delete(apiBaseUrl + 'states/${id}')
               .then(function (response) {
                   Swal.fire({
                       icon: 'success',
                       title: 'State deleted successfully!',
                       showConfirmButton: false,
                       timer: 1500
                   })
                   fetchStateList()
               })
               .catch(function (error) {
                   Swal.fire({
                        icon: 'error',
                       title: 'An Error Occured!',
                       showConfirmButton: false,
                       timer: 1500
                   })
               });
           }
         })
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
       <form>
       <div className="product-form--1 mt-12">
                <div className="row cols-md-12 mt-8">
                    <div className="col">
                        <div className="form-group">
                         <label>State Name</label>
                         <input 
                                    onChange={(event)=>{setState_name(event.target.value)}}
                                    value={state_name}
                                    type="text"
                                    className="form-control"
                                    id="state_name"
                                    name="state_name"
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
        </form>
       <div className="d-flex align-items-center">
                    <div className="title-dash">
                        <h4>Manage State </h4>
                        <ul>
                            <li className="list-inline-item"><Link>Home </Link></li>
                            <li className="list-inline-item"><span>/</span> State</li>
                        </ul>
                    </div>
    
                    <div className="button-table text-end ms-auto">
                    <Link to={`/state`} className="btn btn-dash--1">
                            <i className="fa fa-download me-2"></i>Export</Link> &nbsp;
                           
    
                    </div>
                </div>
        <div className="user-profile-dash">
            <table id="example" className="table table-striped table-dash">
            <thead>
                <tr>
                    <th>Sr. No.</th>

                    <th>State Name</th>
                    <th>Country Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {stateList?.map((state,key) => (
            <tr key={key}>
                
                <td>{state.srid}</td>
                <td>{state.state_name}</td>
                <td>India</td>
                <td className="table-icon">
                
                  <Link
                  to={`/state/${state._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(state.id)}
                      className="btn-outline-danger mx-1">
                  <i className="fa fa-trash"></i>
                 </button>
                   
                
                </td>
            </tr>
              ))}
                </tbody>
            </table>
        </div>
        </div>
            </div>
        </section>
    
      <Footer/>
    
      </Fragment>
        );
    }
export default State;