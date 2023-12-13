import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Fragment } from 'react';

function Add() {
    return (
      <Fragment>
      <Navbar/>
      <section class="dashboard--1 ">
      <div class="d-flex">
        
    <div class="sidebar">
    <Sidebar/>
     
    </div>
    <div class="side-bar content">
       <div class="d-flex align-items-center">
                    <div class="title-dash">
                        <h4>Add Student  </h4>
                        
                    </div>
                </div>
      <div class="user-profile-dash">
        <div class="product-form--1 mt-4">
                     <div class="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                        <div class="col">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" name="fullname" id="fullname" required="required"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Mobile Number</label>
                                <input type="text" name="mobile" id="mobile" required="required"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Email Id</label>
                                <input type="text" name="emailid" id="emailid" required="required"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>State</label>
                                <select name="state" id="state" class="form-control" required="required">
                                     <option value="">Select State</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" name="city" id="city" required="required"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" name="address" id="address" required="required"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Pincode</label>
                                <input type="text" name="pincode" id="pincode" required="required"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Upload Photo</label>
                               
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Location Map</label>
                                <textarea class="form-control" name="location_map" id="location_map" required="required"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <button name="Submit" class="btn btn-dash--1 mt-4">Submit</button>
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

export default Add;