import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";
import AllInOne from "../../../complexOne";
import noImage from '../../../images/noimage.png'
import { IoMdTime } from "react-icons/io";


import { v4 as uuidv4 } from 'uuid';

import { FaIceCream, FaCoffee, FaHamburger, FaStar, FaUtensils } from "react-icons/fa";

import { MdEdit } from "react-icons/md";


import FileImage from '../../GetMoreInforRest/style'

import { ClipLoader } from "react-spinners";




import { MdDeleteForever } from "react-icons/md";

import ChickenBurger from '../../../images/burger.jpg'

import './index.css'

const categories = [
    { id: 1, name: "Starters", count : 4 },
    { id: 2, name: "Main Course", count : 6 },
    { id: 3, name: "Desserts", count : 2 },
    { id: 4, name: "Beverages", count : 5 },
    { id: 5, name: "Snacks", count : 3 },
    { id: 6, name: "Other", count : 1 }
]

const MenuPage = () => {
    const {menuData, menuDataStatus, menuCategories, menuCategoriesStatus, userId} = useContext(AllInOne);

    console.log("menu cats",menuCategories);
    console.log(menuCategoriesStatus);

    const [toAddNewOne , setToAddNewOne] = useState(false);


    const [currentTab, setCurrentTab] = useState("text");
    console.log(menuData);

    const [editItem, setEditItem] = useState(null);

    const [imageLoading, setImageLoading] = useState(false);


    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [newItemCategory, setNewItemCategory] = useState('');
    const [newItemType, setNewItemType] = useState('');
    const [newItemDescription, setNewItemDescription] = useState('');
    const [newItemPrepTime, setNewItemPrepTime] = useState('');
    const [newItemAvailability, setNewItemAvailability] = useState('Yes');
    const [newItemImage, setNewItemImage] = useState('');

    // console.log(editItem);

    const onClickEditButton = (x) => {
        console.log(x)
        setEditItem(x)
    }



    const handleAvailabilityChange = (isAvailable) => {
        setEditItem((prevItem) => ({    
            ...prevItem,
            availability: isAvailable ? "Yes" : "No"
        }));
    }

    const onChangeFileName = async (event) => {
        setImageLoading(true);
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my_preset"); // <-- your unsigned upload preset name

        const res = await fetch(
        "https://api.cloudinary.com/v1_1/dbrwqjsl3/image/upload",
        { method: "POST", body: formData }
        );
        const data = await res.json();
        if(toAddNewOne){
            setNewItemImage(data.secure_url);
            setImageLoading(false);
        }else{
            setImageLoading(false);
            setEditItem((prevItem) => ({
            ...prevItem,
            image_url: data.secure_url // <-- update the image URL in the state
        }));
        }
 
      };

    const onSubmitEditItem = (e) => {
        e.preventDefault();
    }

    const onSubmitAddItem = async (e) => {
        e.preventDefault();
        const catergoryName = menuCategories.filter((each) => each.id === newItemCategory);
        const newItem = [{
            item_id: uuidv4(),
            item_name: newItemName,
            item_price: newItemPrice,
            category_name: catergoryName[0].menu_category_name,
            item_category: newItemType,
            item_dec: newItemDescription,
            item_preparation_time: newItemPrepTime,
            item_availabiliy: newItemAvailability ? "Yes" : "No",
            item_url: newItemImage,
            item_menu_category_id: newItemCategory,
            restaurant_id: userId,
        }];

        const url = "https://ttbackone-v48h.onrender.com/restaurant_details/addMenuItems"
        const options = 
        {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body:JSON.stringify(newItem)
        }

        const response = await fetch(url, options);
        console.log('not here')
        if(response.ok){
            setToAddNewOne(false);
            setNewItemName('');
            setNewItemPrice('');
            setNewItemCategory('');
            setNewItemType('');
            setNewItemDescription('');
            setNewItemPrepTime('');
            setNewItemAvailability('Yes');
            setNewItemImage('');
        }else{
            console.error("Failed to add new item");
        }
        const jsondata = await response.json();
        console.log(jsondata);
    }

    return(
        <div className="menu-page-main-cont">
            <div className="menu-page-main-cont-one">
                <h1 className="menu-page-main-cont-one-head">Menu</h1>
                {/* <button className="menu-page-main-cont-one-button">Add Menu</button> */}
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
                    <div className="menu-page-main-cont-buttons-cont">
                        <div>
                            <button onClick={() => setCurrentTab("text")} className={`${currentTab !== "text" && 'not-current-tab-menu'}`}>Items</button>
                            <button onClick={() => setCurrentTab("category")} className={`${currentTab !== "category" && 'not-current-tab-menu'}`}>Categories</button>
                        </div>
                        { currentTab === "text" ? <button onClick={() => setToAddNewOne(true)} className="add-menu-item-button">Add Item</button>: <button className="add-menu-item-button">Add Category</button>}
                    </div>
                    {currentTab === "text" ?                     <ul className="menu-page-main-cont-one-select-cont-two-ul">
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
                                        <button onClick={() => onClickEditButton(eachItem)} className="menu-page-main-cont-one-select-cont-two-button">Edit</button>
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
                                    <button onClick={() => onClickEditButton(eachItem)} className="menu-page-main-cont-one-select-cont-two-button">Edit</button>
                                    <button className="menu-page-main-cont-one-select-cont-two-delete-button"><MdDeleteForever /></button>
                                </div>
                            </li>
                        })}
                    </ul> : 
                    <ul className="menu-page-main-cont-one-select-cont-two-category-ul">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <div className="menu-page-main-cont-one-select-cont-two-category-icon">
                                    {category.name === "Starters" ? <FaStar /> : category.name === "Main Course" ? <FaUtensils /> : category.name === "Desserts" ? <FaIceCream /> : category.name === "Beverages" ? <FaCoffee /> : category.name === "Snacks" ? <FaHamburger /> : <FaUtensils />}
                                    <h1 className="menu-page-main-cont-one-select-cont-two-category-name">{category.name}</h1>
                                </div>
                                <h1 className="menu-page-main-cont-one-select-cont-two-category-item-count"><span>{category.count}</span> Items</h1>
                                <div className="menu-page-main-cont-one-select-cont-two-category-button-cont">
                                    <button className="menu-page-main-cont-one-select-cont-two-category-edit-button"><MdEdit /></button>
                                    <button className="menu-page-main-cont-one-select-cont-two-category-delete-button"><MdDeleteForever /></button>
                                </div>
                            </li>
                        ))}
                    </ul> }

                </div>
            </div>
            <div className={`menu-page-main-cont-one-select-cont-two-pop-up ${editItem !== null && "show-pop-up"}`}>
                <form onSubmit={onSubmitEditItem}>
                    <h1 className="menu-page-main-cont-one-select-cont-two-pop-up-head">Edit Item</h1>
                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                        <label htmlFor="item-name">Item Name</label>
                        <input required type="text" id="item-name" value={editItem?.item_name || ""} onChange={(e) => setEditItem({ ...editItem, item_name: e.target.value })} placeholder="Enter item name" />
                    </div>
                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                        <label htmlFor="item-price">Item Price</label>
                        <input required type="number" id="item-price" value={editItem?.price || ""} onChange={(e) => setEditItem({ ...editItem, price: e.target.value })} placeholder="Enter item price" />
                    </div>
                    <div className="menu-page-main-cont-one-select-form-category-cont">
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-category">Item Category</label>
                            <select id="item-category" value={editItem?.category_name || ""} onChange={(e) => setEditItem({ ...editItem, category_name: e.target.value })}>
                                {menuCategories.map(category => (
                                    <option key={category.id} value={category.id}>{category.menu_category_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-type">Item Type</label>
                            <select id="item-type" value={editItem?.item_type || ""} onChange={(e) => setEditItem({ ...editItem, item_type: e.target.value })}>
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-Veg</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Dairy-Free">Dairy-Free</option>
                                <option value="Gluten-Free">Gluten-Free</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                        <label htmlFor="item-des">Description</label>
                        <textarea required id="item-des" value={editItem?.item_dec || ""} onChange={(e) => setEditItem({ ...editItem, item_dec: e.target.value })} placeholder="Enter item description"></textarea>
                    </div>
                    <div className="menu-page-main-cont-one-select-form-category-cont">
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-prep-time">Preparation time</label>
                            <input required type="text" id="item-prep-time" value={editItem?.preparation_time || ""} onChange={(e) => setEditItem({ ...editItem, preparation_time: e.target.value })} placeholder="Enter preparation time" />
                        </div>
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-availability">Availability</label>
                            <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont-availability">
                                <button type="button" onClick={() => handleAvailabilityChange(true)} className={`${editItem?.availability === "Yes" && "yes-style-btn"}`}>Yes</button>
                                <button type="button" onClick={() => handleAvailabilityChange(false)} className={`${editItem?.availability === "No" && "no-style-btn"}`}>No</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-page-main-cont-one-select-form-category-cont">
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-image">Item Image</label>
                            <input type="file" id="item-image" accept="image/*" onChange={onChangeFileName} />
                        </div>
                        <FileImage image={editItem?.image_url || noImage} className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont-image">
                            {imageLoading && <ClipLoader 
                                color="#952a88"
                                loading={imageLoading}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader" />}
                        </FileImage>
                    </div>

                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-button-cont">
                        <button type="submit" className="menu-page-main-cont-one-select-cont-two-pop-up-button">Save Changes</button>
                        <button type="button" onClick={() => setEditItem(null)} className="menu-page-main-cont-one-select-cont-two-pop-up-button cancel-button">Cancel</button>
                    </div>

                </form>
            </div>

            <div className={`menu-page-main-cont-one-select-cont-two-pop-up ${toAddNewOne&& "show-pop-up"}`}>
                <form onSubmit={onSubmitAddItem}>
                    <h1 className="menu-page-main-cont-one-select-cont-two-pop-up-head">Add Item</h1>
                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                        <label htmlFor="item-name">Name</label>
                        <input required type="text" id="item-name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="Enter item name" />
                    </div>
                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                        <label htmlFor="item-price">Price</label>
                        <input required type="number" id="item-price" value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)} placeholder="Enter item price" />
                    </div>
                    <div className="menu-page-main-cont-one-select-form-category-cont">
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-category">Category</label>
                            <select id="item-category" required value={newItemCategory} onChange={(e) => setNewItemCategory(e.target.value)}>
                                <option value="">Select Category</option>
                                {menuCategories.map(category => (
                                    <option key={category.id} value={category.id}>{category.menu_category_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-type">Type</label>
                            <select id="item-type" required value={newItemType} onChange={(e) => setNewItemType(e.target.value)}>
                                <option value="">Select Item Type</option>
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-Veg</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Dairy-Free">Dairy-Free</option>
                                <option value="Gluten-Free">Gluten-Free</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                        <label htmlFor="item-des">Description</label>
                        <textarea required id="item-des" value={newItemDescription} onChange={(e) => setNewItemDescription(e.target.value)} placeholder="Enter item description"></textarea>
                    </div>
                    <div className="menu-page-main-cont-one-select-form-category-cont">
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-prep-time">Preparation time</label>
                            <input required type="text" id="item-prep-time" value={newItemPrepTime} onChange={(e) => setNewItemPrepTime(e.target.value)} placeholder="Enter preparation time" />
                        </div>
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-availability">Availability</label>
                            <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont-availability">
                                <button type="button" onClick={() => setNewItemAvailability(true)} className={`${newItemAvailability && "yes-style-btn"}`}>Yes</button>
                                <button type="button" onClick={() => setNewItemAvailability(false)} className={`${!newItemAvailability && "no-style-btn"}`}>No</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-page-main-cont-one-select-form-category-cont">
                        <div className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont">
                            <label htmlFor="item-image">Item Image</label>
                            <input type="file" id="item-image" accept="image/*" onChange={onChangeFileName} />
                        </div>
                        <FileImage image={newItemImage} className="menu-page-main-cont-one-select-cont-two-pop-up-input-cont-image">
                            {imageLoading && <ClipLoader 
                                color="#952a88"
                                loading={imageLoading}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader" />}
                        </FileImage>
                    </div>

                    <div className="menu-page-main-cont-one-select-cont-two-pop-up-button-cont">
                        <button type="submit" className="menu-page-main-cont-one-select-cont-two-pop-up-button">Add Menu Item</button>
                        <button type="button" onClick={() => setEditItem(null)} className="menu-page-main-cont-one-select-cont-two-pop-up-button cancel-button">Cancel</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default MenuPage