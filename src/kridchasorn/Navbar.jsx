import React from 'react'
// import { Link } from 'react-router-dom' //use <a></a> instead of <Link></Link> because don't use router now
import './style.css'

const Navbar = () => {
    return (
       <div className="navigation">
            <div className="nav-logo">
                <img src="/public/image-logo.png" alt="Logo Website" className="logo-icon" />
                <h2>Sport Club</h2>
            </div>
            <ul className="nav-link">
                <li><a href='/'>Home</a></li>
                <li><a href='/booking'>Booking</a></li>
                <li><a href='/coach'>Coach</a></li>
                <li><a href='/about-us'>About Us</a></li>
                <li><a href='/contact-us'>Contact Us</a></li>
                <li><a href="/profile"><img src="/public/login-icon.png" alt="" className="login-icon" /></a></li>
                <li><a href='/login'>Log in</a></li>
            </ul>
       </div>
    )
}

export default Navbar