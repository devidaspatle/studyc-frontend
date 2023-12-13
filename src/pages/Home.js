import { Fragment } from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <Fragment>
 
        
<section className="dashboard--1 ">
	<div classNameName="dash-login-page">
        <div className="dash-content-page">
            <div className="container">
                
                <div className="row g-5 row-cols-1 row-cols-lg-2 row-cols-md-2 justify-content-center align-items-center">
                    
                    <div className="col">
                        <div className="form">
                            <div className="logo">
                                <div className="logo-icon">
                                    {/* <img src="admin/images/logo.jpeg" alt="logo"/> */}
                                </div>
                            </div>
                            <form id="step1" className="login-form" action="/dashboard" method="post">
                                <div className="input-field">
                                    <input type="text" placeholder="Username" required=""/>
                                    <i className="fa fa-user-o field-icon"></i>
                                </div>
                                <div className="input-field">
                                    <input type="password" id="password" placeholder="Password" required=""/>
                                    <i className="fa fa-eye-slash field-icon" id="eye"></i>
                                </div>
                                <div className="bottom-dash-check d-flex justify-content-between flex-wrap">
                                    <div className="rememberme">
                                        <input type="checkbox"/>
                                        <label>Remember Me</label>
                                    </div>
                                    <Link TO="#" className="forget-dash">Forget password</Link>
                                </div>
                                <div className="login-btn">
                                    <button type="submit" className="btn btn-dash--1 mt-4 w-100 dash-button">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
	</div>
</section>
</Fragment>
  );
}

export default Home;