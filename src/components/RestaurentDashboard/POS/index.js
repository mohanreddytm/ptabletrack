import { useEffect, useContext, useState } from "react";
import './index.css';
import AllInOne  from "../../../complexOne";
import noImage from '../../../images/noimage.png'
import waiterlogo from '../../../images/waiter.png';
import { MdNoteAlt, MdDiscount, MdDeleteForever } from "react-icons/md";
const POSPage = () => {

    const {tablesData, menuData, menuCategories, addMenuInPOS} = useContext(AllInOne);
    const [menuDataInPOS, setMenuDataInPOS] = useState([]);

    const [search, setSearch] = useState('');
    const [showAll, setShowAll] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [order, setOrder] = useState([]);

    const [showSelectedOne, setShowSelectedOne] = useState("all");
    const [discountAmount, setDiscountAmount] = useState(0);
    const [showSelectTable, setShowSelectTable] = useState(false);
    const [showAssignPopup, setShowAssignPopup] = useState(false);
    const [orderItems, setOrderItems] = useState([]);

    const [selectedWaiter, setSelectedWaiter] = useState(null);
    const [selectedTable, setSelectedTable] = useState(null);

    const [isOpenNoteOne, setIsOpenNoteOne] = useState(false);
    const [noteText, setNoteText] = useState('');

    const [isOpenPopupDiscount, setIsOpenPopupDiscount] = useState(false);
    const [finalDiscountNumber, setFinalDiscountNumber] = useState('');
    const [finalDiscountType, setFinalDiscountType] = useState('Percentage');

    useEffect(() => {
        if(menuData.length > 0){
            const one = menuData.filter(item => item.availability === "Yes");
            setMenuDataInPOS(one);
        }
    }, [menuData]);


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

    // const onChangeSearchInput = (e) => {
    //     setSearch(e.target.value);
    //     const filtered = menuDataInPOS.filter(item => item.item_name.toLowerCase().includes(e.target.value.toLowerCase()));
    //     setMenuDataInPOS(filtered);
    // }

    const onClickResetBtn = () => {
        setSearch('');
        setShowSelectedOne('all');
    }

    const onClickWaiter = (waiter) => {
        setSelectedWaiter(waiter);
        setShowAssignPopup(false);
    }

    const assignPopup = () => {
        const waitersDefault = [
            {
                id:1,
                name: "John Doe",
                status:"Available"
            },
            {
                id:2,
                name: "Jane Smith",
                status:"Serving"
            },
            {
                id:3,
                name: "Alice Johnson",
                status:"Available"
            }
        ]
        return (
            <div className={`select-table-popup-in-pos ${showAssignPopup ? "show-table-popup-one" : ""}`}>
                <div className="select-table-popup-content select-waiter-popup-addone">
                    <h1 className="main-head-select-tables">Assign Waiter</h1>
                    <ul className="select-table-popup-list-assign-waiter">
                        {waitersDefault.map((waiter) => (
                            <li onClick={() => onClickWaiter(waiter)} key={waiter.id}>
                                <img src={waiterlogo} alt="waiter" />
                                {waiter.name}
                                 <p>- {waiter.status}</p>
                            </li>
                        ))}
                    </ul>
                    <button className="select-table-popup-cancel-button" onClick={() => setShowAssignPopup(false)}>Cancel</button>
                </div>
            </div>
        )
    }

    const onClickTable = (table) => {
        setSelectedTable(table);
        setShowSelectTable(false)
    }

    const selectTablePopUp = () => {
        return <div className={`select-table-popup-in-pos ${showSelectTable ? "show-table-popup-one" : ""}`}>
            <div className="select-table-popup-content">
                <h1 className="main-head-select-tables">Select Table</h1>
                <ul className="select-table-popup-list">
                    {tablesData.length > 0 && tablesData.map((each) => (
                        each.tables.length > 0 && <li key={each.name}>
                            <h1 className="main-head-select-tables-inner">{each.name} - {each.tables.length}</h1>
                            <ul className="select-table-popup-list-inner">
                                {each.tables.map((table) => (
                                    <li onClick={() => onClickTable(table)} key={table.id}>
                                        <h1 className="main-head-select-tables-inner">{table.name}</h1>
                                        <p className="main-head-select-tables-inner-seat-capacity"><span>{table.seat_capacity}</span> Seats</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <button className="select-table-popup-cancel-button" onClick={() => setShowSelectTable(false)}>Cancel</button>
            </div>
        </div>
    }

    const onClickApplyDiscount = (a,b) => {
        setFinalDiscountNumber(a)
        setFinalDiscountType(b)
        setIsOpenPopupDiscount(false)
    }

    const DiscountFuc = () => 
    {
        const [discountNumber, setDiscountNumber] = useState("");
        const [discountType, setDiscountType] = useState("Percentage");
        return (
            <div className={`discount-popup ${isOpenPopupDiscount ? "show-table-popup-one" : ""}`}>
                <div className="discount-popup-content">
                    <h1>Discount</h1>
                    <p>Apply a discount code to get a special offer!</p>
                    <div>
                        <input value={discountNumber} onChange={(e) => setDiscountNumber(e.target.value)} className="discount-input" type="number" placeholder="Enter discount amount"  />
                        <select value={discountType} onChange={(e) => setDiscountType(e.target.value)} className="discount-select">
                            <option id="percentage">Percentage</option>
                            <option id="fixed-amount">Fixed Amount</option>
                        </select>
                    </div>
                    <div className="discount-popup-actions">
                        <button onClick={() => setIsOpenPopupDiscount(false)} className="discount-cancel-button">Cancel</button>
                        <button onClick={() => onClickApplyDiscount(discountNumber, discountType)} className="discount-apply-button">Apply</button>
                    </div>

                </div>

            </div>
        )
    }


    useEffect(() => {
        if(menuData.length > 0) {
            const filteredOne = menuData.filter(item => {
                const isAvailable = item.availability === "Yes";
                const matchesSearch = item.item_name.toLowerCase().includes(search.toLowerCase());
                const filterName = showSelectedOne === "all" || item.menu_category_id === showSelectedOne;
                return isAvailable && matchesSearch && filterName;
            });
            setMenuDataInPOS(filteredOne);
        }
    }, [showSelectedOne, menuData, search]);


    const onClickMinusMenuItem = (id) => {
        return () => {
            setOrderItems(orderItems.map(item => item.id === id ? {...item, quantity: Math.max(1, item.quantity - 1)} : item));


        }
    }

    const onClickPlusMenuItem = (id) => {
        return () => {
            setOrderItems(orderItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
        }
    }

    const onClickAssignTable = () => {
        setShowSelectTable(true);
    }

    return (
        <div className="menu-page-main-cont pos-page-main-cont">
            {selectTablePopUp()}
            {assignPopup()}
            {DiscountFuc()}
            <div className="pos-page-main-cont-one">
                <div className="pos-page-main-cont-one-search-cont">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="pos-page-main-cont-one-search-input" />
                    <button type="button" className="pos-page-main-cont-one-search-button" onClick={onClickResetBtn}>Reset</button>
                </div>
                <ul className="pos-page-main-cont-one-search-ul">
                    <li onClick={() => setShowSelectedOne("all")} className={showSelectedOne === "all" ? "present-one" : ""}>Show All</li>
                    {menuCategories.length > 0 && menuCategories.map((category) => (
                        <li onClick={() => setShowSelectedOne(category.id)} className={showSelectedOne === category.id ? "present-one" : ""} key={category.id}>{category.menu_category_name}</li>
                    ))}
                </ul>
                <ul className="pos-page-main-cont-one-search-ul-two">
                    {menuDataInPOS.length > 0 ? menuDataInPOS.map((item) => {
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
                    }): <div className="pos-page-main-cont-one-search-ul-no-items">
                            <h1>No Items Found</h1>
                            <button onClick={addMenuInPOS}>Add Item</button>
                        </div>
                        }      
                </ul>
            </div>
            <div className="pos-page-main-cont-two">
                {/* need to do for the width adapt */}
                <h1 className="pos-page-main-cont-two-h1">New Order</h1>
                <div className="pos-page-main-cont-two-h1-two" >
                    <button onClick={onClickAssignTable} className="pos-page-main-cont-two-h1-two-button">{selectedTable === null ? "Assign Table" : selectedTable.name}</button>
                    <div className="tooltip-container">
                        <MdNoteAlt onClick={() => setIsOpenNoteOne(true)} className="pos-page-main-cont-two-h1-two-button-icon"  />
                        <span className="tooltip">note</span>
                    </div>
                    <button className="pos-page-main-cont-two-h1-two-button-two" onClick={() => setShowAssignPopup(true)}>{selectedWaiter === null ? "Assign Waiter" : selectedWaiter.name}</button>
                    <div className={`pos-page-main-cont-two-note-cont ${isOpenNoteOne ? 'open-note-input-one' : ''}`}>
                        <input type="text" placeholder="Enter Note Here" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
                        <button>Add Note</button>
                        <p onClick={() => setIsOpenNoteOne(false)}>x</p>
                    </div>
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
                                    <td><p className="pos-page-main-cont-two-table-tbody-tr-name">{item.name}</p></td>
                                    <td><div className="pos-page-main-cont-two-table-tbody-tr-qty">
                                        <p onClick={onClickMinusMenuItem(item.id)}>-</p>
                                        {item.quantity}
                                        <p onClick={onClickPlusMenuItem(item.id)}>+</p>
                                        </div></td>
                                    <td>₹ {item.price}</td>
                                    <td>₹ {item.price * item.quantity}</td>
                                    <td><button onClick={() => onClickDeleteItem(item.id)} className="pos-page-main-cont-two-table-tbody-tr-button"><MdDeleteForever /></button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {orderItems.length === 0 && <div className="pos-page-main-cont-two-table-tbody-div">
                    <p>Please select an item to add <br/> to the order !</p>
                </div>   }
 
                <div className="pos-page-main-cont-two-table-tbody">
                    <div className="pos-page-main-cont-two-table-tbody-button-cont-one">
                        <button onClick={() => setIsOpenPopupDiscount(true)} className="pos-page-main-cont-two-table-tbody-button"><MdDiscount /> Add Discount</button>
                        <button className="pos-page-main-cont-two-table-tbody-button">Tax Mode</button>
                    </div>

                        <div>
                        <p>Item(s)</p>
                        <p>{orderItems.length}</p>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <p>₹ {orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>₹ {finalDiscountType == "Percentage" ? (orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * finalDiscountNumber / 100).toFixed(2) : finalDiscountNumber}</p>
                    </div>
                    <div>
                        <p>Tax</p>
                        <p>₹ {(orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.1).toFixed(2)}</p>
                    </div>
                    <div className="pos-page-main-cont-two-table-tbody-button-cont-two-total">
                        <p>Total</p>
                        <p>₹ {(orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + (orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.1) - (finalDiscountType == "Percentage" ? (orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * finalDiscountNumber / 100).toFixed(2) : finalDiscountNumber)).toFixed(2)}</p>
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