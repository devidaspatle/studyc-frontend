import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
//import { apiBaseUrl } from '../components/Configs.js';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
    const  [shopList, setShopList] = useState([]);
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    
    useEffect(() => {
        fetchShopList()
    }, [])
  
    const fetchShopList = () => {
        axios.get(apiBaseUrl + 'shops')
        .then(function (response) {
          setShopList(response.data);
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
                axios.delete(apiBaseUrl + 'Shop/${id}')
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Shop deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchShopList()
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
                    <h4>Manage Shop </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> <Link>Shop</Link></li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                    <a href="export_registers_file" className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export</a> &nbsp;
                    <a href="/addshop" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                    Shop </a>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
    <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Shop Name</th>
                <th>Contact Person</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>City</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {shopList?.map((shop,key) => (
             <tr key={key}>
                <td>{key}</td>
                <td>{shop.shop_name}</td>
                <td>{shop.fullname}</td>
                <td>{shop.mobile}</td>
                <td>{shop.emaiid}</td>
                <td>{shop.city}</td>
                <td>{shop.address}</td>
                <td className="table-icon">
                    <Link
                  to={`/showshop/${shop._id}`}
                   className="me-3"> <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                  to={`/editshop/${shop._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(shop._id)}
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

export default Shop;