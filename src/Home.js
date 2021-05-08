import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";

export default function Home(){
  return(
    <div className="home">
      <Navbar/>
      <Register/>
      <Login />
      <Footer/>
    </div>
  );
}