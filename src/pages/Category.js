import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Category() {
    const [category_name, setCategory_name] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
  
    const handleSave = () => {
        setIsSaving(true);
        axios.post(apiBaseUrl + 'categorys', {
            category_name: category_name
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Advertise saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setCategory_name('')
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
    
   const  [categoryList, setCategoryList] = useState([])
  
   useEffect(() => {
       fetchCategoryList()
   }, [])
 
   const fetchCategoryList = () => {
       axios.get(apiBaseUrl + 'categorys')
       .then(function (response) {
        setCategoryList(response.data);
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
               axios.delete(apiBaseUrl + 'categorys/${id}')
               .then(function (response) {
                   Swal.fire({
                       icon: 'success',
                       title: 'Category deleted successfully!',
                       showConfirmButton: false,
                       timer: 1500
                   })
                   fetchCategoryList()
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
       <div className="product-form--1 mt-12">
                <div className="row cols-md-12 mt-8">
                    <div className="col">
                        <div className="form-group">
                         <label>Category Name</label>
                         <input 
                                    onChange={(event)=>{setCategory_name(event.target.value)}}
                                    value={category_name}
                                    type="text"
                                    className="form-control"
                                    id="category_name"
                                    name="category_name"
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
       <div className="d-flex align-items-center">
                    <div className="title-dash">
                        <h4>Manage Category </h4>
                        <ul>
                            <li className="list-inline-item"><Link>Home </Link></li>
                            <li className="list-inline-item"><span>/</span> <Link 
                                    className="breadcrum">Category</Link></li>
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
                    <th>Category Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {categoryList?.map((category,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{category.category_name}</td>
                <td className="table-icon">
                
                  <Link
                  to={`/category/${category._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(category.id)}
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
export default Category;