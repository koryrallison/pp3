import React from 'react'
import Banner from '../components/Banner.jsx'
import Main from '../components/Main.jsx'
import Race from '../components/Race.jsx'
import Summer from '../components/Summer.jsx'
import Footer from '../components/Footer.jsx'
import { Grid } from '@mui/material'

function Home() {
    return (
        <div className="home-container">
            <Banner />
            <Main />
            <Race />
            <Summer />
            <Footer />
        </div>
    )
}

export default Home