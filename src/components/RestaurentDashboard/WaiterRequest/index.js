import './index.css'
import { useState, useContext } from 'react';   
import AllInOne from '../../../complexOne'
import { IoMdNotificationsOff } from "react-icons/io";

const WaiterRequest = () => {
    const { areasData } = useContext(AllInOne);


    return (
        <div className='tables-page-main-cont'>
            <div className='tables-page-main-cont-one'>
                <h1 className='tables-page-main-cont-one-head'>Waiter Request</h1>
                <button className='waiter-request-button'>
                    Assign Waiter
                </button>
            </div>
            <div className='waiter-request-main-cont'>
                <div className='waiter-request-main-cont-one'>
                    <h1 className='waiter-request-main-cont-one-head'>Tables</h1>
                    <ul className='waiter-request-main-cont-one-list'>
                        {areasData.length > 0 
                        ? areasData.map(each => (
                            <li key={each.id}>
                                <h1 className='waiter-request-main-cont-one-list-head'>{each.area_name}</h1>
                                <div className='waiter-request-main-cont-one-list-inner-cont'>
                                    <IoMdNotificationsOff className='waiter-request-main-cont-one-list-inner-cont-icon' />
                                    <p>No Requests Yet!</p>
                                </div>
                            </li>
                        ))
                        : <p>Loading ...</p>}
                    </ul>
                </div>
                <div className='waiter-request-main-cont-two'>
                    <h1 className='waiter-request-main-cont-two-head'>Waiters</h1>
                    <ul className='waiter-request-main-cont-two-list'>
                        <li>
                            <div className='waiter-request-main-cont-two-list-inner-cont'>
                                <h1 className='waiter-request-main-cont-two-list-inner-cont-head'>Ravi</h1>
                                <p className='waiter-request-main-cont-two-list-inner-cont-p available-p'>Available</p>
                            </div>
                            <button className='waiter-request-main-cont-two-button'>Assign Table</button>
                        </li>
                        <li>
                            <div className='waiter-request-main-cont-two-list-inner-cont'>
                                <h1 className='waiter-request-main-cont-two-list-inner-cont-head'>Basker</h1>
                                <p className='waiter-request-main-cont-two-list-inner-cont-p serving-p'>Serving</p>
                            </div>
                            <button className='waiter-request-main-cont-two-button'>Assign Table</button>
                        </li>
                        <li>
                            <div className='waiter-request-main-cont-two-list-inner-cont'>
                                <h1 className='waiter-request-main-cont-two-list-inner-cont-head'>Anil</h1>
                                <p className='waiter-request-main-cont-two-list-inner-cont-p cleaning-p'>Cleaning</p>
                            </div>
                            <button className='waiter-request-main-cont-two-button'>Assign Table</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WaiterRequest;