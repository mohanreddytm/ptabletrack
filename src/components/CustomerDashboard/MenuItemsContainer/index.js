import ComplexCustomer from "../../../complexOneForCustomer";

import { useContext, useState, useEffect } from "react";
import './index.css'
import noImageFood from '../../../images/serving-dish_3651752.png'

const MenuItemsContainer = () => {
    const {menuItems} = useContext(ComplexCustomer);
    console.log(menuItems)
    return (
        <ul className="customar-menu-items">
            {menuItems.length > 0 && menuItems.map(item => (
                <li key={item.id}>
                    <div className="customar-menu-content-top-one">
                        <div className="customar-menu-left-content">
                            <h1 className="customar-menu-item-name">{item.item_name}</h1>
                            <p className="customar-menu-item-desc">{item.item_dec}</p>
                        </div>
                        {item.image_url == "" ? 
                        <div className="customar-no-image-cont">
                            <img src={noImageFood} alt="empty image" />
                        </div> : <img src={item.image_url} alt="food item"/>}
                    </div>
                    <div className="customar-menu-content-bottom-one">
                        <p className="price-value">₹{item.price}</p>
                        <button className="customer-add-item-button">Add Item</button>
                    </div>


                </li>
            ))}

        </ul>
    )
}

export default MenuItemsContainer