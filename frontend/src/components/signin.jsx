import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo2 from "../assets/images/Screenshot (243).png";
import logo from "../assets/images/google-icon-2048x2048-czn3g8x8.png";
import bus from "../assets/images/uri_ifs___M_152c3fc7-bbc8-4388-8938-2702edeb459e.jpg";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./signin.css";

const Signin = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

      

        try {
            const response = await axios.post("https://routewise-three.vercel.app/user/login", {
                email: formData.email,
                password: formData.password,
            });

            toast.success("Signin successful!", { position: "top-center" });
        } catch (error) {
            console.log("Error:", error);
            toast.error(error.response?.data?.message || "Signin failed!", {
                position: "top-center",
            });
        }
    };

    return (
        <>
            <ToastContainer /> {/* Toastify Container to display notifications */}
            <img className="logo2" src={logo2} alt="Logo" />
            <div className="outer">
                <div className="signupcontainer">
                    <h2 className="signup-header">Sign in</h2>
                    <p className="signup-subtext">Welcome back!</p>

                   

                    

                    <form className="signupform" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />

                        

                        <button className="signup-button" type="submit">
                            Sign in
                        </button>

                       
                    </form>
                </div>

                <div className="imageofroutewisecontainer">
                    <img className="imageofroutewise" src={bus} alt="Bus" />
                </div>
            </div>
        </>
    );
};

export default Signin;
