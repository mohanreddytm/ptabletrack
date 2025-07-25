import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";

import { MdDeleteForever } from "react-icons/md";

import ChickenBurger from '../../../images/burger.jpg'

import './index.css'

const MenuPage = () => {
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
                    <table className="menu-page-main-cont-one-select-cont-two-table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price - ₹</th>
                                <th>Is Available</th>
                                <th>Category</th>
                                <th>Item Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item</td>
                                <td>350</td>
                                <td>Yes</td>
                                <td>Starters</td>
                                <td>Veg</td>
                                <td className="menu-page-main-cont-one-select-cont-two-table-td-button-cont">
                                    <button className="menu-page-main-cont-one-select-cont-two-table-button">Edit</button>
                                    <button className="menu-page-main-cont-one-select-cont-two-table-delete-button"><MdDeleteForever /></button>
                                </td>
                            </tr><tr>
                                <td className="menu-page-main-cont-one-select-cont-two-table-td"><img className="menu-page-main-cont-one-select-cont-two-table-img" src={ChickenBurger} alt="item" /> <h1 className="menu-page-main-cont-one-select-cont-two-table-h1">Chicken Burger</h1></td>
                                <td>460</td>
                                <td>Yes</td>
                                <td>Starters</td>
                                <td>Veg</td>
                                <td className="menu-page-main-cont-one-select-cont-two-table-td-button-cont">
                                    <button className="menu-page-main-cont-one-select-cont-two-table-button">Edit</button>
                                    <button className="menu-page-main-cont-one-select-cont-two-table-delete-button"><MdDeleteForever /></button>
                                </td>
                            </tr><tr>
                                <td>Item</td>
                                <td>990</td>
                                <td>Yes</td>
                                <td>Starters</td>
                                <td>Veg</td>
                                <td className="menu-page-main-cont-one-select-cont-two-table-td-button-cont">
                                    <button className="menu-page-main-cont-one-select-cont-two-table-button">Edit</button>
                                    <button className="menu-page-main-cont-one-select-cont-two-table-delete-button"><MdDeleteForever /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default MenuPage