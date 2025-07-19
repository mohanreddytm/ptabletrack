import React from 'react'
import { useState, useEffect } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown, FaAngleDown,FaRegBell, FaAngleDoubleUp } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi"
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { RiReservedLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import './index.css'

import { useNavigate } from 'react-router-dom'

import {jwtDecode} from 'jwt-decode';

import Header from '../Header';

import AllInOne from '../../../complexOne/index'
import order from '../../../images/order.png'

import cookies from 'js-cookie'

import { FaArrowUpLong } from "react-icons/fa6";

const MenuItmes = [
  { id:1,
    content:<><CiHome className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Dashboard</h1> </>,

  },
  {
    id:2,
    content:<><BiSolidDish className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Orders</h1> </>,
  },
  {
    id:3,
    content:<><BiFoodMenu className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Menu</h1> <FaAngleDown className='menu-down-arr' /> </>
  },{
    id:4,
    content:<><MdOutlineTableRestaurant className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Tables</h1> <FaAngleDown className='menu-down-arr' /></>
  },{
    id:5,
    content:<><FaRegBell className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Waiter Requests</h1></>
  },
  {
    id:6,
    content:<><GiLaptop className='menu-logos' /> <h1 className='dash-m-menu-items-head'>POS</h1></>
  },
  {
    id:7,
    content:<><IoMdPeople className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Staff</h1></>
  },{
    id:8,
    content:<><RiReservedLine className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Reservations</h1></>
  },{
    id:9,
    content:<><FaIndianRupeeSign className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Payments</h1></>
  },{
    id:10,
    content:<><IoSettingsOutline className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Settings</h1></>
  }
]

const RestaurantDashboard = () => {

  const navigate = useNavigate();


  const [restaurantData, setRestaurantData] = useState('');
  const [userId, setUserId] = useState('') 
  const [currentMenu, setCurrentMenu] = useState(1);

  useEffect(() => {

    const token = cookies.get('t_user');
    if(token === undefined){
      navigate('/login')
    }
  }, [navigate])


  useEffect(() => 
  {
    const token = cookies.get("t_user");
    if(!token){
      navigate('/login')
    }
    const data = jwtDecode(token);
    const restaurantId = data.userId;
    setUserId(restaurantId);
    const getRestaurantData = async () => {
      const url  = `https://ttbackone.onrender.com/restaurant/${restaurantId}`
      const response = await fetch(url);
      const jsonOne = await response.json();
      if(response.ok){
        setRestaurantData(jsonOne[0]);
      }else{
        console.log("oneone")
      }
    }

    getRestaurantData()
  }, [])


  return (
    <AllInOne.Provider value = {{userId, restaurantDetails: restaurantData}}>
      <div className='dash-initial-cont'>
        <Header />
        <div className='dash-m-main-c'>
          <div className='dash-m-menu-main'>
            <div className='dash-m-menu-c'>
              <div className='dash-m-menu-list-branch-one-only'>
                <button type='button' className='dash-m-menu-branch-one'><FaLocationDot /> Kurnool <FaCaretDown /> </button>
              </div>
              <ul className='dash-m-menu-list'>
                {MenuItmes.map(each => (

                  <li key={each.id} onClick={() => setCurrentMenu(each.id) } className={`dash-m-menu-items ${each.id === currentMenu ? "dash-current-one" : "dash-m-menu-items"}`}>
                    {each.content}
                  </li>
                ) )}
              </ul>
              <div className='dash-m-left-call-waiter-one'>
                <button type='button'>Call Waiter</button>
              </div>
            </div>
          </div>
          <div className='dash-main-m'>
            <div className='dash-main-dashboard-cont'>
              <h1 className='dash-dash-head'>DashBoard</h1>
              <p className='dash-dash-time'>Monday, 19 Jul, 7:25 AM</p>
            </div>
            <div className='dash-middle-m-cont'>
                <div className='dash-middle-m-left-cont'>
                  <h1 className='dash-middle-m-left-main-head'>Statistics</h1>
                  <div className='dash-stats-cont'>
                    <div className='dash-stats-parts'>
                      <div className='dash-stats-enhance-cont'>
                          <h1 className='dash-stats-enhance'><FaAngleDoubleUp /> Enhance</h1>
                      </div>
                      <div className='dash-stats-parts-heads-cont'>
                        <h1 className='dash-stats-parts-heads'>Today's Orders</h1>
                      </div>

                      <p className='dash-stats-parts-count'>10</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-percent'><FaArrowUpLong /> 40%</p>
                          <p className='dash-stats-parts-p'>Since Yesterday</p>
                      </div>
                    </div>
                    <div className='dash-stats-parts'>
                      <div className='dash-stats-enhance-cont'>
                          <h1 className='dash-stats-enhance'><FaAngleDoubleUp /> Enhance</h1>
                      </div>
                      <div className='dash-stats-parts-heads-cont'>
                        <h1 className='dash-stats-parts-heads'>Today's Earnings</h1>
                      </div>
                      <p className='dash-stats-parts-count'>₹ 5400</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-percent'><FaArrowUpLong /> 60%</p>
                          <p className='dash-stats-parts-p'>Since Yesterday</p>
                      </div>
                    </div>
                    <div className='dash-stats-parts'>
                      <div className='dash-stats-enhance-cont'>
                          <h1 className='dash-stats-enhance'><FaAngleDoubleUp /> Enhance</h1>
                      </div>
                      <div className='dash-stats-parts-heads-cont'>
                        <h1 className='dash-stats-parts-heads'>Average Daily Earnings</h1>
                      </div>
                      <p className='dash-stats-parts-count'>₹ 7675</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-percent'><FaArrowUpLong /> 120%</p>
                          <p className='dash-stats-parts-p'>This Month - July</p>
                      </div>
                    </div>
                    <div className='dash-stats-parts'>
                      <div className='dash-stats-enhance-cont'>
                          <h1 className='dash-stats-enhance'><FaAngleDoubleUp /> Enhance</h1>
                      </div>
                      <div className='dash-stats-parts-heads-cont'>
                        <h1 className='dash-stats-parts-heads'>#1 Selling Dish</h1>
                      </div>

                      <p className='dash-stats-parts-count on-sp-count'>Chicken Biryani</p>
                      <div className='dash-stats-parts-inner-cont'>
                          <p className='dash-stats-parts-selling-ye'>Mutton Paya</p>
                          <p className='dash-stats-parts-p'>- Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='dash-middle-m-right-cont'>

                </div>
            </div>
          </div>

        </div>
      </div>
    </AllInOne.Provider>

  )
}

export default RestaurantDashboard
