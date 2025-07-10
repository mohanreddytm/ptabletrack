import React from 'react'

import { useState } from 'react';

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { IoMdAdd } from "react-icons/io";

import { MdDeleteForever as MdDelete } from "react-icons/md";

import './index.css'

const GetMoreInforRest = () => {

    const [areas, setAreas] = useState([]);

    const [tables, setTables] = useState([]);

    const [menuCategories, setMenuCategories] = useState([]);



    const [areaOneInput, setAreaOneInput] = useState('');
    const [currentStep, setCurrentStep] = useState("area");
    const [menuCategoryInput, setMenuCategoryInput] = useState('');
    const [tableStatus, setTableStatus] = useState('active');
    const [tableName, setTableName] = useState('');
    const [seatingCapacity, setSeatingCapacity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');

    const [isAreaDone, setIsAreaDone] = useState(false);

    const onSubmitAddArea = (e) => {
        e.preventDefault();
        if (areaOneInput.trim() !== '') {
            setAreas([...areas, areaOneInput.trim()]);
            setAreaOneInput('');
        }
    }

    const onClickDeleteIcon = (area1) => {
        console.log(area1)
        console.log(areas)
        const updatedAreas = areas.filter(each => each !== area1  );
        setAreas(updatedAreas);
    }

    const onChangeAreaInput = (e) => {
        setAreaOneInput(e.target.value);
    }

    const onClickSaveNxtAreas = () => {
        if(areas.length > 0) {
            setIsAreaDone(true);
            setCurrentStep("table");
        }
    }

    const onClickBackFromTable = () => {
        setCurrentStep("area");
    }

    console.log("Current Input:", areaOneInput);

    const onSubmitOfTable = (e) => {
        e.preventDefault();
        console.log("entered")
        console.log(tableName, seatingCapacity, selectedArea);

        if(tableName.trim() !== '' && seatingCapacity.trim() !== '' && selectedArea.trim() !== ''){
            
            const newtable = {
                "table_name": tableName,
                "seating_capacity": seatingCapacity,
                "area": selectedArea,
                "status": tableStatus
            }
            setTables([...tables, newtable]);
            setTableName('');
            setSeatingCapacity('');
            setSelectedArea('');
            setTableStatus("active");
        }

    }


    const onClickTableDeleteIcon = (tableName) => {
        const updatedTables = tables.filter(table => table.table_name !== tableName);
        setTables(updatedTables);
    }



    const onSubmitMenuCategory = (e) => {
        e.preventDefault();
        if(menuCategoryInput.trim() !== ''){
            setMenuCategories([...menuCategories, menuCategoryInput])
            setMenuCategoryInput('');
        }else{
            setMenuCategoryInput('');
        }
    } 

    const onClickSaveAndNextTable = () => {
        if(tables.length > 0) {
            setCurrentStep("menu");
        }
    }

        const RestaurantAreasOne = () => {
        return (
            <form onSubmit={onSubmitAddArea} className='gm-use-cont'>
                <h1 className='gm-use-title'>Set Up Your Restaurant Areas</h1>
                <p className='gm-use-description'>To be define about your restaurant areas, please provide the names of the areas you want to add.</p>
                <p className='gm-use-description'>Like Outdoor Seating, Indoor Seating and Rooftop etc. </p>
                <h1 className='gm-use-add-area-one'>Add Area</h1>
                <input
                    value={ areaOneInput }
                    onChange={onChangeAreaInput}
                    className='gm-input-area'
                    type='text'
                    placeholder='Ex: Outdoor Seating'
                    required
                    />

                <div className='gm-add-area-btn-cont'>
                    <button type='submit' className='gm-add-area-btn'>Add Area</button>
                    <button type='button' onClick={onClickSaveNxtAreas} className={`gm-next-btn ${areas.length > 0 && "gm-next-done-btn"}`}>Save & Next</button>
                </div>
                <p className='gm-skip' onClick={() => setCurrentStep("table")}>Skip for now <FaArrowRightLong className='gm-skip-icon' /> </p>
                <div>
                    <h1 className='gm-use-bottom-head'>Your Restaurant Areas</h1>
                    {areas.length > 0 ? (
                        <ul className='gm-use-bottom-ul'>
                            {areas.map((area, index) => (
                                <li key={index} className='gm-use-bottom-p'>{area} <MdDelete onClick={() => onClickDeleteIcon(area)} className='gm-delete-icon' /></li>
                            ))}
                        </ul>
                    ) : (
                            <p className='gm-use-bottom-p'>You have not added any areas yet.</p>
                        )}

                </div>
            </form>     
        )
    }

    const AddingTables = () => {
        return (
            <form onSubmit={onSubmitOfTable} className='gm-use-cont gm-use-table-cont'>
                <h1 className='gm-use-title'>Add Tables to Your Restaurant Areas</h1>
                <p className='gm-use-description'>To add tables to your restaurant areas, please provide the details of the tables you want to add.</p>

                <h1 className='gm-use-add-area-one'>Add Table</h1>
                <div className='gm-use-add-area-cont-mini'><h1 className='gm-use-add-area-one'>Select Area</h1> <button type='button' onClick={() => setCurrentStep("area")} className='gm-table-add-area-one-b'><IoMdAdd /> Add</button></div>
                <select onChange={(e) => setSelectedArea(e.target.value)} className='gm-input-area' required>
                    <option value={selectedArea}>Select Area</option>
                    {areas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
                <h1 className='gm-use-add-area-one'>Table Name</h1>
                <input value={tableName} onChange={(e) => setTableName(e.target.value)} className='gm-input-area' type='text' placeholder='Ex: T01' required />
                <h1 className='gm-use-add-area-one'>Seating Capacity</h1>
                <input value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} className='gm-input-area' type='number' placeholder='Number of Seats (Ex: 4)' required />
                <h1 className='gm-use-add-area-one'>Status</h1>
                <div>
                    <button type='button' onClick={() => setTableStatus("active")} className={`gm-active-btn ${tableStatus === "active" && "gm-active-true"}`}>Active</button>
                    <button type='button' onClick={() => setTableStatus("inactive")} className={`gm-inactive-btn ${tableStatus === "inactive" && "gm-inactive-true"}`}>Inactive</button>
                </div>
                <div className='gm-add-area-btn-cont'>
                    <button type='submit' className='gm-add-area-btn'>Add Table</button>
                    <button type='button' onClick={onClickSaveAndNextTable} className={`gm-next-btn ${tables.length > 0 && "gm-next-done-btn"}`}>Save & Next</button>
                </div>
                <div className='gm-skip-cont'>
                    <p className='gm-back' onClick={onClickBackFromTable}><FaArrowLeftLong className='gm-skip-icon' /> Go Back</p>
                    <p className='gm-skip' onClick={() => setCurrentStep("menu")}>Skip for now <FaArrowRightLong className='gm-skip-icon' /> </p>
                </div>
                <div>
                    <h1 className='gm-use-bottom-head'>Your Restaurant Tables</h1>
                    {tables.length > 0 ? (
                        <ul className='gm-use-bottom-ul'>
                            {tables.map((table, index) => (
                                <li key={index} className='gm-use-bottom-p gm-use-bottom-p-tables'>
                                    <div className='gm-table-details'>
                                        <h1 className='gm-tables-lines gm-table-main-p'>Area: <span className='gm-table-area-sp'>{table.area}</span></h1>
                                        <h1 className='gm-tables-lines'>Table Name: <span className='gm-table-name-sp'>{table.table_name}</span></h1>
                                        <h1 className='gm-tables-lines'>Seating Capacity: <span className='gm-table-seating-sp'>{table.seating_capacity}</span></h1>
                                        
                                        <h1 className='gm-tables-lines'>Status: <span className={`${table.status === "active"  ? "gm-table-active-sp" :"gm-table-inactive-sp" }`}>{table.status}</span></h1>

                                    </div>
                                    <MdDelete onClick={() => onClickTableDeleteIcon(table.table_name)} className='gm-delete-icon gm-delete-table-p' /></li>
                            ))}
                        </ul>
                    ) : (
                            <p className='gm-use-bottom-p'>You have not added any tables yet.</p>
                        )}
                </div>
            </form>
        )
    }

    const AddMenu = () => {
        return (
            <form onSubmit={onSubmitMenuCategory} className='gm-use-cont gm-use-cont-menu'>
                <h1 className='gm-use-title'>Add a Menu Category</h1>
                <p className='gm-use-description'>
                Enter a category name for your restaurant menu — like Breakfast, Lunch, Drinks, Ice Creams, Desserts, or Fast Food.
                </p>
                <h1 className='gm-use-add-area-one'>Add Menu Category</h1>
                <input onChange={(e) => setMenuCategoryInput(e.target.value)} value={menuCategoryInput} className='gm-input-area' type='text' placeholder='Ex: Breakfast' required />
                <div className='gm-add-area-btn-cont'>
                    <button type='submit' className='gm-add-area-btn'>Add Menu</button>
                    <button type='button' onClick={() => setCurrentStep("area")} className={`gm-next-btn ${menuCategories.length > 0 && "gm-next-btn-disabled"}`}>Save & Next</button>
                </div>
                <div className='gm-skip-cont'>
                    <p className='gm-back' onClick={() => setCurrentStep("table")}><FaArrowLeftLong className='gm-skip-icon' /> Go Back</p>
                    <p className='gm-skip'>Skip for now <FaArrowRightLong className='gm-skip-icon' /> </p>
                </div>
                <div>
                    <h1 className='gm-use-bottom-head'>Your Menu Categories</h1>
                    {
                        menuCategories.length > 0 ? (
                            <ul className='gm-use-bottom-ul'>
                                {menuCategories.map((category, index) => (
                                    <li key={index} className='gm-use-bottom-p'>{category} <MdDelete onClick={() => setMenuCategories(menuCategories.filter(cat => cat !== category))} className='gm-delete-icon' /></li>
                                ))}
                            </ul>
                        ) : 
                        <p className='gm-use-bottom-p'>You have not added any menu categories yet.</p>
                    }
                </div>

            </form>
        )
    }

    const MainOne = () => {
        switch (currentStep) {
            case "area":
                return RestaurantAreasOne()
            case "table":
                return AddingTables()
            case "menu":
                return AddMenu()
            default:
                return RestaurantAreasOne()
        }
    }

    // console.log(areas)

  return (
    <div className='gm-intial-cont'>
      <div className='gm-main-cont'>
        <h1 className='gm-main-title'>More Information About Your restaurant</h1>
        {MainOne()} 
      </div>
    </div>
  )
}

export default GetMoreInforRest
