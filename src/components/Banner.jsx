import React from 'react'
import popsicle from "../assets/te-pops.png" 
import { NavLink } from 'react-router-dom'


function Banner(){
    return (
            <div className="banner">
                    <header className="banner--logo-full">
                        <img src={popsicle} alt="Tech Elevator Popsicles Logo" className="banner--img"/>
                        <h1 className="banner--text">Tech Elevator Popsicles</h1>
                    </header>



                    <nav className="banner--nav">
                        <ul>
                            <li className="nav-list-item"><NavLink to="/">HOME</NavLink></li>
                            <li className="nav-list-item"><a href="https://www.amazon.com/s?k=popsicles&crid=3BPYL0K70KFFC&sprefix=popsicles%2Caps%2C131&ref=nb_sb_noss_1">Store</a></li>
                            <li className="nav-list-item"><NavLink to="/ContactUs">CONTACT US</NavLink></li>
                        </ul>
                    </nav>

            </div>


    )

}

export default Banner
