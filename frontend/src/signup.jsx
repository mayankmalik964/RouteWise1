import React from "react";
import logo2 from './assets/images/Screenshot (243).png';
import logo from './assets/images/google-icon-2048x2048-czn3g8x8.png';
import bus from "./assets/images/uri_ifs___M_152c3fc7-bbc8-4388-8938-2702edeb459e.jpg";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./signup.css";

const Signup = () => {
    return (
        <>
            <img className="logo2" src={logo2} alt="Logo" />
            <div className="outer"> 
                <div className="signupcontainer">
                    <h2 className="signup-header">Sign up now</h2>
                    <p className="signup-subtext">Create a free account</p>

                    <button className="signup-google">
                        <div className="google-button-content">
                            <img src={logo} alt="Google" className="google-logo" />
                            <div>Sign up with Google</div>
                        </div>
                    </button>

                    <p className="or-text">or</p>

                    <form className="signupform">
                        <label htmlFor="email">Email address</label>
                        <input type="text" name="email" id="email" placeholder="Email Address" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required />

                        <label htmlFor="repeatpassword">Repeat password</label>
                        <input type="password" name="repeatpassword" id="repeatpassword" placeholder="Repeat password" />

                        <button className="signup-button">Sign up</button>
                        
                        <p className="signin-link">Already have an account? <a href="/login">Sign in</a></p>
                    </form>
                </div>

                <div className="imageofroutewisecontainer">
                    <img className="imageofroutewise" src={bus} alt="Bus" />
                </div>
            </div>
        </>
    );
};

export default Signup;
