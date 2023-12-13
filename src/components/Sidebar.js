import React  from 'react';
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <nav className="sidebar-vertical py-2 mb-4" id="header-main">
        
        <ul className="nav flex-column navbar-sidebar" id="nav-accordion">
            <li className="nav-item ">
                <Link className="nav-link btn-ac active" title="Dashboard" to="/dashboard">
                    <i className="fa fa-tachometer left-nav"></i> 
                    <div className="nav-text">Dashboard </div>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/student" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage Students</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/book" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage  Books</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/product" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage Product</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/payment" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage  Payments</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/shop" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage  Shop</div>    </Link>
            </li>
           
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/category" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage  Cateory</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/author" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage  Author</div>    </Link>
            </li>
          
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/membershipplan" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text"> Membership Plan</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/promocode" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Manage  Promo Code</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/advertise" title="Manage Advertise">
                    <i className="bx bx-diamond left-nav"></i>
                    <div className="nav-text">Manage Advertise</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/state" title="Manage State">
                    <i className="bx bx-diamond left-nav"></i>
                    <div className="nav-text">Manage State</div>    </Link>
            </li>
           
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/user" title="User Profile">
                    <i className="bx bx-user-circle left-nav"></i>
                    <div className="nav-text">Manage User </div>   </Link>
            </li>
            

            
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/history" title="Table">
                    <i className="bx bx-category left-nav"></i>
                    <div className="nav-text">Product History </div>    </Link>
            </li>
           
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/payment" title="Products Add">
                    <i className="bx bx-diamond left-nav"></i>
                    <div className="nav-text">Manage Payment</div>    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn-ac" to="/logout" title="Logout">
                    <i className="bx bx-user-circle left-nav"></i>
                    <div className="nav-text">Logout </div>   </Link>
            </li>
         
        </ul>
    </nav>

    );
}

export default Sidebar;
