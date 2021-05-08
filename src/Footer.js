import React from "react";
import "./Footer.css";
import {NavLink} from "react-router-dom";

import ChatIcon from '@material-ui/icons/Chat';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default function Footer(){
  return(
    <div className="footer">
  
       <ul>
      <li>  
      <NavLink to = "/"activeClassName="Footer_Navlinks">   <span className="footer_icon_name"><HomeIcon className="footer_icon"/> Home </span> </NavLink>
      </li>

      <li>
      <NavLink to = "/myMatches"className="Footer_Navlinks">  <span className="footer_icon_name"><DeveloperModeIcon className="footer_icon"/> My Challange </span> </NavLink>
      </li>

      <li>
      <NavLink to = "/Rewards"className="Footer_Navlinks">
        <span className="footer_icon_name"><AttachMoneyIcon className="footer_icon"/> Rewards </span> </NavLink>
      </li>

      <li>
      <NavLink to = "/chat"className="Footer_Navlinks">  <span className="footer_icon_name"><ChatIcon className="footer_icon"/> Chat </span> </NavLink>
      </li>

      <li>
      <NavLink to = "/trending"className="Footer_Navlinks"> <span className="footer_icon_name"><WhatshotIcon className="footer_icon"/>  Trending </span> </NavLink>
      </li> 
         </ul>

  
    </div>
  );
}