import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaEdit, FaTrash, FaUserTag, FaCheckCircle, FaPhone } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


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

const Staff = () => {
  return (
    <div className='menu-page-main-cont staff-container'>
        <div className='staff-header-container'>
            <h1>Staff Members</h1>
            <button>Add Staff</button>
        </div>
        <ul className='staff-role-container'>
            {role.map((role) => (
                <li className='staff-role-item'>
                    <h1>{role.name}</h1>
                </li>
            ))}
        </ul>
        <div className='staff-list-container'>
            <ul className='staff-list-item'>
                {StaffDetails.map((staff) => (
                    <li>
                        <div className='staff-list-item-profile'>
                            <CgProfile className='staff-list-item-profile-icon' />
                            <h1>{staff.name}</h1>
                        </div>
                        <p><CiMail className='staff-list-item-icon' />{staff.email}</p>
                        <p><FaUserTag className='staff-list-item-icon' />{staff.role}</p>
                        <p><FaPhone className='staff-list-item-icon' />{staff.phone}</p>
                        <p className={`staff-list-item-role ${staff.status === 'Active' ? 'staff-list-item-icon-active' : 'staff-list-item-icon-inactive'}`}>{staff.status}</p>
                        <p><FaCalendarAlt className='staff-list-item-icon' />{staff.createdAt}</p>
 
                        <div className='staff-list-item-btn-container'>
                            <button className='staff-list-item-edit-btn'><FaEdit /></button>
                            <button className='staff-list-item-delete-btn'><FaTrash /></button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Staff