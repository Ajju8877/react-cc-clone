import React from "react";
import ".//Navbar.css";
import { Link } from "react-router-dom";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import {IconButton} from "@material-ui/core";


export default function Navbar() {

  return (
    <div className="navbar">
          <div className="iconLeft">
          <IconButton> <AccountCircleIcon className="Navbar_icon" /></IconButton>

         <IconButton> <MailOutlineOutlinedIcon className="Navbar_icon"/>{" "} </IconButton>
        
      </div>

      <div className="heading">
          <h3> coding~cypher </h3>
      </div>

      <div className="iconRight">
          {" "}
         <IconButton> <NotificationsIcon className="Navbar_icon"/> </IconButton>
        
        <IconButton>  <AccountBalanceWalletOutlinedIcon className="Navbar_icon"/> </IconButton>
        
      </div>

          </div>
  );
}
