import React from 'react'
import blue from '../assets/blue-pop.png'

function Race() {
    return (
        <div className="race">
            <img src={blue} alt="blue popsicle" className="race--img"/>

            <h2 className="race--title">Popsicle Race</h2>

            <p className="race--text">
            Don’t forget to sign up for the race! Each attendee will receive their own box of popsicles when they
            reach the end.
            </p>

        </div>
    )

}

export default Race



