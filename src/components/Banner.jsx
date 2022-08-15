import React from 'react'
import popsicle from "../assets/te-pops.png" 
// import { Grid } from '@mui/material'


function Banner(){
    return (
            <div className="banner">
                    <header className="banner--logo-full">
                        <img src={popsicle} alt="Tech Elevator Popsicles Logo" className="banner--img"/>
                        <h1 className="banner--text">Tech Elevator Popsicles</h1>
                    </header>



                    <nav className="banner--nav">
                        <ul>
                            <li className="nav-list-item"><a href="index.html">Home</a></li>
                            <li className="nav-list-item"><a href="#">Store</a></li>
                            <li className="nav-list-item"><a href="contact-us.html">Contact Us</a></li>
                        </ul>
                    </nav>

            </div>


    )

}

export default Banner
