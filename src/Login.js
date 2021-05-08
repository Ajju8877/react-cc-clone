import React from "react";
import "./Register.css";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import LockIcon from '@material-ui/icons/Lock';

export default function Login(){
    return(
      <div className="login">
         
             <h4> Login Here ! <br/> <span> Get Multiple Rewards <LocalOfferIcon className="reward_icon"/> </span> </h4>
       <br/>
       
         <form>

         
          <div>
         <label> <EmailIcon/> </label>
           <input type="text"name="email"id="email"placeholder="Enter Your Email"/>
          </div>

          <div>
         <label> <LockIcon/> </label> 
           <input type="password"name="password"id="password"placeholder="Enter Your password"/>
          </div> 
             
             

           <div className="register_login_btn">
           <button> Login </button>
          </div>

         </form>
      </div>
    );
}