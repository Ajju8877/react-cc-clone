import React from "react";
import {NavLink} from "react-router-dom";

export default function Sidebar(){
    
    return(
      <div className="sidebar">
         <ul>
         <li> <NavLink path="/"> Home </NavLink> </li>
         <li> <NavLink path="/login"> Login </NavLink> </li>
         <li> <NavLink path="/register"> Register </NavLink> </li>
         <li> <NavLink path="/leaderboard"> Leaderboard </NavLink> </li>
           <hr/>
         <li> <NavLink path=""> Balance Check</NavLink> </li>
         <li> <NavLink path=""> Invite Rewards </NavLink> </li>
         <li> <NavLink path=""> Coupon Code </NavLink> </li>
         <li> <NavLink path=""> Setting </NavLink> </li>
         </ul>

      </div>
    );
}