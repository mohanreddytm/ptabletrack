import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";
import AllInOne from "../../../complexOne";
import noImage from '../../../images/noimage.png'
import { IoMdTime } from "react-icons/io";

import { FaIceCream, FaCoffee, FaHamburger, FaStar, FaUtensils } from "react-icons/fa";



import { MdDeleteForever } from "react-icons/md";

import ChickenBurger from '../../../images/burger.jpg'

import './index.css'

const MenuPage = () => {
    const {menuData, menuDataStatus} = useContext(AllInOne);
    console.log(menuData);
    return(
        <div className="menu-page-main-cont">
            <div className="menu-page-main-cont-one">
                <h1 className="menu-page-main-cont-one-head">Menu</h1>
                <button className="menu-page-main-cont-one-button">Add Menu</button>
            </div>
            <div className="menu-page-main-cont-one-select-cont">
                <h1 className="menu-page-main-cont-one-select-cont-head">Filter</h1>
                <div className="menu-page-main-cont-one-input-cont">
                    <input type="search" placeholder="Search" className="menu-page-main-cont-one-input" />
                    <div className="menu-page-main-cont-one-input-icon-cont">
                        <IoIosSearch className="menu-page-main-cont-one-input-icon" />
                    </div>
                </div>
            </div>
            <div className="menu-page-main-cont-one-select-cont-main">
                <div className="menu-page-main-cont-one-select-cont-one">
                    <h1 className="menu-page-main-cont-one-select-cont-one-head">Sort By</h1>
                    <select className="menu-page-main-cont-one-select-cont-one-select">
                        <option>Sort By</option>
                        <option>Price - Low to High</option>
                        <option>Price - High to Low</option>
                        <option>Rating - Low to High</option>
                        <option>Rating - High to Low</option>
                        <option>Name - A to Z</option>
                        <option>Name - Z to A</option>
                        <option>Newest First</option>
                        <option>Oldest First</option>
                    </select>
                    <h1 className="menu-page-main-cont-one-select-cont-one-head">Category</h1>
                    <ul className="menu-page-main-cont-one-select-cont-one-ul">
                        <li> <input type="checkbox" /> Starters</li>
                        <li> <input type="checkbox" /> Main Course</li>
                        <li> <input type="checkbox" /> Desserts</li>
                        <li> <input type="checkbox" /> Beverages</li>
                        <li> <input type="checkbox" /> Snacks</li>
                        <li> <input type="checkbox" /> Other</li>
                    </ul>
                    <h1 className="menu-page-main-cont-one-select-cont-one-head">Item Type</h1>
                    <ul className="menu-page-main-cont-one-select-cont-one-ul">
                        <li> <input type="checkbox" /> Veg</li>
                        <li> <input type="checkbox" /> Non-Veg</li>
                        <li> <input type="checkbox" /> Vegan</li>

                        <li> <input type="checkbox" /> Dairy-Free</li>
                    </ul>

                </div>
                <div className="menu-page-main-cont-one-select-cont-two">
                    <ul className="menu-page-main-cont-one-select-cont-two-ul">
                        {menuDataStatus === "loading" && <h1>Loading...</h1>}
                        {menuDataStatus === "error" && <h1>Error</h1>}
                        {menuDataStatus === "success" && menuData.length === 0 && <h1>No data found</h1>}
                        {menuData.length > 0 && menuData.map((eachItem) => {
                            const itemType = eachItem.category_name === 'Desserts' ? <FaIceCream /> : eachItem.category_name === 'Beverage' ? <FaCoffee /> : eachItem.category_name === 'Snacks' ? <FaHamburger /> : eachItem.category_name === 'Starters' ? <FaStar /> : eachItem.category_name === 'Main Course' ? <FaUtensils /> : <FaUtensils />;
                            if(!eachItem.image_url){
                                return (
                                <li key={eachItem.id}>
                                                                    <div className="menu-page-main-cont-one-select-cont-two-img-cont">
                                    <p className="menu-page-main-cont-one-select-cont-two-img-icon">{itemType}</p>
                                </div>
                                    <div className="menu-page-main-cont-one-select-no-image-cont">
                                        <img className="menu-page-main-cont-one-select-no-image" src={noImage} alt="item" />
                                    </div>
                                    <h1 className="menu-page-main-cont-one-select-cont-two-h1">{eachItem.item_name}</h1>
                                    <p className="menu-page-main-cont-one-select-cont-two-p"> Price: ₹ {eachItem.price}</p>
                                    <p className="menu-page-main-cont-one-select-cont-two-p">Category: {eachItem.category_name} {itemType}</p>
                                    <p className="menu-page-main-cont-one-select-cont-two-p">Item Type: {eachItem.item_category}</p>
                                    <div className="menu-page-main-cont-one-select-cont-two-p-cont">
                                        <h1 className="menu-page-main-cont-one-select-cont-two-p-cont-h1">{eachItem.availability === "Yes" ? "Available" : "Not Available"}</h1>
                                        <p className="menu-page-main-cont-one-select-cont-two-p-cont-p"><IoMdTime /> {eachItem.preparation_time} m</p>
                                    </div>
                                    <div className="menu-page-main-cont-one-select-cont-two-button-cont">
                                        <button className="menu-page-main-cont-one-select-cont-two-button">Edit</button>
                                        <button className="menu-page-main-cont-one-select-cont-two-delete-button"><MdDeleteForever /></button>
                                    </div>

                                </li>
                                )
                            }
                            return <li key={eachItem.id}>
                                <div className="menu-page-main-cont-one-select-cont-two-img-cont">
                                    <p className="menu-page-main-cont-one-select-cont-two-img-icon">{itemType}</p>
                                </div>
                                <img className="menu-page-main-cont-one-select-cont-two-img" src={eachItem.image_url} alt="item" />
                                <h1 className="menu-page-main-cont-one-select-cont-two-h1">{eachItem.item_name}</h1>
                                <p className="menu-page-main-cont-one-select-cont-two-p"> Price: ₹ {eachItem.price}</p>
                                <p className="menu-page-main-cont-one-select-cont-two-p">Category: {eachItem.category_name} {itemType}</p>
                                <p className="menu-page-main-cont-one-select-cont-two-p">Item Type: {eachItem.item_category}</p>
                                <div className="menu-page-main-cont-one-select-cont-two-p-cont">
                                        <h1 className="menu-page-main-cont-one-select-cont-two-p-cont-h1">{eachItem.availability === "Yes" ? "Available" : "Not Available"}</h1>
                                        <p className="menu-page-main-cont-one-select-cont-two-p-cont-p"><IoMdTime /> {eachItem.preparation_time} m</p>
                                    </div>
                                <div className="menu-page-main-cont-one-select-cont-two-button-cont">
                                    <button className="menu-page-main-cont-one-select-cont-two-button">Edit</button>
                                    <button className="menu-page-main-cont-one-select-cont-two-delete-button"><MdDeleteForever /></button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default MenuPage