import React from 'react'

import { useState, useEffect, useContext } from 'react';
import './index.css'
import { IoHomeOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

import { BiSolidDish } from "react-icons/bi";

import MenuItemsContainer from '../MenuItemsContainer';
import ComplexCustomer from '../../../complexOneForCustomer';

const MainPage = () => {
  const params = useParams();
  console.log(params)

  const [menuItems, setMenuItems] = useState([])
  const [restaurantDetails, setRestaurantDetails] = useState('');
 
  // const {restaurantId} = useContext(AllInOne)
  
  // console.log("goted url", restaurantId)

  useEffect(() => {
    const fetchMenuItems = async () => {
      console.log(params.restaurantId);
      const url = `https://ttbackone-v48h.onrender.com/getMenuItems/${params.restaurantId}`;
      const response = await fetch(url);
      if(response.ok){
        const jsonOne = await response.json()
        setMenuItems(jsonOne);
      }else{
        console.log("error occur")
      }
    }
    fetchMenuItems();

    const getRestaurantDetails = async () => {
      const url = `https://ttbackone-v48h.onrender.com/restaurant/${params.restaurantId}`;
      const response = await fetch(url);
      if(response.ok){
        const jsonOne = await response.json();
        setRestaurantDetails(jsonOne[0]);
      }else{
        console.log('error occur')
      }
    }

    getRestaurantDetails()
  } , []);



  return (
    <ComplexCustomer.Provider value={{restaurantId : params.restaurantId, menuItems}}>
      <div className='customer-main-dashboard'>
        <div className='customer-main-title-cont'>
          <h1 className='customer-main-title'><span>A</span>{restaurantDetails.restaurentname}</h1>
          <FaCartArrowDown />
        </div>

        <div className='customer-main-search-engine'>
          <input type='search'
          placeholder='Search Food Item' />
          <select>
            <option>
              Sort By--
            </option>
          </select>
        </div>

        <MenuItemsContainer />

        <footer>
          <IoHomeOutline />
          <CiFilter />
          <div>
            <BiSolidDish /> 
            <p>orders</p>           
          </div>

          <MdFavoriteBorder />
          <IoMdMenu />
        </footer>
      </div>
    </ComplexCustomer.Provider>

  )
}

export default MainPage
