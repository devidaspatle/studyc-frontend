import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Payment() {
    const  [paymentList, setPaymentList] = useState([])
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        fetchPaymentList()
    }, [])
  
    const fetchPaymentList = () => {
        axios.get(apiBaseUrl + 'payments')
        .then(function (response) {
            setPaymentList(response.data);
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
                axios.delete(`apiBaseUrl + 'payments/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchPaymentList()
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
                    <h4>Manage Payment </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> <Link
                                className="breadcrum">Payment</Link></li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                <Link className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export</Link> &nbsp;

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Order Id </th>
                            <th>Transaction Amount</th>
                            <th>Transaction Id</th>
                            <th>Transaction Date</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {paymentList?.map((payment,key) => (
                     <tr key={key}>
                     <td>{key}</td>
                        <td>{payment.user_name}</td>
                        <td>{payment.order_id}</td>
                        <td>{payment.transaction_amount}</td>
                        <td>{payment.transaction_id}</td>
                        <td>{payment.transaction_date}</td>
                        <td>{payment.payment_status}</td>
                        <td className="table-icon">
                        <Link
                        to={`/showproduct/${payment._id}`}
                        className="me-3"> <i className="fa fa-eye"></i>
                        </Link>
                        <Link
                        to={`/editproduct/${payment._id}`}
                        className="me-3">  <i className="fa fa-pencil-square-o"></i>
                        </Link>
                        <button 
                            onClick={()=>handleDelete(payment._id)}
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

export default Payment;