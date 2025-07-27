import React from 'react'
import { useState, useEffect } from 'react'
import { FaLocationDot, FaIndianRupeeSign } from "react-icons/fa6";
import { FaCaretDown, FaAngleDown,FaRegBell, FaAngleDoubleUp, FaThumbsUp, FaThumbsDown  } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { BiSolidDish,BiFoodMenu } from "react-icons/bi"


import { MdOutlineTableRestaurant } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { RiReservedLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import error from '../../../images/error.jpg'

import MenuPage from '../Menu'

import './index.css'

import { useNavigate } from 'react-router-dom'

import Dashboard from '../Dashboard';
import Tables from '../Tables';
import Orders from '../Orders';

import {jwtDecode} from 'jwt-decode';

import Header from '../Header';

import AllInOne from '../../../complexOne/index'


import cookies from 'js-cookie'



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
    content:<><BiFoodMenu className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Menu</h1></>
  },
  {
    id:4,
    content:<><MdOutlineTableRestaurant className='menu-logos' /> <h1 className='dash-m-menu-items-head'>Tables</h1></>
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

const statusOne = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  PENDING: "PENDING",
}



const RestaurantDashboard = () => {

  const navigate = useNavigate();


    const [restaurantData, setRestaurantData] = useState('');
    const [dataStatus, setDataStatus] = useState(statusOne.INITIAL);
    const [userId, setUserId] = useState('') 
    const [currentMenu, setCurrentMenu] = useState(1);
    const [menuData, setMenuData] = useState('');
    const [menuDataStatus, setMenuDataStatus] = useState(statusOne.INITIAL);
    const [tablesData, setTablesData] = useState('');
    const [tablesDataStatus, setTablesDataStatus] = useState(statusOne.INITIAL);
    const [areasData, setAreasData] = useState('');
    const [areasDataStatus, setAreasDataStatus] = useState(statusOne.INITIAL);


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
      setDataStatus(statusOne.PENDING);
      const data = jwtDecode(token);
      const restaurantId = data.userId;
      setUserId(restaurantId);
      const getRestaurantData = async () => {
        try{
          setDataStatus(statusOne.PENDING);
          const url  = `https://ttbackone-v48h.onrender.com/restaurant/${restaurantId}`
          const response = await fetch(url);
    
          if(response.ok){
            const jsonOne = await response.json();
            setRestaurantData(jsonOne[0]);
            setDataStatus(statusOne.SUCCESS);
          }else{
            setDataStatus(statusOne.FAILED);
            console.log('failed')
          }
        }
        catch(error){
          setDataStatus(statusOne.FAILED);
          console.log('failed')
        }
      }
      getRestaurantData()

      const getMenuData = async () => {
        try{
          setMenuDataStatus(statusOne.PENDING);
          const url = `https://ttbackone-v48h.onrender.com/getMenuItems/${restaurantId}`;
          const response = await fetch(url);
          if(response.ok){
            const jsonOne = await response.json();
            setMenuData(jsonOne);
            setMenuDataStatus(statusOne.SUCCESS);
          }else{
            setMenuDataStatus(statusOne.FAILED);
          }
        } 
        catch(error){
          setMenuDataStatus(statusOne.FAILED);
        }
      }
      getMenuData();


      const getAreasData = async () => {
        try{
          setAreasDataStatus(statusOne.PENDING);
          const url = `https://ttbackone-v48h.onrender.com/getAreas/${restaurantId}`;
          const response = await fetch(url);
          if(response.ok){
            const jsonOne = await response.json();
            setAreasData(jsonOne);
            setAreasDataStatus(statusOne.SUCCESS);
          }else{
            setAreasDataStatus(statusOne.FAILED);
          }
        }
        catch(error){
          setAreasDataStatus(statusOne.FAILED);
        }
      }
      getAreasData();

      

    }, [])
  
    const onClickRetry = () => {
      setDataStatus(statusOne.PENDING);
      const getRestaurantData = async () => {
        try{
          const url = `https://ttbackone-v48h.onrender.com/restaurant/${userId}`;
          const response = await fetch(url);
          if(response.ok){
            const jsonOne = await response.json();
            setRestaurantData(jsonOne[0]);
            setDataStatus(statusOne.SUCCESS);
          }else{
            setDataStatus(statusOne.FAILED);
          }
        }
        catch(error){
          setDataStatus(statusOne.FAILED);
        }
        }
      getRestaurantData();
    }
  

    if(dataStatus === statusOne.FAILED){
        return(
          <div className='dash-initial-cont dash-error-cont'>
            <h1 className='dash-error-head'>ERR<span className='dash-error-head-o'>O</span>R</h1>
            <img src={error} alt="error" className='dash-error-img' />
            <p className='dash-error-p'>Something went wrong</p>
            <button type='button' onClick={onClickRetry} className='dash-error-button'>Retry</button>
          </div>
        )
      }

      const mainBox = () => {
        if(currentMenu === 1){
          return <Dashboard />
        }else if(currentMenu === 2){
          return <Orders />
        }else if(currentMenu === 3){
          return <MenuPage />
        }else if(currentMenu === 4){
          return <Tables />
        }else if(currentMenu === 5){
          // return <WaiterRequests />
        }else if(currentMenu === 6){
          // return <POS />
        }else if(currentMenu === 7){
          // return <Staff />
        }else if(currentMenu === 8){
          // return <Reservations />
        }else if(currentMenu === 9){
          // return <Payments />
        }else if(currentMenu === 10){
          // return <Settings />
        }
        return <Dashboard />

      }
      

  return (
    <AllInOne.Provider value = {{userId, restaurantDetails: restaurantData, menuData, menuDataStatus, tablesData, tablesDataStatus, areasData, areasDataStatus}}>
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
          {mainBox()}

        </div>
      </div>
    </AllInOne.Provider>

  )
}

export default RestaurantDashboard
