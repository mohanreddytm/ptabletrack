import './index.css'
import { useState } from 'react';

const Orders = () => {
    const [date, setDate] = useState({
        from: new Date().toISOString().split('T')[0],
        to: new Date().toISOString().split('T')[0]
    });

    const handleDateChange = (e) => {
        setDate({
            ...date,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div className="dash-orders-main-cont">
            <div className="dash-orders-main-head-cont">
                <div className="dash-orders-main-head-cont-left">
                    <h1 className="dash-orders-main-head">Orders (6)</h1>
                    <div className="dash-orders-main-head-auto-refresh">
                        <p className='dash-orders-main-head-auto-refresh-text'>auto refresh every 10 seconds</p>
                        <button type='button' className='dash-orders-main-head-new-order-button'>New Order</button>
                    </div>
                </div>
                <div className='dash-orders-main-head-cont-right'>
                    <select className="dash-orders-main-head-select">
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="This Week">This Week</option>
                        <option value="This Month">This Month</option>
                        <option value="This Year">This Year</option>
                    </select>
                    <div className='dash-orders-main-head-date-cont'>
                        <input value={date.from} onChange={handleDateChange} name='from' type="date" className="dash-orders-main-head-date-input" />
                        <p className='dash-orders-main-head-date-to'>to</p>
                        <input value={date.to} onChange={handleDateChange} name='to' type="date" className="dash-orders-main-head-date-input" />
                        <button type='button' className='dash-orders-main-head-date-button'>Search</button>
                    </div>
                    <select className="dash-orders-main-head-select">
                        <option value="">Show All Orders</option>
                        <option value="KOT">KOT</option>
                        <option value="Billed">Billed</option>
                        <option value="Paid">Paid</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Failed">Failed</option>
                        <option value="Refunded">Refunded</option>
                    </select>
                </div>

            </div>
            <div className='dash-orders-main-table-cont'>
                <ul className='dash-orders-main-table-list'>
                    <li className='dash-orders-main-table-list-item'>
                        <div className='dash-orders-main-table-list-item-number-cont'>
                            <p className='dash-orders-main-table-list-item-number-cont-text'>#1</p>
                        </div>

                      <div className='dash-middle-m-right-list-item-cont-one'>
                        <div className='dash-middle-m-right-list-item-cont'>
                          <h1 className='dash-middle-m-right-list-item-head'>T01</h1>
                          <p className='dash-middle-m-right-list-item-name'>Ravi</p>
                        </div>

                        <button type='button' className='dash-middle-m-right-list-item-button'>PAID</button>

                      </div>
                      <div className='dash-middle-m-right-list-item-cont-two'>
                        <hr className='dash-middle-m-right-list-item-hr' />
                        <h1 className='dash-middle-m-right-list-item-button-text'>Order Served</h1>
                        <hr className='dash-middle-m-right-list-item-hr' />
                      </div>
                      <div className='dash-middle-m-right-list-item-cont-three'>
                        <p className='dash-middle-m-right-list-item-cont-three-text'>July 21, 2024 90:25 AM</p>
                        <p className='dash-middle-m-right-list-item-cont-three-text'><span className='dash-middle-m-right-list-item-cont-three-text-span'>6</span> Items</p>
                      </div>
                      <hr className='dash-middle-m-right-list-item-hr' />
                      <div className='dash-middle-m-right-list-item-cont-four'>
                        <h1 className='dash-middle-m-right-list-item-cont-four-head'>₹ 1000</h1>
                        <p className='dash-middle-m-right-list-item-cont-four-text'>John Wick</p>
                      </div>

    
                    </li>
                    <li className='dash-orders-main-table-list-item'>
                      <div className='dash-orders-main-table-list-item-number-cont'>
                            <p className='dash-orders-main-table-list-item-number-cont-text'>#2</p>
                        </div>
                      <div className='dash-middle-m-right-list-item-cont-one'>
                        <div className='dash-middle-m-right-list-item-cont'>
                          <h1 className='dash-middle-m-right-list-item-head'>T04</h1>
                          <p className='dash-middle-m-right-list-item-name'>Kamlesh</p>
                        </div>

                        <button type='button' className='dash-middle-m-right-list-item-button'>KOT</button>

                      </div>
                      <div className='dash-middle-m-right-list-item-cont-two'>
                        <hr className='dash-middle-m-right-list-item-hr' />
                        <h1 className='dash-middle-m-right-list-item-button-text'>Order preparing</h1> 
                        <hr className='dash-middle-m-right-list-item-hr' />
                      </div>
                      <div className='dash-middle-m-right-list-item-cont-three'>
                        <p className='dash-middle-m-right-list-item-cont-three-text'>July 21, 2024 90:25 AM</p>
                        <p className='dash-middle-m-right-list-item-cont-three-text'><span className='dash-middle-m-right-list-item-cont-three-text-span'>6</span> Items</p>
                      </div>
                      <hr className='dash-middle-m-right-list-item-hr' />
                      <div className='dash-middle-m-right-list-item-cont-four'>
                        <h1 className='dash-middle-m-right-list-item-cont-four-head'>₹ 10343</h1>
                        <p className='dash-middle-m-right-list-item-cont-four-text'>Mohna</p>
                      </div>

    
                    </li>
                    <li className='dash-orders-main-table-list-item'>
                      <div className='dash-orders-main-table-list-item-number-cont'>
                            <p className='dash-orders-main-table-list-item-number-cont-text'>#3</p>
                        </div>
                      <div className='dash-middle-m-right-list-item-cont-one'>
                        <div className='dash-middle-m-right-list-item-cont'>
                          <h1 className='dash-middle-m-right-list-item-head'>T04</h1>
                          <p className='dash-middle-m-right-list-item-name'>Kamlesh</p>
                        </div>

                        <button type='button' className='dash-middle-m-right-list-item-button'>KOT</button>

                      </div>
                      <div className='dash-middle-m-right-list-item-cont-two'>
                        <hr className='dash-middle-m-right-list-item-hr' />
                        <h1 className='dash-middle-m-right-list-item-button-text'>Order preparing</h1> 
                        <hr className='dash-middle-m-right-list-item-hr' />
                      </div>
                      <div className='dash-middle-m-right-list-item-cont-three'>
                        <p className='dash-middle-m-right-list-item-cont-three-text'>July 21, 2024 90:25 AM</p>
                        <p className='dash-middle-m-right-list-item-cont-three-text'><span className='dash-middle-m-right-list-item-cont-three-text-span'>6</span> Items</p>
                      </div>
                      <hr className='dash-middle-m-right-list-item-hr' />
                      <div className='dash-middle-m-right-list-item-cont-four'>
                        <h1 className='dash-middle-m-right-list-item-cont-four-head'>₹ 10343</h1>
                        <p className='dash-middle-m-right-list-item-cont-four-text'>Mohna</p>
                      </div>

    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Orders