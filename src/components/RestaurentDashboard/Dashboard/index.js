import React from 'react'
import { useState, useEffect } from 'react'

// import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


import { FaCaretDown, FaAngleDown,FaRegBell, FaAngleDoubleUp, FaThumbsUp, FaThumbsDown  } from "react-icons/fa";

import { MdBlock, MdFrontHand } from "react-icons/md";

import { TfiLineDashed } from "react-icons/tfi";
import { BsQrCodeScan } from "react-icons/bs";

import serving from '../../../images/hot-food.png'
import { SiCcleaner } from "react-icons/si";

import error from '../../../images/error.jpg'

import './index.css'

import { useNavigate } from 'react-router-dom'

import { FaArrowUpLong, FaCircleCheck } from "react-icons/fa6";
import { GiCash } from "react-icons/gi";

import { CiCircleAlert } from "react-icons/ci";




const Dashboard = () => {

    const navigate = useNavigate();

  
    const getTime = () => {
      const newDate = new Date();
      const date = newDate.getDate();
      const day = newDate.getDay();
      const hours = newDate.getHours();
      let dayText = "";
      switch (day){
        case 0:
          dayText = "Sunday";
          break;
        case 1:
          dayText = "Monday";
          break;
        case 2:
          dayText = "Tuesday";
          break;
          
        case 3:
          dayText = "Wednesday";
          break;
        case 4:
          dayText = "Thursday";
          break;
        case 5:
          dayText = "Friday";
          break;
        case 6:
          dayText = "Saturday";
          break;
        default:
      }
      let MonthText = "";
      const Month = newDate.getMonth();
      switch (Month){
        case 0:
          MonthText = "January";
          break;
        case 1:
          MonthText = "February";
          break;
        case 2:
          MonthText = "March";
          break;
        case 3:
          MonthText = "April";
          break;
        case 4:
          MonthText = "May";
          break;
        case 5:
          MonthText = "June";
          break;
        case 6:
          MonthText = "July";
          break;
        case 7:
          MonthText = "August";
          break;
        case 8:
          MonthText = "September";
          break;
        case 9:
          MonthText = "October";
          break;
        case 10:
          MonthText = "November";
          break;
        case 11:
          MonthText = "December";
          break;
        default:
          MonthText = "January";
        }
      const minutes = newDate.getMinutes();
      const ampm = newDate.getHours() >= 12 ? "PM" : "AM";
      const hours12 = newDate.getHours() % 12 || 12;
      return `${dayText}, ${date} ${MonthText}, ${hours12}:${minutes} ${ampm}`;
    }

    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 30; i++) {
        data.push({
          day: `Day ${i}`,
          amount: Math.floor(Math.random() * 10001), // Random ₹0 - ₹10000
        });
      }
      return data;
    };

    const data = generateData();

    // console.log(data)
  
    return(

          <div className='dash-main-m'>
            <div className='dash-main-dashboard-cont'>
              <div>
                <h1 className='dash-dash-head'>DashBoard</h1>
                <p className='dash-dash-time'>{getTime()}</p>
              </div>
              <ul className='dash-dash-waiter-container'>
                <li>
                  <h1>Waiter Requests</h1>
                  <h1>3</h1>
                </li>
                <li>
                  <h1>Current Orders</h1>
                  <h1>2</h1>
                </li>
              </ul>

            </div>
            <div className='dash-middle-m-cont'>
                <div className='dash-middle-m-left-cont'>
                  <h1 className='dash-middle-m-left-main-head'>Statistics</h1>
                  <div className='dash-stats-cont'>
                    <div className='dash-stats-parts dash-stats-parts-one'>

                      <div className='dash-stats-parts-heads-cont'>
                        <h1 className='dash-stats-parts-heads dash-stats-parts-head-orders' >Today's Orders</h1>
                      </div>

                      <p className='dash-stats-parts-count'>10</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-percent'><FaArrowUpLong /> 40%</p>
                          <p className='dash-stats-parts-p'>Since Yesterday</p>
                      </div>
                      <button type='button' className='dash-stats-parts-button'>Current <p>4</p></button>
                    </div>
                    <div className='dash-stats-parts dash-stats-parts-two'>

                      <div className='dash-stats-parts-heads-cont dash-stats-parts-head-earnings'>
                        <h1 className='dash-stats-parts-heads dash-stats-parts-head-earnings'>Today's Earnings</h1>
                      </div>
                      <p className='dash-stats-parts-count'>₹ 5400</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-percent'><FaArrowUpLong /> 60%</p>
                          <p className='dash-stats-parts-p'>Since Yesterday</p>
                      </div>
                    </div>
                    <div className='dash-stats-parts dash-stats-parts-three'>

                      <div className='dash-stats-parts-heads-cont dash-stats-parts-head-avg'>
                        <h1 className='dash-stats-parts-heads dash-stats-parts-head-avg'>Average Daily Earnings</h1>
                      </div>
                      <p className='dash-stats-parts-count'>₹ 7675</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-percent'><FaArrowUpLong /> 120%</p>
                          <p className='dash-stats-parts-p'>This Month - July</p>
                      </div>
                    </div>
                    <div className='dash-stats-parts dash-stats-parts-four'>

                      <div className='dash-stats-parts-heads-cont dash-stats-parts-head-selling'>
                        <h1 className='dash-stats-parts-heads dash-stats-parts-head-selling'>#1 Selling Dish</h1>
                      </div>

                      <p className='dash-stats-parts-count on-sp-count'>Chicken Biryani</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-selling-ye'>Mutton Paya</p>
                          <p className='dash-stats-parts-p'>- Yesterday</p>
                      </div>
                    </div>
                  </div>
                  <div className='dash-payment-cont'>
                    <h1 className='dash-payment-one'>Payment Method</h1>
                    <div className='dash-payment-inner-cont'>
                      <BsQrCodeScan className='dash-payment-inner-logo' />
                      <h1 className='dash-payment-inner-text'>UPI</h1>
                      <input className='dash-payment-inner-input' type="range" min="0" max='5400' value='3000' />
                      <p className='dash-payment-inner-price'>₹3000</p>
                    </div>
                    <hr className='dash-payment-line' />
                    <div className='dash-payment-inner-cont'>
                      <GiCash className='dash-payment-inner-logo' />
                      <h1 className='dash-payment-inner-text'>Cash</h1>
                      <input className='dash-payment-inner-input' type="range" min="0" max='5400' value='1400' />

                      <p className='dash-payment-inner-price'>₹1400</p>
                    </div>
                  </div>

                  <div className="dash-stats-conts">
                    <h2 className="dash-payment-one">Restaurant Earnings (Day 1 to 300)</h2>
                    <ResponsiveContainer width="100%" height="75%">
                      <LineChart data={data}>
                        {/* <CartesianGrid strokeDasharray="10 10" /> */}
                        <XAxis dataKey="day" hide />
                        <YAxis domain={[0, 10000]} tickFormatter={(value) => `₹${value}`} />
                        <Tooltip formatter={(value) => `₹${value}`} />
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className='dash-payment-cont dash-waiter-availability'>
                    <h1 className='dash-payment-one'>Available Waiters</h1>
                    <ul className='dash-waiter-availability-inner-cont' >
                      <li className='dash-waiter-availability-inner-item'>
                        <h1 className='dash-waiter-availability-item-name'>Ravi</h1>
                        <div className='dash-waiter-availability-item-action'><img className='serving-logo' src={serving} /> <p className='waiter-action-text'>Serving</p></div>
                        <p className='dash-waiter-availability-item-table'>Table T01</p>
                      </li>
                      <hr className='line-waiter-cont' />
                      <li className='dash-waiter-availability-inner-item'>
                        <h1 className='dash-waiter-availability-item-name'>Suman</h1>
                        <div className='dash-waiter-availability-item-action cleaing-one'><SiCcleaner className='serving-logo cleaning-logo' /> <p className='waiter-action-text'>Cleaning</p></div>
                        <p className='dash-waiter-availability-item-table'>Table R02</p>
                      </li>
                      <hr className='line-waiter-cont' />

                      <li className='dash-waiter-availability-inner-item'>
                        <h1 className='dash-waiter-availability-item-name'>Satyam</h1>
                        <div className='dash-waiter-availability-item-action available-one'><FaThumbsUp className='serving-logo cleaning-logo available-logo' /> <p className='waiter-action-text'>Available</p></div>
                        <p className='dash-waiter-availability-item-table'> <TfiLineDashed className='available-line' /> </p>
                      </li>
                      <hr className='line-waiter-cont' />
                      <li className='dash-waiter-availability-inner-item'>
                        <h1 className='dash-waiter-availability-item-name'>Mohna</h1>
                        <div className='dash-waiter-availability-item-action not-available-one in-kichen-one'><MdBlock className='serving-logo cleaning-logo in-kichen-logo' /> <p className='waiter-action-text'>On Break</p></div>
                        <p className='dash-waiter-availability-item-table'> <TfiLineDashed className='available-line' /> </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='dash-middle-m-right-cont'>
                  <h1 className='dash-middle-m-right-head'>Today's Orders</h1>
                  <ul className='dash-middle-m-right-list'>
                    <li className='dash-middle-m-right-list-item'>
                      <p className='dash-middle-m-right-list-item-number'>#1</p>
                      <div className='dash-middle-m-right-list-item-cont-one'>
                        <div className='dash-middle-m-right-list-item-cont'>
                          <h1 className='dash-middle-m-right-list-item-head'>T01</h1>
                          <p className='dash-middle-m-right-list-item-name'>Ravi</p>
                        </div>

                        <button type='button' className='dash-middle-m-right-list-item-button'>PAID</button>

                      </div>
                      <div className='dash-middle-m-right-list-item-cont-two'>
                        <hr className='dash-middle-m-right-list-item-hr' />
                        <h1 className='dash-middle-m-right-list-item-button-text'>Order Served</h1>
                        <hr className='dash-middle-m-right-list-item-hr' />
                      </div>
                      <div className='dash-middle-m-right-list-item-cont-three'>
                        <p className='dash-middle-m-right-list-item-cont-three-text'>July 21, 2024 90:25 AM</p>
                        <p className='dash-middle-m-right-list-item-cont-three-text'><span className='dash-middle-m-right-list-item-cont-three-text-span'>6</span> Items</p>
                      </div>
                      <hr className='dash-middle-m-right-list-item-hr' />
                      <div className='dash-middle-m-right-list-item-cont-four'>
                        <h1 className='dash-middle-m-right-list-item-cont-four-head'>₹ 1000</h1>
                        <p className='dash-middle-m-right-list-item-cont-four-text'>John Wick</p>
                      </div>

    
                    </li>
                  </ul>
                </div>
            </div>
          </div>


    )   
}

export default Dashboard