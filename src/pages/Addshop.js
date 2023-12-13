import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, {useState} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

function Addshop() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [shop_name, setShop_name] = useState('');
    const [fullname, setFullname] = useState('');
    const [mobile, setMobile] = useState('')
    const [emailid, setEmailid] = useState('');
    const [state, setState] = useState('')
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('')
    const [location_map, setLocation_map] = useState('')
    const [isSaving, setIsSaving] = useState(false)
  
    const handleSave = () => {
        setIsSaving(true);
        axios.post(apiBaseUrl + 'shops', {
            shop_name: shop_name,
            fullname: fullname,
            mobile: mobile,
            emailid: emailid,
            state: state,
            city: city,
            address: address,
            location_map: location_map
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Shop saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setShop_name('')
            setFullname('')
            setMobile('')
            setEmailid('')
            setState('')
            setCity('')
            setAddress('')
            setLocation_map('')
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
                    <h4>Add SHop  </h4>
                    
                </div>

              
            </div>
  <div className="user-profile-dash">
    <form>
    <div className="product-form--1 mt-4">
                 <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-8">
                    <div className="col">
                        <div className="form-group">
                            <label>Shop Name</label>
                            <input 
                                    onChange={(event)=>{setShop_name(event.target.value)}}
                                    value={shop_name}
                                    type="text"
                                    className="form-control"
                                    id="shop_name"
                                    name="shop_name"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Contact Persaon Name</label>
                             <input 
                                    onChange={(event)=>{setFullname(event.target.value)}}
                                    value={fullname}
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input 
                                    onChange={(event)=>{setMobile(event.target.value)}}
                                    value={mobile}
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Email Id</label>
                            <input 
                                    onChange={(event)=>{setEmailid(event.target.value)}}
                                    value={emailid}
                                    type="email"
                                    className="form-control"
                                    id="emailid"
                                    name="emailid"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>State</label>
                            <select className="form-control" name="state" id="state" onChange={(event)=>{setState(event.target.value)}}>
                            <option value="">-- Select state --</option>
                            <option value="Andaman">Andaman and Nicobar Islands</option>
                            <option value="Andhra">Andhra Pradesh</option>
                            <option value="Arunachal">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra">Dadra and Nagar Haveli</option>
                            <option value="Daman">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal">Himachal Pradesh</option>
                            <option value="Jammu">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kenmore">Kenmore</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Narora">Narora</option>
                            <option value="Natwar">Natwar</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Paschim">Paschim Medinipur</option>
                            <option value="Pondicherry">Pondicherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Vaishali">Vaishali</option>
                            <option value="West">West Bengal</option>
                        </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>City</label>
                              <input 
                                    onChange={(event)=>{setCity(event.target.value)}}
                                    value={city}
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Address</label>
                             <textarea 
                                    value={address}
                                    onChange={(event)=>{setAddress(event.target.value)}}
                                    className="form-control"
                                    id="address"
                                    rows="2"
                                    name="address"></textarea>
                        </div>
                    </div>
                   
                    <div className="col">
                        <div className="form-group">
                            <label>Upload Photo</label>
                            <input type="file" name="file" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Location Map</label>
                            <textarea 
                                    value={location_map}
                                    onChange={(event)=>{setLocation_map(event.target.value)}}
                                    className="form-control"
                                    id="location_map"
                                    rows="3"
                                    name="location_map"></textarea>
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
  </div>


</div>
    </div>
</section>

  <Footer/>

  </Fragment>
    );
}

export default Addshop;