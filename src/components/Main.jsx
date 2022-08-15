import React from 'react'
import rainbow from '../assets/popsicle-rainbow.jpg'

function Main(){
    return (
        <main className="main">
        <img src={rainbow} alt="rainbow popsicles" className="main--img"/>
        <div>
            <h2 className="main--title">Did you know?</h2>
                <ul className="main--list">
                    <li className="main--list-item">The earliest known popsicles date as far back as 1872. Back then, a popsicle was called a
                        Hokey-Pokey.</li>
                    <li className="main--list-item">Popsicles are also known as freezer pops, ice lollies, and ice pops.</li>
                    <li className="main--list-item">The world’s largest popsicle was made in 1997 and was 21 feet tall.</li>
                    <li className="main--list-item">Popsicles have become so popular that a popular arts and craft item is called a popsicle stick.</li>
                </ul>
            </div>
        </main>

    )
}

export default Main