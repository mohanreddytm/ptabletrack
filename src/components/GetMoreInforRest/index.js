import React from 'react'

import { useState } from 'react';

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";

import './index.css'

const GetMoreInforRest = () => {

    const [areas, setAreas] = useState([]);

    const [tables, setTables] = useState([]);



    const [areaOneInput, setAreaOneInput] = useState('');
    const [currentStep, setCurrentStep] = useState("area");

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
                <p className='gm-skip'>Skip for now <FaArrowRightLong className='gm-skip-icon' /> </p>
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
            <form className='gm-use-cont gm-use-table-cont'>
                <h1 className='gm-use-title'>Add Tables to Your Restaurant Areas</h1>
                <p className='gm-use-description'>To add tables to your restaurant areas, please provide the details of the tables you want to add.</p>
                <h1 className='gm-use-add-area-one'>Add Table</h1>
                <select className='gm-input-area'>
                    <option value=''>Select Area</option>
                    {areas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
                <h1 className='gm-use-add-area-one'>Table Name</h1>
                <input className='gm-input-area' type='text' placeholder='Ex: T01' required />
                <h1 className='gm-use-add-area-one'>Seating Capacity</h1>
                <input className='gm-input-area' type='number' placeholder='Number of Seats (Ex: 4)' required />
                <h1 className='gm-use-add-area-one'>Status</h1>
                <div>
                    <button type='button' className='gm-active-btn'>Active</button>
                    <button type='button' className='gm-inactive-btn'>Inactive</button>
                </div>
                <div className='gm-add-area-btn-cont'>
                    <button type='submit' className='gm-add-area-btn'>Add Table</button>
                    <button type='button'  className={`gm-next-btn ${areas.length > 0 && "gm-next-done-btn"}`}>Save & Next</button>
                </div>
                <div className='gm-skip-cont'>
                    <p className='gm-back' onClick={onClickBackFromTable}><FaArrowLeftLong className='gm-skip-icon' /> Go Back</p>
                    <p className='gm-skip'>Skip for now <FaArrowRightLong className='gm-skip-icon' /> </p>
                </div>
                                <div>
                    <h1 className='gm-use-bottom-head'>Your Restaurant Tables</h1>
                    {tables.length > 0 ? (
                        <ul className='gm-use-bottom-ul'>
                            {tables.map((table, index) => (
                                <li key={index} className='gm-use-bottom-p'>{table.name} <MdDelete onClick={() => onClickDeleteIcon(table.name)} className='gm-delete-icon' /></li>
                            ))}
                        </ul>
                    ) : (
                            <p className='gm-use-bottom-p'>You have not added any tables yet.</p>
                        )}
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
