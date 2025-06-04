import React from 'react'
import { MdLightMode } from "react-icons/md";

import './index.css'


const Header = () => {
  return (
    <div className='header-initial-cont'>
      <div className='header-logo-cont'>
        <div className='header-logo-mini-cont'>
            <h1 className='header-logo-t'>T</h1>
            <h1 className='header-logo-tt'>T</h1>
        </div>

        <p className='header-logo-text'>TableTrack</p>
      </div>
      <nav>
        <a className='home-nav-one'>Home</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>FAQs</a>
      </nav>
      <div className='header-login-cont'>
        <MdLightMode className='color-theme-home' />
        <button className='home-header-login-button'>Login</button>
        <button className='home-header-get-started-button'>Get Started</button>
      </div>
    </div>
  )
}

export default Header
