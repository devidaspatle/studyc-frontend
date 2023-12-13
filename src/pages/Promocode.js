import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';

function Promocode() {
    const [promocode, setPromocode] = useState('');
    const [price, setPrice] = useState('');
    const [isSaving, setIsSaving] = useState(false)
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
  
    const handleSave = () => {
        setIsSaving(true);
        axios.post(apiBaseUrl + 'promocodes', {
            promocode: promocode,
            price: price
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Promocode saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
                setPromocode('')
                setPrice('')
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
    
   const  [promocodeList, setPromocodeList] = useState([])
  
   useEffect(() => {
       fetchPromocodeList()
   }, [])
 
   const fetchPromocodeList = () => {
       axios.get(apiBaseUrl + 'promocodes')
       .then(function (response) {
        setPromocodeList(response.data);
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
               axios.delete(apiBaseUrl + 'promocodes/${id}')
               .then(function (response) {
                   Swal.fire({
                       icon: 'success',
                       title: 'Promocodes deleted successfully!',
                       showConfirmButton: false,
                       timer: 1500
                   })
                   fetchPromocodeList()
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
                         <label>Promo  Code</label>
                         <input 
                                    onChange={(event)=>{setPromocode(event.target.value)}}
                                    value={promocode}
                                    type="text"
                                    className="form-control"
                                    id="promocode"
                                    name="promocode"
                                    required="required"/>
                        </div>
                    </div>
                        <div className="col">
                        <div className="form-group">
                            <label>Price</label>
                            <input 
                                    onChange={(event)=>{setPrice(event.target.value)}}
                                    value={price}
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    name="price"
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
                        <h4>Manage Promocode </h4>
                        <ul>
                            <li className="list-inline-item"><Link>Home </Link></li>
                            <li className="list-inline-item"><span>/</span> <Link 
                                    className="breadcrum">Promocode</Link></li>
                        </ul>
                    </div>
    
                    
                </div>
        <div className="user-profile-dash">
            <table id="example" className="table table-striped table-dash">
            <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Promo Code </th>
                 <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {promocodeList?.map((promocodes,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{promocodes.promocode}</td>
                <td>{promocodes.price}</td>
                <td className="table-icon">
                
                  <Link
                  to={`/promocode/${promocodes._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(promocodes._id)}
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
export default Promocode;