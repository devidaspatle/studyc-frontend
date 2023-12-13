import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js'
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";
function Advertise() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const  [advertiseList, setAdvertiseList] = useState([])
  
    useEffect(() => {
        fetchAdvertiseList()
    }, [])
  
    const fetchAdvertiseList = () => {
        axios.get(apiBaseUrl + 'advertises')
        .then(function (response) {
            setAdvertiseList(response.data);
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
                axios.delete(apiBaseUrl + 'advertises/${id}')
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Advertise deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchAdvertiseList()
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
   <div className="d-flex align-items-center">
                <div className="title-dash">
                    <h4>Manage Advertise </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> <Link TO="#"
                                className="breadcrum">Advertise</Link></li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                    <a href="export_registers_file" className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export</a> &nbsp;
                    <a href="/addadvertise" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                        Advertise </a>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
        <thead>
            <tr>
                 <th>Sr. No.</th>
                <th>Title</th>
                <th>Script Code</th>
                <th>Start Date</th>
                <th>End Date </th>
               <th>Images</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {advertiseList?.map((advertise,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{advertise.title}</td>
                <td>{advertise.scriptcode}</td>
                <td>{advertise.startdate}</td>
                <td>{advertise.enddate}</td>
                <td>  <img src="images/burger.jpeg" alt="logo" width="20%" /></td>
                <td className="table-icon">
                
                  <Link
                  to={`/editstudent/${advertise._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(advertise.id)}
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

export default Advertise;