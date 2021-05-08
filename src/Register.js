import React from "react";
import "./Register.css";
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import LockIcon from '@material-ui/icons/Lock';

export default function Register(){
    return(
      <div className="register">
         
             <h4> Register Here ! <br/> <span> Get Multiple Rewards <LocalOfferIcon className="reward_icon"/> </span> </h4>
       <br/>
       
         <form>

         <div>
         <label> <PersonIcon/> </label>
           <input type="text"name="name"id="name"placeholder=" Enter Your Name"/>
         </div>

          <div>
         <label> <EmailIcon/> </label>
           <input type="text"name="email"id="email"placeholder="Enter Your Email"/>
          </div>

          <div>
         <label> <CallIcon/> </label>
           <input type="text"name="number"id="number"placeholder="Enter Your Number"/>
          </div>

          <div>
         <label> <LockIcon/> </label> 
           <input type="password"name="password"id="password"placeholder="Enter Your password"/>
          </div> 

           <div>
         <label> <VpnLockIcon/> </label> 
           <input type="password"name="password"id="password"placeholder="Confirm Your Password"/>
          </div>  
              <br/>

           <div className="register_login_btn">
           <button> Register </button>
           </div>

         </form>
      </div>
    );
}