import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Book() {
    const  [bookList, setBookList] = useState([])
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        fetchBookList()
    }, [])
  
    const fetchBookList = () => {
        axios.get(apiBaseUrl + 'books')
        .then(function (response) {
            setBookList(response.data);
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
                axios.delete(apiBaseUrl + 'books/${id}')
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Book deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchBookList()
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
                    <h4>Manage Book </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> <Link
                                className="breadcrum">Book</Link></li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                    <Link className="btn btn-dash--1">
                        <i className="fa fa-download me-2"></i>Export</Link> &nbsp;

                    <Link to="/addbook" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                    Book </Link>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
        <thead>
        <tr>
                <th>Sr. No.</th>
                <th>Book Name</th>
                <th>Category</th>
                <th>Author Name</th>
                <th>Price </th>
                <th>Discount </th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {bookList?.map((book,key) => (
            <tr key={key}>
                 <td>{key}</td>
                <td>{book.book_name}</td>
                <td>{book.category_name}</td>
                <td>{book.author_name}</td>
                <td>{book.price}</td>
                <td>{book.discount_price}</td>
                <td>{book.image}</td>
            
                <td className="table-icon">
                    <Link
                  to={`/showbook/${book._id}`}
                   className="me-3"> <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                  to={`/editbook/${book._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(book._id)}
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

export default Book;