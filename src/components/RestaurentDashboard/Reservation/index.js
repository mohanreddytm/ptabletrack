import React from 'react'

import './index.css'
import { FaPhone } from 'react-icons/fa6'
import { FaCalendar } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaTable } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'


const reservationData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'success',
        phone: '1234567890',
        date: '2021-01-01',
        time: '12:00',
        guests: 2,
        table: 1,
        notes: 'No special requests',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        status: 'pending',
        phone: '1234567890',
        date: '2021-01-01',
        time: '12:00',
        guests: 2,
        table: 1,
        notes: 'For Marriage Anniversary',
    },
    {
        id: 3,
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'cancelled',
        phone: '1234567890',
        date: '2021-01-01',
        time: '12:00',
        guests: 2,
        table: 1,
        notes: 'For Business Meeting',
    },


]

const Reservation = () => {


  return (
    <div className='reservation-page-main-cont menu-page-main-cont'>
        <div className='reservation-page-main-cont-one'>
            <div className='reservation-page-main-cont-one-search-cont'>
                <h1>Reservation</h1>
                <p>Manage your reservations here</p>
            </div>

            <div className='reservation-page-main-cont-one-stats-cont'>
                <div>
                    <h1>Total <br/> Reservations</h1>
                    <p>50</p>
                </div>
                <div>
                    <h1>Success</h1>
                    <p>10</p>
                </div>
                <div>
                    <h1>Pending</h1>
                    <p>40</p>
                </div>
                
            </div>
        </div>
        <div className='reservation-page-main-cont-two'>
            <div>
                <div>
                    <p className='reservation-page-main-cont-two-div-p-one'></p>
                    <p>Success</p>
                </div>
                <div>
                    <p className='reservation-page-main-cont-two-div-p-one pending-p'></p>
                    <p>Pending</p>
                </div>
                <div>
                    <p className='reservation-page-main-cont-two-div-p-one cancelled-p'></p>
                    <p>Cancelled</p>
                </div>
            </div>
            <button className='reservation-page-main-cont-one-button'>Add Reservation</button>
        </div>
        <div>
            <ul className='reservation-page-main-cont-three'>
                {reservationData.length > 0 && reservationData.map((item) => (
                    <li className={`reservation-page-main-cont-hex-li-${item.status}`} key={item.id}>
                        <div className='reservation-page-main-cont-three-li-div-one'>
                            <h1>{item.name[0]}</h1>
                            <div className='reservation-page-main-cont-three-li-div-two'>
                                <p>{item.name}</p>
                                <p>| {item.email} |</p>
                            </div>
                        </div>
                        {/* <p>{item.email}</p> */}
                        <p className='reservation-page-main-cont-three-li-p-one'><FaPhone/>{item.phone}</p>
                        <p className='reservation-page-main-cont-three-li-p-one'><FaCalendar/>{item.date}</p>
                        <p className='reservation-page-main-cont-three-li-p-one'><FaClock/>{item.time}</p>
                        <p className='reservation-page-main-cont-three-li-p-one'><FaUsers/>{item.guests}</p>
                        <p className='reservation-page-main-cont-three-li-p-one'><FaTable/>{item.table}</p>
                        <p className='reservation-page-main-cont-three-li-p-two'>{item.notes}</p>
                        <div className='reservation-page-main-cont-three-li-p-three'>
                            <button type='button'><FaEdit/> Edit</button>
                            <button type='button'><FaTrash/> Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Reservation