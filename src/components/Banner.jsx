import React from 'react'
import popsicle from "../assets/te-pops.png" 

function Banner(){
    return (
    <div className="banner">
        
    <header className="banner--logo">
        <img src={popsicle} alt="Tech Elevator Popsicles Logo" className="banner--logo"/>
        <h1>Tech Elevator Popsicles</h1>
    </header>

    <nav className="banner--nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
        </ul>
    </nav>

    </div>
    )

}

export default Banner
