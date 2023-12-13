import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
//import { apiBaseUrl } from '../components/Configs.js';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Membershipplan() {
    
   const  [membershipplanList, setMembershipplanList] = useState([])
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;

   useEffect(() => {
       fetchMembershipplanList()
   }, [])
 
   const fetchMembershipplanList = () => {
       axios.get(apiBaseUrl + 'membershipplans')
       .then(function (response) {
        setMembershipplanList(response.data);
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
               axios.delete(apiBaseUrl + 'membershipplans/${id}')
               .then(function (response) {
                   Swal.fire({
                       icon: 'success',
                       title: 'Membershipplan deleted successfully!',
                       showConfirmButton: false,
                       timer: 1500
                   })
                   fetchMembershipplanList()
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
   //studentList
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
                        <h4>Manage Membership Plan </h4>
                        <ul>
                            <li className="list-inline-item"><Link>Home </Link></li>
                            <li className="list-inline-item"><span>/</span> <Link
                                    className="breadcrum">Membership Plan</Link></li>
                        </ul>
                    </div>
    
                    <div className="button-table text-end ms-auto">
                    <Link to={`/`} className="btn btn-dash--1">
                            <i className="fa fa-download me-2"></i>Export</Link> &nbsp;
                        <a href="/addmembershipplan" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                        Membership Plan </a>
    
                    </div>
                </div>
        <div className="user-profile-dash">
            <table id="example" className="table table-striped table-dash">
            <thead>
            <tr>
                 <th>Sr. No.</th>
                <th>Plan Type</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {membershipplanList?.map((membershipplan,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{membershipplan.plan_type}</td>
                <td>{membershipplan.price}</td>
                <td>{membershipplan.description}</td>
                <td className="table-icon">
                  <Link
                  to={`/category/${membershipplan._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(membershipplan.id)}
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
export default Membershipplan;