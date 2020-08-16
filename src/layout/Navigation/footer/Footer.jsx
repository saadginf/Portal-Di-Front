import React from 'react'
import './footer.css'

import Links from './Links/Links'
import EmailUs from "./EmailUs/EmailUs"


import logo from "../../../assets/logo.png"
const Footer = () => {
    return (
        <div className="foot">
          
           <Links/>
           <EmailUs 
           uri={logo}
           email="saad@gmail.com"
           />
        </div>
    )
}

export default Footer
