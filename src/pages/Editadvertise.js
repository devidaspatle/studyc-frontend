import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js';
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

function Editadvertise() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [id, setId] = useState(useParams().id);
    const [title, setTitle] = useState('');
    const [scriptcode, setScriptcode] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [images, setImages] = useState('');
    const [isSaving, setIsSaving] = useState(false)
      
    useEffect(() => {
        axios.get(apiBaseUrl + 'advertises/${id}')
        .then(function (response) {
            let advertise = response.data
            setId(advertise.id);
            setTitle(advertise.title);
            setScriptcode(advertise.scriptcode);
            setStartdate(advertise.startdate);
            setEnddate(advertise.enddate);
            setImages(advertise.images);
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
        axios.patch(`(apiBaseUrl + 'advertises/${id}`, {
            title: title,
            scriptcode: scriptcode,
            startdate: startdate,
            enddate: enddate,
            images: images
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Advertise updated successfully!',
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
                   <h4> Edit Advertise</h4>
                </div>
            </div>
  <div className="user-profile-dash">
 <form action="/manage-advertise" method="post" name="frm">
          
            <div className="product-form--1 mt-4">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 mt-8">
                   
                  
                     <div className="col-12">
                        <div className="form-group">
                            <label>Title</label>
                            <input 
                                    onChange={(event)=>{setTitle(event.target.value)}}
                                    value={title}
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Script Code</label>
                            <textarea 
                                    value={scriptcode}
                                    onChange={(event)=>{setScriptcode(event.target.value)}}
                                    className="form-control"
                                    id="scriptcode"
                                    rows="2"
                                    name="scriptcode"></textarea>
                           
                        </div>
                    </div>
                     <div className="col">
                        <div className="form-group">
                            <label>Start Date</label>
                            <input 
                                    onChange={(event)=>{setStartdate(event.target.value)}}
                                    value={startdate}
                                    type="date"
                                    className="form-control"
                                    id="startdate"
                                    name="startdate"
                                    required="required"/>
                        </div>
                    </div>
                     <div className="col">
                        <div className="form-group">
                            <label>End Date</label>
                            <input 
                                    onChange={(event)=>{setEnddate(event.target.value)}}
                                    value={enddate}
                                    type="date"
                                    className="form-control"
                                    id="enddate"
                                    name="enddate"
                                    required="required"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Upload Image</label>
                            <input type="file" name="file" onChange={(event)=>{setImages(event.target.value)}}
                                    value={images}/>
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

export default Editadvertise;