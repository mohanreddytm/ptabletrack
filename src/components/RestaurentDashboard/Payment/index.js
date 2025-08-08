import React from 'react'

import { FaDownload, FaPrint, FaPlus } from "react-icons/fa";

import { MdQrCodeScanner } from "react-icons/md";

import { GiCash } from "react-icons/gi";
import './index.css'

const data = [
    {
        id: 1,
        name: 'Total Payment',
        amount: 10000,
        table:"T01",
        date: "2025-01-01",
        time: "10:00 AM",
        status:"success",
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        ordernum:14,
        transactionId: "1234567890",
    },
    {
        id: 2,
        name: 'Failed Payment',
        amount: 100,
        table:"T02",
        date: "2025-01-01",
        time: "10:00 AM",
        status:"failed",
        paymentMethod: "UPI",
        paymentStatus: "Failed",
        ordernum:15,
        transactionId: "1234567890",
    },
    
    {
        id: 3,
        name: 'Pending Payment',
        amount: 1040,
        table:"T03",
        date: "2025-01-01",
        time: "10:00 AM",
        status:"pending",
        paymentMethod: "Cash",
        paymentStatus: "Pending",
        ordernum:16,
        transactionId: "1234567890",
    }
]

const Payment = () => {
  return (
    <div className='menu-page-main-cont payment-page-main-cont'>
        <div className='payment-page-main-cont-one'>
            <div className='payment-page-main-cont-one-div-one-one'>
                <h1>Payment</h1>
                <button><FaPlus /> Add Payment</button>
            </div>
            <div className='payment-page-main-cont-one-div-one-two'>
                <h1>Today's Report</h1>
                <button><FaDownload /> Download</button>
            </div>
            <div className='payment-page-main-cont-one-div-one-two'>
                <h1><select className='payment-page-main-cont-one-div-one-two-select'>
                    <option value="this-week">This Week</option>
                    <option value="this-month">This Month</option>
                    <option value="this-year">This Year</option>
                    <option value="last-week">Last Week</option>
                    <option value="last-month">Last Month</option>
                    <option value="last-year">Last Year</option>
                    <option value="all-time">All Time</option>
                    </select> Report</h1>
                <button><FaDownload /> Download</button>
            </div>
        </div>
      <div className='payment-page-main-cont-one'>
        <div className='payment-page-main-cont-one-div-one total-payment'>
            <div className='total-payment-div-one'>
                <p>4</p>
            </div>
            <p>Total Payment</p>
                <p>10000</p>

        </div>
        <div className='payment-page-main-cont-one-div-one failed-payment'>
            <div className='total-payment-div-one'>
                <p>1</p>
            </div>
            <p>Failed Payment</p>
            <p>100</p>
        </div>
        <div className='payment-page-main-cont-one-div-one pending-payment'>
            <div className='total-payment-div-one'>
                <p>1</p>
            </div>
            <p>Pending Payment</p>
            <p>1040</p>
        </div>
        <div className='payment-page-main-cont-one-div-one highest-payment'>
            <div className='total-payment-div-one'>
                <p>1</p>
            </div>
            <p>Highest Payment</p>
            <p>2000</p>
        </div>
      </div>

      <div className='payment-page-main-cont-two'>
        <select className='payment-page-main-cont-two-select'>
            <option value="all">All</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
        </select>
        <select className='payment-page-main-cont-two-select'>
            <option value="all">Sort By</option>
            <option value="amount">Amount (High to Low)</option>
            <option value="amount-low">Amount (Low to High)</option>
            <option value="ordernum">Order Number (High to Low)</option>
            <option value="ordernum-low">Order Number (Low to High)</option>
            <option value="date">Date</option>
            <option value="time">Time</option>
        </select>
        <select className='payment-page-main-cont-two-select'>  
            <option value="all">All tables</option>
            <option value="T01">T01</option>
            <option value="T02">T02</option>
            <option value="T03">T03</option>
            <option value="T04">T04</option>
            <option value="T05">T05</option>
            <option value="T06">T06</option>
        </select>
        <div className='payment-page-main-cont-two-div-one'>
            <button> <MdQrCodeScanner /> UPI</button>
            <button> <GiCash /> Cash</button>
        </div>
        
      </div>
      <table>
        <thead>
            <tr>
                <th>Table</th>
                <th>Transaction ID</th>
                <th>Order Number</th>
                <th>Payment Method</th>
                <th>Payment Status</th>
                <th>Amount</th>
                <th>Date / Time</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td><p className='table-name'>{item.table}</p></td>
                    <td>{item.transactionId}</td>
                    <td><div className='order-number'>
                    <hr/> <span>#{item.ordernum}</span> <hr/>
                        </div></td>
                    <td className='payment-method'> {item.paymentMethod === "UPI" ? <MdQrCodeScanner className='payment-method-icon' /> : <GiCash className='payment-method-icon' />} <span>{item.paymentMethod}</span></td>
                    <td className={`payment-status payment-status-${item.status}`}>{item.paymentStatus}</td>
                    <td className='amount'>₹{item.amount}</td>
                    <td>{item.date} / {item.time}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Payment