import React from 'react'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Form from '../components/Form.jsx'
import { NavLink } from 'react-router-dom'

function ContactUs(){
    return (
        <div>
            <Banner />
            <Form />
            <Footer />
        </div>
    )
}

export default ContactUs