import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';

function User() {
   
  const  [userList, setUserList] = useState([])
  const apiBaseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
      fetchUserList()
  }, [])

  const fetchUserList = () => {
      axios.get(apiBaseUrl + 'users')
      .then(function (response) {
        setUserList(response.data);
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
              axios.delete(apiBaseUrl + 'users/${id}')
              .then(function (response) {
                  Swal.fire({
                      icon: 'success',
                      title: 'User deleted successfully!',
                      showConfirmButton: false,
                      timer: 1500
                  })
                  fetchUserList()
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
    <section className="dashboard--1 ">
      <div className="d-flex">
        
      <div className="sidebar">
      <Sidebar/>
    
      </div>
      <div className="side-bar content">
    <div className="d-flex align-items-center">
                <div className="title-dash">
                    <h4>Manage Students </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> 
                             User</li>
                    </ul>
                </div>
                
                <div className="button-table text-end ms-auto">
                <Link
                  to={`/export}`} className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export </Link> &nbsp;
                 <Link
                  to={`/adduser`}  className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                        User  </Link>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
    <thead>
            <tr>
                <th>Sr. No.</th>
                <th>User Type</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email Id</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {userList?.map((user,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{user.usertype}</td>
                <td>{user.fullname}</td>
                <td>{user.mobile}</td>
                <td>{user.emailid}</td>
                <td className="table-icon">
                  <Link
                  to={`/edituser/${user._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(user.id)}
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

export default User;