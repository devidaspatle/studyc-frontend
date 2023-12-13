import React  from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (
    <header>
       
        <div className="sidebar">
           <div className="topbar d-flex align-items-center">
                <div className="sidebar-header">
                    <div className="logo">
                        <Link href="#">
                            <img src="admin/images/logo.jpeg" width="50"  className="logo-icon" alt="Logo"/>
                        </Link>
                    </div>
                </div>
                <nav className="navbar navbar-expand gap-3">
                    <Link to="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars"></i>
                    </Link>
             
                  
                 
                    <div className="user-box dropdown px-3 text-end ms-auto">
                        <Link className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="admin/images/blank-img.jpg" className="user-img" width="50" alt="user"/>
                            <div className="user-info">
                                <p className="user-name mb-0">Devidas Patle</p>
                                <p className="designattion mb-0">Web Developer</p>
                            </div>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end w-100">
                            <li><Link className="dropdown-item d-flex align-items-center" to="student_profile"><i className="bx bx-user fs-5 me-2"></i><span>Profile</span></Link>
                            </li>
                           
                            <li><Link className="dropdown-item d-flex align-items-center" to="/dashboard"><i className="bx bx-home-circle fs-5 me-2"></i><span>Dashboard</span></Link>
                            </li>
                         
                            <li>
                                <div className="dropdown-divider mb-0"></div>
                            </li>
                            <li><Link className="dropdown-item d-flex align-items-center" to="/logout"><i className="bx bx-log-out-circle me-2"></i><span>Logout</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> 
        </div>
    </header>
        );
    }
    
export default Navbar;