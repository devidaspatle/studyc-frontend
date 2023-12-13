import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { apiBaseUrl } from '../components/Configs.js'
import { Fragment } from 'react';
import React, {useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

function Addadvertise() {
    const apiBaseUrl = process.env.REACT_APP_BASE_URL;
    const [title, setTitle] = useState('');
    const [scriptcode, setScriptcode] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [images, setImages] = useState('');
    const [isSaving, setIsSaving] = useState(false);
  
    const handleSave = () => {
        setIsSaving(true);
        axios.post(apiBaseUrl + 'advertises', {
            title: title,
            scriptcode: scriptcode,
            startdate: startdate,
            enddate: enddate,
            images: images
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Advertise saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setTitle('')
            setScriptcode('')
            setStartdate('')
            setEnddate('')
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
                   <h4> Add advertise</h4>
                    
                </div>

              
            </div>
  <div className="user-profile-dash">
 <form>
          
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
                            <input type="file" name="image" onChange={(event)=>{setImages(event.target.value)}}
                                    value={images}/>
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

export default Addadvertise;