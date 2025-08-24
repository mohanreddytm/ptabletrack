import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaEdit, FaTrash, FaUserTag, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import {PulseLoader} from 'react-spinners'

import { FcRating } from "react-icons/fc";
import AllInOne from '../../../complexOne'

import errorImage from '../../../images/404error.jpg'

import './index.css'

const StaffDetails = 
    [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'Manager',
            phone: '1234567890',
            status: 'Active',
            createdAt: '2021-01-01',
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            role: 'Waiter',
            phone: '1234567890',
            status: 'Active',
            createdAt: '2021-01-01',
        },
        {
            id: 3,
            name: 'Jim Doe',
            email: 'jim.doe@example.com',
            role: 'Chef',
            phone: '1234567890',
            status: 'Inactive',
            createdAt: '2021-01-01',
        },
    ]

    const role = [
        {
            id: 1,
            name: 'Manager',
        },
        {
            id: 2,
            name: 'Waiter',
        },
        {
            id: 3,
            name: 'Chef',
        },
        {
            id: 4,
            name: 'Cashier',
        },
        {
            id: 5,
            name: 'Cleaner',
        },
        {
            id: 6,
            name: 'Security',
        },
        
    ]

const istatus = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
}

const Staff = () => {

    const [status, setStatus] = useState(istatus.INITIAL);
    const [refreshOne, setRefreshOne] = useState(false);
    const {userId} = useContext(AllInOne);
    const [staffDetails, setStaffDetails] = useState([]);

    console.log(userId);


    useEffect(() => {
        const fetchStaffDetails = async () => {
            setStatus(istatus.LOADING);
            const url = `http://localhost:8000/restaurant_details/getStaff/${userId}`;
            const response = await fetch(url);
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setStaffDetails(data.staff);
                setStatus(istatus.SUCCESS);
            }else{
                console.log('Failed to fetch staff details');
                setStatus(istatus.ERROR);
            }
        }
        fetchStaffDetails();
    }, [refreshOne])

    const addStaffPopOne = () => {
        return (
            <div className='add-staff-popup'>
                <div className='add-staff-popup-content'>
                    <h1 className='add-staff-popup-title'>Add Staff</h1>
                    <form>
                        <div className='add-staff-popup-input-group'>
                            <label htmlFor='name'>Name: </label>
                            <input id='name' type="text" placeholder="Name" />
                        </div>
                        <div className='add-staff-popup-input-group'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type="email" placeholder="Email" />
                        </div>
                        <div className='add-staff-popup-input-group'>
                            <label htmlFor='role'>Role: </label>
                            <input id='role' type="text" placeholder="Role" />
                        </div>
                        <div className='add-staff-popup-input-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input id='phone'  type="text" placeholder="Phone" />
                        </div>
                        <input type="text" placeholder="Status" />
                        <input type='number' placeholder='salary'/>
                        <input type='text' placeholder='shift-timing' />
                        <input type='text' placeholder='address' />
                        <input type='file' placeholder='profile-image' />
                        <button type="submit">Add Staff</button>
                    </form>
                </div>
            </div>
        )
    }

  return (
    <div className='menu-page-main-cont staff-container'>
        {addStaffPopOne()}
        <div className='staff-header-container'>
            <h1>Staff Members</h1>
            <button>Add Staff</button>
        </div>
        <div>

            <div className='staff-roles-header'>
                <h1 className='staff-roles-title'>Staff Roles</h1>
                <div className='add-role-container'>
                    <p>+ Add Role</p>
                </div>
            </div>
            <ul className='staff-role-container'>
                {role.map((role) => (
                    <li className='staff-role-item'>
                        <h1>{role.name}</h1>
                    </li>
                ))}
            </ul>


        </div>

        <div className='staff-list-container'>
            <ul className='staff-list-item'>
                {status === istatus.LOADING && <div className='loading-container'> 
                    <p >Loading</p> <PulseLoader color='#ded9d9ff' size={10} />
                    </div>}
                {status === istatus.ERROR && <div className='error-container'>
                    <img src={errorImage} alt='error' className='error-image'/>
                    <p>Something went wrong. Please try again.</p>
                    <button onClick={() => setRefreshOne(!refreshOne)}>Retry</button>
                    </div>}
                {staffDetails.length > 0 && status === istatus.SUCCESS && staffDetails.map((staff) => (

                    <li>
                        <div className='staff-list-item-profile'>
                            <CgProfile className='staff-list-item-profile-icon' />
                            <h1>{staff.name}</h1>
                        </div>
                        <p><CiMail className='staff-list-item-icon' />{staff.email}</p>
                        <p><FaUserTag className='staff-list-item-icon' />{staff.role}</p>
                        <p><FaPhone className='staff-list-item-icon' />{staff.phone_number}</p>
                        <p className="staff-list-item-role status-style">{staff.status}</p>
                        <p><FaCalendarAlt className='staff-list-item-icon' />{staff.joined_at}</p>
                        <div className='staff-list-item-ratings-container'>
                            <div className='staff-list-item-ratings'>
                                <FcRating />
                                <p>{staff.ratings}</p>
                            </div>
                            <div className='staff-list-item-btn-container'>
                                <button className='staff-list-item-edit-btn'><FaEdit /></button>
                                <button className='staff-list-item-delete-btn'><FaTrash /></button>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Staff