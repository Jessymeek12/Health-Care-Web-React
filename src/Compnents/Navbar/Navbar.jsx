import React from 'react';
import "./NavBar-style.css";
import logo from "../../assets/Elderly-logo.png";

const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={logo} alt="" className='navbar-logo' />
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
        <button className='btn btn-primary'>Appointment</button>
    </div>
  )
}

export default Navbar