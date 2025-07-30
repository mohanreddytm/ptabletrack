import { useEffect, useContext, useState } from "react";
import './index.css';
import AllInOne  from "../../../complexOne";
import noImage from '../../../images/noimage.png'
import { MdNoteAlt, MdDiscount, MdDeleteForever } from "react-icons/md";
const POSPage = () => {

    const { menuData } = useContext(AllInOne);

    const [search, setSearch] = useState('');
    const [showAll, setShowAll] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [order, setOrder] = useState([]);

    const [orderItems, setOrderItems] = useState([]);


    const onClickItem = (item) => {
        const requiredDetails = {
            id: item.id,
            name: item.item_name,
            price: item.price,
            quantity: 1
        }
        const isItemAlreadyInOrder = orderItems.some(orderItem => orderItem.id === item.id);    
        if(isItemAlreadyInOrder){
            setOrderItems(orderItems.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem));
        }else{
            setOrderItems([...orderItems, requiredDetails]);
        }
    }

    const onClickDeleteItem = (id) => {
        setOrderItems(orderItems.filter(item => item.id !== id));
    }
    
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
                <ul className="pos-page-main-cont-one-search-ul-two">
                    {menuData.length > 0 ? menuData.map((item) => {
                        let imageone = item.image_url;
                        if(!imageone){
                            imageone = noImage;
                        }
                        return( 
                        <li key={item.id} onClick={() => onClickItem(item)}>
                            <img className="pos-page-main-cont-one-search-ul-img" src={imageone} alt={item.name} />
                            <h1 className="pos-page-main-cont-one-search-ul-h1">{item.item_name}</h1>
                            <p className="pos-page-main-cont-one-search-ul-p">₹ {item.price}</p>
                            <p className="pos-page-main-cont-one-search-ul-p-two">Add</p>
                        </li>
                        )
                        }
                    ) : <li>No data found</li>}
                </ul>
            </div>
            <div className="pos-page-main-cont-two">
                <h1 className="pos-page-main-cont-two-h1">New Order</h1>
                <div className="pos-page-main-cont-two-h1-two">
                    <button className="pos-page-main-cont-two-h1-two-button">Assign Table</button>
                    <div className="tooltip-container">
                        <MdNoteAlt className="pos-page-main-cont-two-h1-two-button-icon"  />
                        <span className="tooltip">note</span>
                    </div>
                    <button className="pos-page-main-cont-two-h1-two-button-two">Assign Waiter</button>
                </div>
                <table className="pos-page-main-cont-two-table">
                    <thead >
                        <tr className="pos-page-main-cont-two-table-thead-tr">
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItems.map((item) => {
                            return(
                                <tr className="pos-page-main-cont-two-table-tbody-tr"  key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹ {item.price}</td>
                                    <td>₹ {item.price * item.quantity}</td>
                                    <td><button onClick={() => onClickDeleteItem(item.id)} className="pos-page-main-cont-two-table-tbody-tr-button"><MdDeleteForever /></button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {orderItems.length === 0 &&                 <div className="pos-page-main-cont-two-table-tbody-div">
                    <p>Please select an item to add <br/> to the order !</p>
                </div>   }
 
                <div className="pos-page-main-cont-two-table-tbody">
                    <button className="pos-page-main-cont-two-table-tbody-button"><MdDiscount /> Add Discount</button>
                    <div>
                        <p>Item(s)</p>
                        <p>1</p>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <p>₹ 100</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>₹ 10</p>
                    </div>
                    <div>
                        <p>Tax</p>
                        <p>₹ 10</p>
                    </div>
                    <div className="pos-page-main-cont-two-table-tbody-button-cont-two-total">
                        <p>Total</p>
                        <p>₹ 100</p>
                    </div>
                </div>
                
                <div className="pos-page-main-cont-two-table-tbody-button-cont">
                    <button>KOT</button>
                    <button>KOT & Print</button>
                    <button>KOT , Bill & Print</button>
                </div>
                <div className="pos-page-main-cont-two-table-tbody-button-cont-two">

                    <button className="pos-page-b-c-two">Bill & Print</button>
                    <button className="pos-page-b-c-one">Bill</button>
                    <button className="pos-page-b-c-two">Bill & Payment</button>

                </div>

            </div>
        </div>
    )
}

export default POSPage;