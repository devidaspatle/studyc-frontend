import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Editbook() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [id, setId] = useState(useParams().id);
    const [shop_name, setShop_name] = useState('');
    const [book_name, setBook_name] = useState('');
    const [category_name, setCategory_name] = useState('')
    const [author_name, setAuthor_name] = useState('');
    const [price, setPrice] = useState('')
    const [discount_price, setDiscount_price] = useState('');
    const [ibsn_number, setIbsn_number] = useState('')
    const [additional_year, setAdditional_year] = useState('')
    const [categoryList, setCategoryList] = useState([]);
    const [authorList, setAuthorList] = useState([]);
    const [shopList, setShopList] = useState([])
    const [isSaving, setIsSaving] = useState(false)
      
    useEffect(() => {
        axios.get(apiBaseUrl + 'books/${id}')
        .then(function (response) {
            let book = response.data
            setId(book.id);
            setShop_name(book.shop_name);
            setBook_name(book.book_name);
            setCategory_name(book.category_name);
            setAuthor_name(book.author_name);
            setPrice(book.price);
            setDiscount_price(book.discount_price);
            setIbsn_number(book.ibsn_number);
            setAdditional_year(book.additional_year);
        })
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
        })
          
    }, [id])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.patch(apiBaseUrl + 'books/${id}', {
            shop_name: shop_name,    
            book_name: book_name,
            category_name: category_name,
            author_name: author_name,
            price: price,
            discount_price: discount_price,
            ibsn_number: ibsn_number,
            additional_year: additional_year
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Book updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
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
    useEffect(() => {
        fetchCategoryList()
        fetchAuthorList()
        fetchShopList()
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
 
 const fetchShopList = () => {
     axios.get(apiBaseUrl + 'shops')
     .then(function (response) {
      setShopList(response.data);
     })
     .catch(function (error) {
       console.log(error);
     })
 }
 const fetchCategoryList = () => {
     axios.get(apiBaseUrl + 'categorys')
     .then(function (response) {
      setCategoryList(response.data);
     })
     .catch(function (error) {
       console.log(error);
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
                    <h4>Edit Book  </h4>
                    
                </div>

              
            </div>
  <div className="user-profile-dash">
  <form action="/manage-books" method="post" name="frm">
          
          <div className="product-form--1 mt-4">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                   <div className="col">
                      <div className="form-group">
                          <label>Shop Name</label>
                          <select name="shop_name" id="shop_name" className="form-control" required="required"   onChange={(event)=>{setShop_name(event.target.value)}} >
                                 <option value="">Select Author Name</option>
                                 {shopList?.map((shop,key) => (
                                <option value="{shop.shop_name}">{shop.shop_name}</option>
                                ))}
                            </select>
                      </div>
                  </div>
                 
                   <div className="col">
                      <div className="form-group">
                          <label>Category Name</label>
                          <select name="cateory_name" id="cateory_name" className="form-control" required="required"   onChange={(event)=>{setCategory_name(event.target.value)}} >
                                 <option value="">Select Category Name</option>
                                 {categoryList?.map((category,key) => (
                                <option value="{category.category_name}">{category.category_name}</option>
                                ))}
                            </select>
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>Author Name</label>
                          <select name="author_name" id="author_name" className="form-control" required="required"  onChange={(event)=>{setAuthor_name(event.target.value)}} >
                                 <option value="">Select Author Name</option>
                                 {authorList?.map((author,key) => (
                                <option value="{author.author_name}">{author.author_name}</option>
                                ))}
                            </select>
                      </div>
                  </div>
                   <div className="col">
                      <div className="form-group">
                          <label>Book Name</label>
                          <input 
                                    onChange={(event)=>{setBook_name(event.target.value)}}
                                    value={book_name}
                                    type="text"
                                    className="form-control"
                                    id="book_name"
                                    name="book_name"
                                    required="required"/>
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>ISBN Number</label>
                          <input 
                                    onChange={(event)=>{setIbsn_number(event.target.value)}}
                                    value={ibsn_number}
                                    type="text"
                                    className="form-control"
                                    id="ibsn_number"
                                    name="ibsn_number"
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
                      <div className="form-group">
                          <label>Discount Price</label>
                          <input 
                                    onChange={(event)=>{setDiscount_price(event.target.value)}}
                                    value={discount_price}
                                    type="text"
                                    className="form-control"
                                    id="discount_price"
                                    name="discount_price"
                                    required="required"/>
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>Addition Year</label>
                          <input 
                                    onChange={(event)=>{setAdditional_year(event.target.value)}}
                                    value={additional_year}
                                    type="text"
                                    className="form-control"
                                    id="additional_year"
                                    name="additional_year"
                                    required="required"/>
                      </div>
                  </div>
 
                  <div className="col">
                      <div className="form-group">
                          <label>Upload Image</label>
                          <input type="file" name="file"/>
                      </div>
                  </div> 
                  
                  <div className="col">
                  <button 
                            disabled={isSaving}
                            onClick={handleSave} 
                            type="button"
                            className="btn btn-dash--1 mt-4">
                            Update
                            </button>
                  </div>
              </div>
          </div>  
</form>
  </div>


</div>
    </div>
</section>

  <Footer/>

  </Fragment>
    );
}

export default Editbook;