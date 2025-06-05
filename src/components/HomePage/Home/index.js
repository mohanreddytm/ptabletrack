import React from 'react'
import { useState } from 'react';

import Header from '../Header'
import { FaArrowRight } from "react-icons/fa";

import { BsQrCodeScan } from "react-icons/bs";
import { GrInsecure } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { HiCalculator } from "react-icons/hi2";
import { BsLayersFill } from "react-icons/bs";
import { HiTicket } from "react-icons/hi2";
import { IoIosPrint } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { TiTick } from "react-icons/ti";
import { GoDash } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

import resimage from '../../../images/restaurantmainimage.jpg'
import qrcodephoto from '../../../images/qrcodephoto.png'
import menuphoto from '../../../images/menuphoto.png'
import orders from '../../../images/orders.png'


import './index.css'

const pricingList = [
    {
        id:1,
        rates:[
            {name:"Inventory", isOk: 1},
            {name:"Menu", isOk: 1},
            {name:"Menu Item", isOk:1},
            {name:"Item Category", isOk:1},
            {name:"Area", isOk: 1},
            {name:"Table", isOk: 1},
            {name:"Reservation", isOk:1},
            {name:"KOT", isOk:1},
            {name:"Order", isOk: 1},
            {name:"Customer", isOk: 1},
            {name:"Staff", isOk:1},
            {name:"Payment", isOk:1},
            {name:"Report", isOk: 1},
            {name:"Settings", isOk: 1},
            {name:"Delivery Executive", isOk:1},
            {name:"Waiter Request", isOk:1},
            
            {name:"Expenses", isOk:1},
            {name:"Change Branch", isOk:0},
            {name:"Export Report", isOk: 0},
            {name:"Table Reservation", isOk: 0},
            {name:"Payment Gateway Integration", isOk:0},
            {name:"Theme Setting", isOk:0}
        ]
    },{
        id:2,
        rates:[
                        {name:"Inventory", isOk: 1},
            {name:"Menu", isOk: 1},
            {name:"Menu Item", isOk:1},
            {name:"Item Category", isOk:1},
            {name:"Area", isOk: 1},
            {name:"Table", isOk: 1},
            {name:"Reservation", isOk:1},
            {name:"KOT", isOk:1},
            {name:"Order", isOk: 1},
            {name:"Customer", isOk: 1},
            {name:"Staff", isOk:1},
            {name:"Payment", isOk:1},
            {name:"Report", isOk: 1},
            {name:"Settings", isOk: 1},
            {name:"Delivery Executive", isOk:1},
            {name:"Waiter Request", isOk:1},
            
            {name:"Expenses", isOk:1},
            {name:"Change Branch", isOk:1},
            {name:"Export Report", isOk:1},
            {name:"Table Reservation", isOk:1},
            {name:"Payment Gateway Integration", isOk:1},
            {name:"Theme Setting", isOk:1}
        ]
    }
]

const featuresList  = [
    {
        id:1,
        logo:<BsQrCodeScan className='home-main-features-item-logo' />,
        name:"QR code menu",
        desc:"Contactless Ordering Made Easy"
    },{
        id:2,
        logo:<GrInsecure className='home-main-features-item-logo' />,
        name:"Payment Gateway Integration",
        desc:"Fast, Secure, and Flexible Payments using Stripe and Razorpay"
    },{
        id:3,
        logo:<CgProfile className='home-main-features-item-logo' />,
        name:"Staff Management",
        desc:"Separate login for every staff role with different permissions."
    },{
        id:4,
        logo:<HiCalculator className='home-main-features-item-logo' />,
        name:"POS (Point of Sale)",
        desc:"Complete POS Integration"
    },{
        id:5,
        logo:<BsLayersFill className='home-main-features-item-logo' />,
        name:"Custom Floor Plans",
        desc:"Design Your Restaurant's Layout"
    },{
        id:6,
        logo:<HiTicket className='home-main-features-item-logo' />,
        name:"Kitchen Order Tickets (KOT)",
        desc:"Efficient Kitchen Workflow"
    },{
        id:7,
        logo:<IoIosPrint  className='home-main-features-item-logo' />,
        name:"Bill Printing",
        desc:"Quick and Accurate Billing"
    },{
        id:8,
        logo:<TfiStatsUp className='home-main-features-item-logo' />,
        name:"Reports",
        desc:"Data-Driven Decisions"
    }
]

const Home = () => {

      const [on, setOn] = useState(false);

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
        <h1 className='home-main-power-heading'>Powerful Features Built to Elevate Your Restaurant Operations</h1>
        <ul className='home-main-features-cont'>
            {featuresList.map(each => (
                <li className='home-main-features-item'>
                    {each.logo}
                    <h1 className='home-main-features-item-head'>{each.name}</h1>
                    <p className='home-main-features--item-desc'>{each.desc}</p>
                </li>
            ))}
        </ul>
        <h1 className="home-main-power-heading">Choose a Plan That Fits Your Restaurant</h1>
        <p className='home-main-power-desc'>Get everything you need to manage your restaurant with one affordable plan.</p>
        <div className='monthly-annual-plan-cont'> 
            <p className='monthly-text'>Pay Monthly</p>
            <label className="switch">
                <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
                <span className="slider"></span>
            </label>
            <p className='monthly-text'>Pay Annually</p>
        </div>
        <div className='price-cont-heads'>
            <div>
            </div>
            <div className='price-cont-item-one'>
                <h1 className='price-cont-item-one-head'>Subscription Package</h1>
                <div className='price-cont-item-one-div'>
                    <h1 className='price-cont-item-one-price'>₹200</h1>
                    <p className='price-cont-item-one-pay-month'>Pay Monthly</p>
                </div>
                <button className='home-header-get-started-button home-header-get-started-button-home'>Get Started</button>
            </div>
            <div className='price-cont-item-one'>
                <h1 className='price-cont-item-one-head'>Life Time</h1>
                <div className='price-cont-item-one-div'>
                    <h1 className='price-cont-item-one-price'>₹ 5000</h1>
                    <p className='price-cont-item-one-pay-month'>Pay One Time</p>
                </div>
                <button className='home-header-get-started-button home-header-get-started-button-home'>Get Started</button>
            </div>
        </div>
        <div className='pricing-list-cont'>
            <ul className='pricing-list-items-cont'>
                {pricingList[0].rates.map(each => 
                    <li className='pricing-list-item'>
                        <p>{each.name}</p>
                    </li>
                )}
            </ul>
            <ul className='pricing-list-items-middle-cont'>
                {pricingList[0].rates.map(each => 
                    <li className='pricing-list-item-is-ok'>
                        <p>{each.isOk ? <TiTick className='tick-one' /> : <GoDash className='dash-one' /> }</p>
                    </li>
                )}
            </ul>
            <ul className='pricing-list-items-middle-cont'>
                {pricingList[1].rates.map(each => 
                    <li className='pricing-list-item-is-ok'>
                        <p>{each.isOk ? <TiTick className='tick-one' /> : <GoDash className='dash-one' /> }</p>
                    </li>
                )}
            </ul>
        </div>
        <div className='copy-right-home'>
            <h1><FaRegCopyright className='copy-right-one' /> 2025 TableTrack. All Rights Reserved.</h1>
            <FaArrowUp className='copy-right-up-arrow' />
        </div>
      </div>
      
    </div>
  )
}

export default Home
