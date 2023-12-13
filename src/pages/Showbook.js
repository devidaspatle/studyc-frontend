import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import React, {useState , useEffect} from 'react';
//import { apiBaseUrl } from '../components/Configs.js';
import { useParams } from "react-router-dom";
//import Swal from 'sweetalert2';
import axios from 'axios';

function Showbook() {
    const [id] = useState(useParams().id);
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [book, setBook] = useState({shop_name:'', book_name:'',
            category_name:'',author_name:'',price:'',discount_price:'',ibsn_number:'', additional_year:''})
      
    useEffect(() => {
        axios.get(apiBaseUrl + 'books/${id}')
        .then(function (response) {
            setBook(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  
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
                    <h4>Show Book  </h4>
                    
                </div>

              
            </div>
  <div className="user-profile-dash">
 

          <div className="product-form--1 mt-4">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                   <div className="col">
                      <div className="form-group">
                          <label>Student Name</label>
                          <input 
                                    value={book.book_name}
                                    type="text"
                                    className="form-control"
                                    id="book_name"
                                    name="book_name"
                                   />
                      </div>
                  </div>
                 
                   <div className="col">
                      <div className="form-group">
                          <label>Category Name</label>
                          <input 
                                    value={book.book_name}
                                    type="text"
                                    className="form-control"
                                    id="book_name"
                                    name="book_name"
                                   />
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>Author Name</label>
                          <input 
                                    value={book.book_name}
                                    type="text"
                                    className="form-control"
                                    id="book_name"
                                    name="book_name"
                                   />
                      </div>
                  </div>
                   <div className="col">
                      <div className="form-group">
                          <label>Book Name</label>
                            <input 
                                    value={book.book_name}
                                    type="text"
                                    className="form-control"
                                    id="book_name"
                                    name="book_name"
                                   />

                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>ISBN Number</label>
                          <input 
                                    value={book.book_name}
                                    type="text"
                                    className="form-control"
                                    id="book_name"
                                    name="book_name"
                                   />
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>Price</label>
                            <input 
                                  
                                    value={book.price}
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
                                   
                                    value={book.discount_price}
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
                                   
                                    value={book.additional_year}
                                    type="text"
                                    className="form-control"
                                    id="additional_year"
                                    name="additional_year"
                                    required="required"/>
                          
                      </div>
                  </div>
 
                  <div className="col">
                      <div className="form-group">
                          <label> Image</label>
                       
                      </div>
                  </div> 
                  
               
              </div>
          </div>  

  </div>


</div>
    </div>
</section>

  <Footer/>

  </Fragment>
    );
}

export default Showbook;