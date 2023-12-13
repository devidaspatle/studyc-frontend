
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import axios from "axios";
import React , { useState } from "react";
const [students, setStudent] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/students")
      .then((response) => setStudent(response.data));
  }, []);

function Student() {
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
                        <li className="list-inline-item"><a>Home </a></li>
                        <li className="list-inline-item"><span>/</span> <a href="javascript:void(0);"
                                className="breadcrum">Students</a></li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                    <a href="export_registers_file" className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export</a>
                    <a href="students/add" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                        Student </a>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email Id</th>
                <th>City</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {students.map((student) => (
            <tr>
                <td>1</td>
                <td>{student.fullname}</td>
                <td>{student.mobile}</td>
                <td>{student.emailid}</td>
                <td>{student.city}</td>
                <td>{student.address}</td>
                <td className="table-icon">
                    <a href="/view-student" className="me-3">
                        <i className="fa fa-eye"></i>
                    </a>
                    <a href="/edit-student" className="me-3">
                       <i className="fa fa-pencil-square-o"></i>
                    </a>
                    <a href="javascript:void(0);">
                        <i className="fa fa-trash"></i>
                    </a>
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

export default Student;