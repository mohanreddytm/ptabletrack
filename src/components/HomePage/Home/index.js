import React from 'react'
import Header from '../Header'
import { FaArrowRight } from "react-icons/fa";

import resimage from '../../../images/restaurantmainimage.jpg'
import qrcodephoto from '../../../images/qrcodephoto.png'
import menuphoto from '../../../images/menuphoto.png'
import orders from '../../../images/orders.png'

import './index.css'

const Home = () => {
  return (
    <div className='home-initial-cont'>
      <Header />
      <div className='home-main-cont'>
        <h1 className='home-main-head'>Smart Dining Starts Here – Track Your Table,<br/> Enjoy the Experience</h1>
        <p className='home-main-text'>Easily manage orders, menus, and tables in one place. Save time, reduce errors, and grow your business <br/> faster</p>
        <button className='start-trail-button'>Start 30 Days Trail <FaArrowRight className='home-right-arrow' /></button>
        <div className='home-res-cont'>
            <img className='res-image' alt='res image' src={resimage} />
            <div className='home-res-content-cont'>
                <h1 className='home-res-content-head'>Unique Features of TableTrack – Redefining Restaurant Experience</h1>
                <ul className='home-res-content-list-cont'>
                    <li>Live Table Status Sync</li>
                    <li>Smart Queue with Time Estimates</li>
                    <li>QR-Based Table Identification</li>
                    <li>Auto-Assign Tables for Efficiency</li>
                    <li>Customer Notifications & Alerts</li>
                </ul>
                <div className='home-res-button-cont'>
                    <p className='home-res-quote'>Get Started with the New<br/>  Era of Smart Dining!</p>
                    <p className='home-res-quote'>-</p>
                    <button className='get-started-home-res'>Get Started</button>

                </div>
            </div>
        </div>
        <h1 className='home-main-head-rest'>Take Control of Your Restaurant</h1>
        <div className='home-main-content-cont'>
            <img src={qrcodephoto} alt='qr code one' className='qrcode-photo' />
            <div className='home-main-content-cont-details'>
                <h1 className='home-main-content-cont-details-head'>QR Code Table Scanning – Fast, Contactless, and Smart</h1>
                <p className='home-main-content-cont-details-para'>Upgrade your dining experience with the power of QR technology. Our app enables instant interactions between customers and tables through seamless scanning.</p>
                <button className='home-main-content-cont-details-button'>View Details <FaArrowRight className='home-right-arrow-rest'/></button>
            </div>
        </div>
        <div className='home-main-content-cont'>
            <img src={menuphoto} alt='qr code one' className='qrcode-photo menu-manage-order' />
            <div className='home-main-content-cont-details'>
                <h1 className='home-main-content-cont-details-head'>Menu Management – Control Your Menu with Ease</h1>
                <p className='home-main-content-cont-details-para'>Simplify and streamline how you manage your restaurant’s menu, all from one dashboard.Add, remove, or edit dishes instantly — changes reflect across all customer devices in real-time.</p>
                <button className='home-main-content-cont-details-button home-main-content-cont-details-button-right-side '>View Details <FaArrowRight className='home-right-arrow-rest'/></button>
            </div>
        </div>
        <div className='home-main-content-cont'>
            <img src={orders} alt='qr code one' className='qrcode-photo' />
            <div className='home-main-content-cont-details'>
                <h1 className='home-main-content-cont-details-head'>Statistics & Orders – Track, Analyze, and Grow Smarter</h1>
                <p className='home-main-content-cont-details-para'>Get complete visibility over your restaurant’s performance and customer behavior — all in one place Monitor every order from placement to delivery – dine-in, takeout, or delivery.</p>
                <button className='home-main-content-cont-details-button'>View Details <FaArrowRight className='home-right-arrow-rest'/></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
