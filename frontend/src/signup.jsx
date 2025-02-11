import React from "react";
import logo from './assets/images/google-icon-2048x2048-czn3g8x8.png';
import bus from "./assets/images/stock-photo-a-big-white-tour-bus-isolated.jpg";

import '@fortawesome/fontawesome-free/css/all.min.css';

import "./signup.css";
const Signup = () => {
   return(<> <h4 className="logo">RouteWise</h4>
   <div className="outer"> 
   <div className="signupcontainer">
   
    <h2 style={{marginLeft:"10px",fontSize:"20px"}}>Sign up now</h2>
   
    <p style={{color:"grey",fontSize:'12px',marginLeft:"10px"}} >create a free account</p>
    <button className="Signupwg"  
        style={{
            borderRadius: "2px",
            backgroundColor: "white",
            borderColor: "lightgrey", 
            fontSize: "10px", 
            marginTop: "10px",
            width: "199.6px",
            height: "25px",
            padding: "0px"
        }}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
            <img src={logo} alt="google" style={{width:"15px",height:"15px",marginRight:"5px"}} />
            <div style={{margin:"0px"}}> Sign up with Google</div>
        </div>
    </button>

    <p style={{fontSize:"8px",marginLeft:"100px",marginTop:"10px"}}>or</p>

    <form className="signupform" action="">
        <label style={{padding:"5px",fontSize:"9px",fontWeight:"500"}} htmlFor="email">  Email address</label>
        <input style={{color:"grey",fontSize:"9px",width:"199.6px", height: "25px", border: "1px solid lightgrey", borderRadius: "2px"}} type="text" name="email" id="email" placeholder="   Email Address" required />
       
        <label style={{padding:"5px",fontSize:"9px",fontWeight:"500"}} htmlFor="password">  Password</label>
        <input style={{color:"grey",fontSize:"9px",width:"199.6px", height: "25px", border: "1px solid lightgrey", borderRadius: "2px"}} type="password" name="password" id="password" placeholder="   password" required />
       
        <label style={{padding:"5px",fontSize:"9px",fontWeight:"500"}} htmlFor="repeatpassword"> Repeat password</label>
        <input style={{color:"grey",fontSize:"9px",width:"199.6px", height: "25px",  border: "1px solid lightgrey", borderRadius: "2px"}} type="password" name="repeatpassword" id="repeatpassword" placeholder="   repeat password" />
        <br />
      
        <button style={{width:"199.6px",padding:"0px",height:"25px",borderRadius:"3px",backgroundColor:"black",color:"white"}}>Sign up</button>
        <br />
        <p style={{marginLeft:"15px"}}>Already have an account? <a href="/login">Sign in</a></p>
    </form>
   </div>
   <div className="imageofroutewisecontainer">
      <img className="imageofroutewise" src={bus} alt="" />
   </div>
   </div></>);
};

export default Signup;
