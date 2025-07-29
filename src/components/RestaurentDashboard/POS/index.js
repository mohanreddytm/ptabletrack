import { useEffect } from "react";
import './index.css';

const POSPage = () => {
    return (
        <div className="menu-page-main-cont pos-page-main-cont">
            <div className="pos-page-main-cont-one">
                <div className="pos-page-main-cont-one-search-cont">
                    <input type="text" placeholder="Search" className="pos-page-main-cont-one-search-input" />
                    <button type="button" className="pos-page-main-cont-one-search-button">Reset</button>
                    
                </div>
                <ul className="pos-page-main-cont-one-search-ul">
                    <li>Show All</li>
                    <li>Starters</li>
                    <li>Main Course</li>
                    <li>Desserts</li>
                    <li>Beverages</li>
                    <li>Snacks</li>
                    <li>Dairy-Free</li>
                    <li>Non-Veg</li>
                </ul>
                <ul>
                    <li>
                        <img src="" alt="" />
                        <h1>Chicken Burger</h1>
                        <p>100</p>
                    </li>
                </ul>
            </div>
            <div>
                <h1>Order One ha</h1>
            </div>
        </div>
    )
}

export default POSPage;