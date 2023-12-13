import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import { Link  } from "react-router-dom";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
      const  [productList, setProductList] = useState([]);
      const apiBaseUrl = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
        fetchProductList()
    }, [])
  
    const fetchProductList = () => {
        axios.get(apiBaseUrl + 'products')
        .then(function (response) {
          setProductList(response.data);
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
                axios.delete(apiBaseUrl + 'products/${id}')
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchProductList()
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
                    <h4>Manage Product </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> <Link
                                className="breadcrum">Products</Link></li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                    <Link TO="/export_registers_file" className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export</Link> &nbsp;
                    <Link to="/addproduct" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                        Product </Link>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
        <thead>
            <tr>
                 <th>Sr. No.</th>
                <th>Shop Name</th>
                <th>Category</th>
                <th>Author/Publication Name</th>
                <th>Product Name</th>
                <th>Price </th>
                <th>Discount </th>
                <th>Image</th>
                <th>Action</th>
            </tr>
           </thead>
        <tbody>
        {productList?.map((product,key) => (
             <tr key={key}>
             <td>{key}</td>
                <td>{product.shop_name}</td>
                <td>{product.category}</td>
                <td>{product.author}</td>
                <td>{product.product_name}</td>
                <td>{product.price}</td>
                <td>{product.discont}</td>
                <td>{product.image}</td>
                <td className="table-icon">
                 <Link
                  to={`/showproduct/${product._id}`}
                   className="me-3"> <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                  to={`/editproduct/${product._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(product._id)}
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

export default Product;