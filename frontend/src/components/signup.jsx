import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo2 from "../assets/images/Screenshot (243).png";
import logo from "../assets/images/google-icon-2048x2048-czn3g8x8.png";
import bus from "../assets/images/uri_ifs___M_152c3fc7-bbc8-4388-8938-2702edeb459e.jpg";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./signup.css";

const Signup = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repeatpassword: "",
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

        if (formData.password !== formData.repeatpassword) {
            toast.error("Passwords do not match!", { position: "top-center" });
            return;
        }

        try {
            const response = await axios.post("https://routewise-three.vercel.app/user/register", {
                email: formData.email,
                password: formData.password,
            });

            toast.success("Signup successful!", { position: "top-center" });
        } catch (error) {
            console.log("Error:", error);
            toast.error(error.response?.data?.message || "Signup failed!", {
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
                    <h2 className="signup-header">Sign up now</h2>
                    <p className="signup-subtext">Create a free account</p>

                    <button className="signup-google">
                        <div className="google-button-content">
                            <img src={logo} alt="Google" className="google-logo" />
                            <div>Sign up with Google</div>
                        </div>
                    </button>

                    <p className="or-text">or</p>

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

                        <label htmlFor="repeatpassword">Repeat password</label>
                        <input
                            type="password"
                            name="repeatpassword"
                            id="repeatpassword"
                            placeholder="Repeat password"
                            required
                            value={formData.repeatpassword}
                            onChange={handleChange}
                        />

                        <button className="signup-button" type="submit">
                            Sign up
                        </button>

                        <p className="signin-link">
                            Already have an account? <a href="/login">Sign in</a>
                        </p>
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
