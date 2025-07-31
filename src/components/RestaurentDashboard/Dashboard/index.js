import React, { useState, useEffect, useContext } from 'react'
import { FaCaretDown, FaAngleDown, FaRegBell, FaAngleDoubleUp, FaThumbsUp, FaThumbsDown, FaChartLine, FaUsers, FaMoneyBillWave, FaClock, FaStar, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdBlock, MdFrontHand, MdRestaurant, MdReceipt, MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { TfiLineDashed } from "react-icons/tfi";
import { BsQrCodeScan } from "react-icons/bs";
import { SiCcleaner } from "react-icons/si";
import { IoMdPeople, IoMdTime } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { GiLaptop } from "react-icons/gi";
import { RiReservedLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";

import serving from '../../../images/hot-food.png'
import error from '../../../images/error.jpg'

import './index.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowUpLong } from "react-icons/fa6";
import AllInOne from '../../../complexOne';

const Dashboard = () => {
    const navigate = useNavigate();
    const { statusOne } = useContext(AllInOne);

    // Mock data for enhanced statistics
    const [dashboardStats, setDashboardStats] = useState({
        todayOrders: 24,
        todayRevenue: 15400,
        averageOrderValue: 641.67,
        totalCustomers: 18,
        pendingOrders: 3,
        completedOrders: 21,
        topSellingDish: "Chicken Biryani",
        topSellingCount: 12,
        waiterEfficiency: 94.5,
        tableOccupancy: 78.3,
        customerSatisfaction: 4.8,
        monthlyGrowth: 23.4
    });

    const [recentOrders, setRecentOrders] = useState([
        {
            id: 1,
            tableNumber: "T01",
            waiter: "Ravi",
            status: "completed",
            amount: 1200,
            customer: "John Wick",
            items: 6,
            time: "19:30",
            date: "July 21, 2024",
            paymentMethod: "UPI"
        },
        {
            id: 2,
            tableNumber: "T03",
            waiter: "Suman",
            status: "pending",
            amount: 850,
            customer: "Sarah Johnson",
            items: 4,
            time: "20:15",
            date: "July 21, 2024",
            paymentMethod: "Cash"
        },
        {
            id: 3,
            tableNumber: "T05",
            waiter: "Satyam",
            status: "completed",
            amount: 2100,
            customer: "Mike Wilson",
            items: 8,
            time: "18:45",
            date: "July 21, 2024",
            paymentMethod: "Card"
        }
    ]);

    const [waiterStatus, setWaiterStatus] = useState([
        {
            name: "Ravi",
            status: "serving",
            table: "T01",
            efficiency: 95
        },
        {
            name: "Suman",
            status: "cleaning",
            table: "T02",
            efficiency: 88
        },
        {
            name: "Satyam",
            status: "available",
            table: null,
            efficiency: 92
        },
        {
            name: "Mohna",
            status: "break",
            table: null,
            efficiency: 89
        }
    ]);

    const [paymentMethods, setPaymentMethods] = useState([
        { method: "UPI", amount: 8400, percentage: 54.5 },
        { method: "Cash", amount: 4200, percentage: 27.3 },
        { method: "Card", amount: 2800, percentage: 18.2 }
    ]);

    // Mock data for earnings chart
    const [earningsData, setEarningsData] = useState([
        { date: '2024-06-15', earnings: 8500 },
        { date: '2024-06-16', earnings: 9200 },
        { date: '2024-06-17', earnings: 7800 },
        { date: '2024-06-18', earnings: 10500 },
        { date: '2024-06-19', earnings: 8900 },
        { date: '2024-06-20', earnings: 11200 },
        { date: '2024-06-21', earnings: 9800 },
        { date: '2024-06-22', earnings: 12500 },
        { date: '2024-06-23', earnings: 11000 },
        { date: '2024-06-24', earnings: 13500 },
        { date: '2024-06-25', earnings: 12000 },
        { date: '2024-06-26', earnings: 14200 },
        { date: '2024-06-27', earnings: 12800 },
        { date: '2024-06-28', earnings: 15800 },
        { date: '2024-06-29', earnings: 14500 },
        { date: '2024-06-30', earnings: 16800 },
        { date: '2024-07-01', earnings: 15200 },
        { date: '2024-07-02', earnings: 17500 },
        { date: '2024-07-03', earnings: 16200 },
        { date: '2024-07-04', earnings: 18800 },
        { date: '2024-07-05', earnings: 17500 },
        { date: '2024-07-06', earnings: 19800 },
        { date: '2024-07-07', earnings: 18500 },
        { date: '2024-07-08', earnings: 21200 },
        { date: '2024-07-09', earnings: 19800 },
        { date: '2024-07-10', earnings: 22500 },
        { date: '2024-07-11', earnings: 21200 },
        { date: '2024-07-12', earnings: 23800 },
        { date: '2024-07-13', earnings: 22500 },
        { date: '2024-07-14', earnings: 25200 },
        { date: '2024-07-15', earnings: 23800 },
        { date: '2024-07-16', earnings: 26500 },
        { date: '2024-07-17', earnings: 25200 },
        { date: '2024-07-18', earnings: 27800 },
        { date: '2024-07-19', earnings: 26500 },
        { date: '2024-07-20', earnings: 29200 },
        { date: '2024-07-21', earnings: 15400 }
    ]);

    const getTime = () => {
        const newDate = new Date();
        const date = newDate.getDate();
        const day = newDate.getDay();
        const hours = newDate.getHours();
        let dayText = "";
        switch (day){
            case 0: dayText = "Sunday"; break;
            case 1: dayText = "Monday"; break;
            case 2: dayText = "Tuesday"; break;
            case 3: dayText = "Wednesday"; break;
            case 4: dayText = "Thursday"; break;
            case 5: dayText = "Friday"; break;
            case 6: dayText = "Saturday"; break;
            default:
        }
        let MonthText = "";
        const Month = newDate.getMonth();
        switch (Month){
            case 0: MonthText = "January"; break;
            case 1: MonthText = "February"; break;
            case 2: MonthText = "March"; break;
            case 3: MonthText = "April"; break;
            case 4: MonthText = "May"; break;
            case 5: MonthText = "June"; break;
            case 6: MonthText = "July"; break;
            case 7: MonthText = "August"; break;
            case 8: MonthText = "September"; break;
            case 9: MonthText = "October"; break;
            case 10: MonthText = "November"; break;
            case 11: MonthText = "December"; break;
            default: MonthText = "January";
        }
        const minutes = newDate.getMinutes();
        const ampm = newDate.getHours() >= 12 ? "PM" : "AM";
        const hours12 = newDate.getHours() % 12 || 12;
        return `${dayText}, ${date} ${MonthText}, ${hours12}:${minutes} ${ampm}`;
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'serving': return <img className='serving-logo' src={serving} alt="serving" />;
            case 'cleaning': return <SiCcleaner className='serving-logo cleaning-logo' />;
            case 'available': return <FaThumbsUp className='serving-logo cleaning-logo available-logo' />;
            case 'break': return <MdBlock className='serving-logo cleaning-logo in-kichen-logo' />;
            default: return <IoMdTime className='serving-logo' />;
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'serving': return 'Serving';
            case 'cleaning': return 'Cleaning';
            case 'available': return 'Available';
            case 'break': return 'On Break';
            default: return 'Unknown';
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'serving': return 'serving';
            case 'cleaning': return 'cleaning';
            case 'available': return 'available';
            case 'break': return 'break';
            default: return '';
        }
    };

    const getOrderStatusClass = (status) => {
        switch (status) {
            case 'completed': return 'completed';
            case 'pending': return 'pending';
            case 'preparing': return 'preparing';
            default: return '';
        }
    };

    return(
        <div className='dash-main-m'>
            {/* Header Section */}
            <div className='dash-main-dashboard-cont'>
                <div className='dash-header-left'>
                    <h1 className='dash-dash-head'>Dashboard</h1>
                    <p className='dash-dash-time'>{getTime()}</p>
                </div>
                <div className='dash-header-right'>
                    <div className='dash-quick-stats'>
                        <div className='quick-stat-item'>
                            <FaUsers className='quick-stat-icon' />
                            <span className='quick-stat-value'>{dashboardStats.totalCustomers}</span>
                            <span className='quick-stat-label'>Customers</span>
                        </div>
                        <div className='quick-stat-item'>
                            <FaClock className='quick-stat-icon' />
                            <span className='quick-stat-value'>{dashboardStats.pendingOrders}</span>
                            <span className='quick-stat-label'>Pending</span>
                        </div>
                        <div className='quick-stat-item'>
                            <FaStar className='quick-stat-icon' />
                            <span className='quick-stat-value'>{dashboardStats.customerSatisfaction}</span>
                            <span className='quick-stat-label'>Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='dash-middle-m-cont'>
                {/* Left Section - Statistics */}
                <div className='dash-middle-m-left-cont'>
                    <h1 className='dash-middle-m-left-main-head'>Statistics</h1>
                    
                    {/* Enhanced Statistics Cards */}
                    <div className='dash-stats-cont'>
                        <div className='dash-stats-parts revenue-card'>
                            <div className='dash-stats-enhance-cont'>
                                <h1 className='dash-stats-enhance'><FaMoneyBillWave /> Revenue</h1>
                            </div>
                            <div className='dash-stats-parts-heads-cont'>
                                <h1 className='dash-stats-parts-heads'>Today's Revenue</h1>
                            </div>
                            <p className='dash-stats-parts-count'>₹ {dashboardStats.todayRevenue.toLocaleString()}</p>
                            <div className='dash-stats-parts-inner-cont'>
                                <p className='dash-stats-parts-percent positive'><FaArrowUp /> +{dashboardStats.monthlyGrowth}%</p>
                                <p className='dash-stats-parts-p'>vs Last Month</p>
                            </div>
                            <div className='stats-progress-bar'>
                                <div className='progress-fill' style={{width: '85%'}}></div>
                            </div>
                        </div>

                        <div className='dash-stats-parts orders-card'>
                            <div className='dash-stats-enhance-cont'>
                                <h1 className='dash-stats-enhance'><BiSolidDish /> Orders</h1>
                            </div>
                            <div className='dash-stats-parts-heads-cont'>
                                <h1 className='dash-stats-parts-heads'>Today's Orders</h1>
                            </div>
                            <p className='dash-stats-parts-count'>{dashboardStats.todayOrders}</p>
                            <div className='dash-stats-parts-inner-cont'>
                                <p className='dash-stats-parts-percent positive'><FaArrowUp /> +40%</p>
                                <p className='dash-stats-parts-p'>vs Yesterday</p>
                            </div>
                            <div className='order-breakdown'>
                                <span className='completed-orders'>{dashboardStats.completedOrders} Completed</span>
                                <span className='pending-orders'>{dashboardStats.pendingOrders} Pending</span>
                            </div>
                        </div>

                        <div className='dash-stats-parts average-card'>
                            <div className='dash-stats-enhance-cont'>
                                <h1 className='dash-stats-enhance'><FaChartLine /> Average</h1>
                            </div>
                            <div className='dash-stats-parts-heads-cont'>
                                <h1 className='dash-stats-parts-heads'>Average Order Value</h1>
                            </div>
                            <p className='dash-stats-parts-count'>₹ {dashboardStats.averageOrderValue.toFixed(0)}</p>
                            <div className='dash-stats-parts-inner-cont'>
                                <p className='dash-stats-parts-percent positive'><FaArrowUp /> +15%</p>
                                <p className='dash-stats-parts-p'>vs Last Week</p>
                            </div>
                            <div className='average-indicator'>
                                <span className='indicator-label'>High Value</span>
                                <div className='indicator-bar'>
                                    <div className='indicator-fill' style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='dash-stats-parts top-selling-card'>
                            <div className='dash-stats-enhance-cont'>
                                <h1 className='dash-stats-enhance'><MdRestaurant /> Top Dish</h1>
                            </div>
                            <div className='dash-stats-parts-heads-cont'>
                                <h1 className='dash-stats-parts-heads'>Best Selling Dish</h1>
                            </div>
                            <p className='dash-stats-parts-count on-sp-count'>{dashboardStats.topSellingDish}</p>
                            <div className='dash-stats-parts-inner-cont'>
                                <p className='dash-stats-parts-selling-ye'>{dashboardStats.topSellingCount} Orders</p>
                                <p className='dash-stats-parts-p'>Today</p>
                            </div>
                            <div className='dish-popularity'>
                                <span className='popularity-label'>Popularity</span>
                                <div className='popularity-stars'>
                                    <FaStar className='star filled' />
                                    <FaStar className='star filled' />
                                    <FaStar className='star filled' />
                                    <FaStar className='star filled' />
                                    <FaStar className='star' />
                                </div>
                            </div>
                        </div>
                                         </div>

                     {/* Earnings Chart Section */}
                     <div className='dash-payment-cont earnings-chart-cont'>
                         <h1 className='dash-payment-one'>Earnings Trend</h1>
                         <div className='chart-container'>
                             <div className='chart-header'>
                                 <div className='chart-period-selector'>
                                     <button className='period-btn active'>Last Month</button>
                                     <button className='period-btn'>Last Year</button>
                                 </div>
                                 <div className='chart-stats'>
                                     <div className='chart-stat-item'>
                                         <span className='stat-label'>Total</span>
                                         <span className='stat-value'>₹ 4,85,200</span>
                                     </div>
                                     <div className='chart-stat-item'>
                                         <span className='stat-label'>Average</span>
                                         <span className='stat-value'>₹ 16,173</span>
                                     </div>
                                     <div className='chart-stat-item'>
                                         <span className='stat-label'>Growth</span>
                                         <span className='stat-value positive'>+23.4%</span>
                                     </div>
                                 </div>
                             </div>
                             <div className='chart-area'>
                                 <svg className='earnings-chart' viewBox="0 0 800 200" preserveAspectRatio="none">
                                     <defs>
                                         <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                             <stop offset="0%" stopColor="#952a88" stopOpacity="0.8"/>
                                             <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2"/>
                                         </linearGradient>
                                         <filter id="glow">
                                             <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                             <feMerge> 
                                                 <feMergeNode in="coloredBlur"/>
                                                 <feMergeNode in="SourceGraphic"/>
                                             </feMerge>
                                         </filter>
                                     </defs>
                                     <path 
                                         className='chart-line' 
                                         d={earningsData.map((point, index) => {
                                             const x = (index / (earningsData.length - 1)) * 750 + 25;
                                             const maxEarnings = Math.max(...earningsData.map(d => d.earnings));
                                             const y = 180 - ((point.earnings / maxEarnings) * 160) + 10;
                                             return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                                         }).join(' ')}
                                         stroke="url(#chartGradient)"
                                         strokeWidth="3"
                                         fill="none"
                                         filter="url(#glow)"
                                     />
                                     <path 
                                         className='chart-area-fill' 
                                         d={`M 25 190 ${earningsData.map((point, index) => {
                                             const x = (index / (earningsData.length - 1)) * 750 + 25;
                                             const maxEarnings = Math.max(...earningsData.map(d => d.earnings));
                                             const y = 180 - ((point.earnings / maxEarnings) * 160) + 10;
                                             return `L ${x} ${y}`;
                                         }).join(' ')} L 775 190 Z`}
                                         fill="url(#chartGradient)"
                                     />
                                     {earningsData.map((point, index) => {
                                         const x = (index / (earningsData.length - 1)) * 750 + 25;
                                         const maxEarnings = Math.max(...earningsData.map(d => d.earnings));
                                         const y = 180 - ((point.earnings / maxEarnings) * 160) + 10;
                                         return (
                                             <circle 
                                                 key={index}
                                                 className='chart-point'
                                                 cx={x} 
                                                 cy={y} 
                                                 r="4"
                                                 fill="#952a88"
                                                 stroke="#ffffff"
                                                 strokeWidth="2"
                                             />
                                         );
                                     })}
                                     <line className='chart-grid-line' x1="25" y1="30" x2="775" y2="30" stroke="rgba(149, 42, 136, 0.1)" strokeWidth="1"/>
                                     <line className='chart-grid-line' x1="25" y1="70" x2="775" y2="70" stroke="rgba(149, 42, 136, 0.1)" strokeWidth="1"/>
                                     <line className='chart-grid-line' x1="25" y1="110" x2="775" y2="110" stroke="rgba(149, 42, 136, 0.1)" strokeWidth="1"/>
                                     <line className='chart-grid-line' x1="25" y1="150" x2="775" y2="150" stroke="rgba(149, 42, 136, 0.1)" strokeWidth="1"/>
                                 </svg>
                             </div>
                             <div className='chart-labels'>
                                 <span className='chart-label'>June 15</span>
                                 <span className='chart-label'>June 30</span>
                                 <span className='chart-label'>July 15</span>
                                 <span className='chart-label'>July 21</span>
                             </div>
                         </div>
                     </div>

                     {/* Payment Methods Section */}
                    <div className='dash-payment-cont'>
                        <h1 className='dash-payment-one'>Payment Methods</h1>
                        <div className='payment-methods-grid'>
                            {paymentMethods.map((method, index) => (
                                <div key={index} className='payment-method-item'>
                                    <div className='payment-method-icon'>
                                        <BsQrCodeScan className='dash-payment-inner-logo' />
                                    </div>
                                    <div className='payment-method-details'>
                                        <h3 className='dash-payment-inner-text'>{method.method}</h3>
                                        <p className='dash-payment-inner-price'>₹ {method.amount.toLocaleString()}</p>
                                        <div className='payment-percentage-bar'>
                                            <div className='percentage-fill' style={{width: `${method.percentage}%`}}></div>
                                        </div>
                                        <span className='percentage-text'>{method.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Waiter Availability Section */}
                    <div className='dash-payment-cont dash-waiter-availability'>
                        <h1 className='dash-payment-one'>Staff Status</h1>
                        <ul className='dash-waiter-availability-inner-cont'>
                            {waiterStatus.map((waiter, index) => (
                                <li key={index} className='dash-waiter-availability-inner-item'>
                                    <div className='waiter-info'>
                                        <h1 className='dash-waiter-availability-item-name'>{waiter.name}</h1>
                                        <span className='waiter-efficiency'>{waiter.efficiency}% Efficiency</span>
                                    </div>
                                    <div className={`dash-waiter-availability-item-action ${getStatusClass(waiter.status)}`}>
                                        {getStatusIcon(waiter.status)}
                                        <p className='waiter-action-text'>{getStatusText(waiter.status)}</p>
                                    </div>
                                    <p className='dash-waiter-availability-item-table'>
                                        {waiter.table ? `Table ${waiter.table}` : <TfiLineDashed className='available-line' />}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Section - Recent Orders */}
                <div className='dash-middle-m-right-cont'>
                    <h1 className='dash-middle-m-right-head'>Recent Orders</h1>
                    <ul className='dash-middle-m-right-list'>
                        {recentOrders.map((order, index) => (
                            <li key={order.id} className={`dash-middle-m-right-list-item ${getOrderStatusClass(order.status)}`}>
                                <p className='dash-middle-m-right-list-item-number'>#{order.id}</p>
                                <div className='dash-middle-m-right-list-item-cont-one'>
                                    <div className='dash-middle-m-right-list-item-cont'>
                                        <h1 className='dash-middle-m-right-list-item-head'>{order.tableNumber}</h1>
                                        <p className='dash-middle-m-right-list-item-name'>{order.waiter}</p>
                                    </div>
                                    <button type='button' className={`dash-middle-m-right-list-item-button ${order.status}`}>
                                        {order.status.toUpperCase()}
                                    </button>
                                </div>
                                <div className='dash-middle-m-right-list-item-cont-two'>
                                    <hr className='dash-middle-m-right-list-item-hr' />
                                    <h1 className='dash-middle-m-right-list-item-button-text'>
                                        {order.status === 'completed' ? 'Order Served' : 'Order Preparing'}
                                    </h1>
                                    <hr className='dash-middle-m-right-list-item-hr' />
                                </div>
                                <div className='dash-middle-m-right-list-item-cont-three'>
                                    <p className='dash-middle-m-right-list-item-cont-three-text'>{order.date} {order.time}</p>
                                    <p className='dash-middle-m-right-list-item-cont-three-text'>
                                        <span className='dash-middle-m-right-list-item-cont-three-text-span'>{order.items}</span> Items
                                    </p>
                                </div>
                                <hr className='dash-middle-m-right-list-item-hr' />
                                <div className='dash-middle-m-right-list-item-cont-four'>
                                    <h1 className='dash-middle-m-right-list-item-cont-four-head'>₹ {order.amount}</h1>
                                    <p className='dash-middle-m-right-list-item-cont-four-text'>{order.customer}</p>
                                </div>
                                <div className='order-payment-method'>
                                    <span className='payment-method-badge'>{order.paymentMethod}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )   
}

export default Dashboard