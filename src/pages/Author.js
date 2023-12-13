import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Author() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [author_name, setAuthor_name] = useState('');
    const [isSaving, setIsSaving] = useState(false)
  
    const handleSave = () => {
        setIsSaving(true);
        axios.post(apiBaseUrl + 'authors', {
            author_name: author_name
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Author saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setAuthor_name('')
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
    
   const  [authorList, setAuthorList] = useState([])
  
   useEffect(() => {
       fetchAuthorList()
   }, [])
 
   const fetchAuthorList = () => {
       axios.get(apiBaseUrl + 'authors')
       .then(function (response) {
        setAuthorList(response.data);
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
               axios.delete(apiBaseUrl + 'authors/${id}')
               .then(function (response) {
                   Swal.fire({
                       icon: 'success',
                       title: 'Author deleted successfully!',
                       showConfirmButton: false,
                       timer: 1500
                   })
                   fetchAuthorList()
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
                         <label>Author Name</label>
                         <input 
                                    onChange={(event)=>{setAuthor_name(event.target.value)}}
                                    value={author_name}
                                    type="text"
                                    className="form-control"
                                    id="author_name"
                                    name="author_name"
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
                        <h4>Manage Author </h4>
                        <ul>
                            <li className="list-inline-item"><Link>Home </Link></li>
                            <li className="list-inline-item"><span>/</span> Author</li>
                        </ul>
                    </div>
    
                    <div className="button-table text-end ms-auto">
                    <Link to={`/author`} className="btn btn-dash--1">
                            <i className="fa fa-download me-2"></i>Export</Link>
                           
    
                    </div>
                </div>
        <div className="user-profile-dash">
            <table id="example" className="table table-striped table-dash">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Author Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {authorList?.map((author,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{author.author_name}</td>
                <td className="table-icon">
                
                  <Link
                  to={`/author/${author._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(author.id)}
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
export default Author;