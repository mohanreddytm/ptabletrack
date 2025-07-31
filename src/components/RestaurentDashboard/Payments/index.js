import React, { useState, useContext } from 'react';
import { FaCreditCard, FaMoneyBillWave, FaWallet, FaChartLine, FaHistory, FaFilter, FaSearch, FaDownload, FaEye, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import { MdPayment, MdAccountBalance, MdTrendingUp, MdTrendingDown, MdReceipt } from 'react-icons/md';
import { IoMdCard } from 'react-icons/io';
import AllInOne from '../../../complexOne';
import './index.css';

const Payments = () => {
    const { statusOne } = useContext(AllInOne);
    
    // Mock data for payments
    const [payments, setPayments] = useState([
        {
            id: 1,
            customerName: 'John Smith',
            orderId: 'ORD-001',
            amount: 45.99,
            paymentMethod: 'credit_card',
            status: 'completed',
            date: '2024-01-15',
            time: '19:30',
            transactionId: 'TXN-789456',
            tip: 8.00,
            subtotal: 37.99,
            tax: 3.04
        },
        {
            id: 2,
            customerName: 'Sarah Johnson',
            orderId: 'ORD-002',
            amount: 67.50,
            paymentMethod: 'cash',
            status: 'pending',
            date: '2024-01-16',
            time: '20:15',
            transactionId: 'TXN-789457',
            tip: 10.00,
            subtotal: 57.50,
            tax: 4.60
        },
        {
            id: 3,
            customerName: 'Mike Wilson',
            orderId: 'ORD-003',
            amount: 89.25,
            paymentMethod: 'digital_wallet',
            status: 'completed',
            date: '2024-01-15',
            time: '18:45',
            transactionId: 'TXN-789458',
            tip: 15.00,
            subtotal: 74.25,
            tax: 5.94
        },
        {
            id: 4,
            customerName: 'Emily Davis',
            orderId: 'ORD-004',
            amount: 32.75,
            paymentMethod: 'credit_card',
            status: 'failed',
            date: '2024-01-17',
            time: '21:00',
            transactionId: 'TXN-789459',
            tip: 5.00,
            subtotal: 27.75,
            tax: 2.22
        },
        {
            id: 5,
            customerName: 'David Brown',
            orderId: 'ORD-005',
            amount: 120.00,
            paymentMethod: 'bank_transfer',
            status: 'completed',
            date: '2024-01-18',
            time: '19:20',
            transactionId: 'TXN-789460',
            tip: 20.00,
            subtotal: 100.00,
            tax: 8.00
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [paymentMethodFilter, setPaymentMethodFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('');
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    // Filter payments based on search and filters
    const filteredPayments = payments.filter(payment => {
        const matchesSearch = payment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            payment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
        const matchesMethod = paymentMethodFilter === 'all' || payment.paymentMethod === paymentMethodFilter;
        const matchesDate = !dateFilter || payment.date === dateFilter;
        
        return matchesSearch && matchesStatus && matchesMethod && matchesDate;
    });

    // Calculate analytics
    const totalRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0);
    const pendingAmount = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0);
    const failedAmount = payments.filter(p => p.status === 'failed').reduce((sum, p) => sum + p.amount, 0);
    const totalTips = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.tip, 0);

    // Get payment method icon
    const getPaymentMethodIcon = (method) => {
        switch (method) {
            case 'credit_card': return <FaCreditCard />;
            case 'cash': return <FaMoneyBillWave />;
            case 'digital_wallet': return <FaWallet />;
            case 'bank_transfer': return <MdAccountBalance />;
            default: return <IoMdCard />;
        }
    };

    // Get payment method name
    const getPaymentMethodName = (method) => {
        switch (method) {
            case 'credit_card': return 'Credit Card';
            case 'cash': return 'Cash';
            case 'digital_wallet': return 'Digital Wallet';
            case 'bank_transfer': return 'Bank Transfer';
            default: return 'Unknown';
        }
    };

    // Get status class and icon
    const getStatusInfo = (status) => {
        switch (status) {
            case 'completed':
                return { class: 'completed', icon: <FaCheckCircle />, color: '#28a745' };
            case 'pending':
                return { class: 'pending', icon: <FaClock />, color: '#ffc107' };
            case 'failed':
                return { class: 'failed', icon: <FaTimesCircle />, color: '#dc3545' };
            default:
                return { class: 'unknown', icon: <FaClock />, color: '#6c757d' };
        }
    };

    // View payment details
    const viewPaymentDetails = (payment) => {
        setSelectedPayment(payment);
        setShowPaymentDetails(true);
    };

    return (
        <div className="menu-page-main-cont payments-main-cont">
            {/* Header */}
            <div className="payments-header">
                <div className="payments-header-left">
                    <h2>Payments</h2>
                    <p>Manage payment transactions and revenue tracking</p>
                </div>
                <div className="payments-header-actions">
                    <button className="payments-export-btn">
                        <FaDownload />
                        Export
                    </button>
                    <button className="payments-analytics-btn">
                        <FaChartLine />
                        Analytics
                    </button>
                </div>
            </div>

            {/* Analytics Cards */}
            <div className="payments-analytics">
                <div className="analytics-card revenue">
                    <div className="analytics-icon">
                        <MdTrendingUp />
                    </div>
                    <div className="analytics-content">
                        <h3>Total Revenue</h3>
                        <p className="analytics-amount">${totalRevenue.toFixed(2)}</p>
                        <span className="analytics-change positive">+12.5%</span>
                    </div>
                </div>
                
                <div className="analytics-card pending">
                    <div className="analytics-icon">
                        <FaClock />
                    </div>
                    <div className="analytics-content">
                        <h3>Pending Payments</h3>
                        <p className="analytics-amount">${pendingAmount.toFixed(2)}</p>
                        <span className="analytics-change neutral">3 payments</span>
                    </div>
                </div>
                
                <div className="analytics-card tips">
                    <div className="analytics-icon">
                        <FaMoneyBillWave />
                    </div>
                    <div className="analytics-content">
                        <h3>Total Tips</h3>
                        <p className="analytics-amount">${totalTips.toFixed(2)}</p>
                        <span className="analytics-change positive">+8.2%</span>
                    </div>
                </div>
                
                <div className="analytics-card failed">
                    <div className="analytics-icon">
                        <MdTrendingDown />
                    </div>
                    <div className="analytics-content">
                        <h3>Failed Payments</h3>
                        <p className="analytics-amount">${failedAmount.toFixed(2)}</p>
                        <span className="analytics-change negative">1 payment</span>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="payments-filters">
                <div className="payments-search">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by customer, order ID, or transaction ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <div className="payments-filter-controls">
                    <div className="filter-group">
                        <FaFilter />
                        <select 
                            value={statusFilter} 
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="failed">Failed</option>
                        </select>
                    </div>
                    
                    <div className="filter-group">
                        <MdPayment />
                        <select 
                            value={paymentMethodFilter} 
                            onChange={(e) => setPaymentMethodFilter(e.target.value)}
                        >
                            <option value="all">All Methods</option>
                            <option value="credit_card">Credit Card</option>
                            <option value="cash">Cash</option>
                            <option value="digital_wallet">Digital Wallet</option>
                            <option value="bank_transfer">Bank Transfer</option>
                        </select>
                    </div>
                    
                    <div className="filter-group">
                        <FaHistory />
                        <input
                            type="date"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            placeholder="Filter by date"
                        />
                    </div>
                </div>
            </div>

            {/* Payments List */}
            <div className="payments-list">
                {filteredPayments.length === 0 ? (
                    <div className="payments-empty">
                        <MdReceipt />
                        <h3>No payments found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className="payments-table">
                        <div className="payments-table-header">
                            <div className="table-cell">Customer</div>
                            <div className="table-cell">Order ID</div>
                            <div className="table-cell">Amount</div>
                            <div className="table-cell">Payment Method</div>
                            <div className="table-cell">Status</div>
                            <div className="table-cell">Date</div>
                            <div className="table-cell">Actions</div>
                        </div>
                        
                        {filteredPayments.map(payment => {
                            const statusInfo = getStatusInfo(payment.status);
                            return (
                                <div key={payment.id} className={`payments-table-row ${statusInfo.class}`}>
                                    <div className="table-cell customer">
                                        <div className="customer-info">
                                            <div className="customer-avatar">
                                                {payment.customerName.charAt(0)}
                                            </div>
                                            <div>
                                                <h4>{payment.customerName}</h4>
                                                <p>{payment.transactionId}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="table-cell order-id">
                                        {payment.orderId}
                                    </div>
                                    
                                    <div className="table-cell amount">
                                        <div className="amount-details">
                                            <span className="total-amount">${payment.amount.toFixed(2)}</span>
                                            <span className="tip-amount">Tip: ${payment.tip.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="table-cell payment-method">
                                        <div className="method-info">
                                            <span className="method-icon">
                                                {getPaymentMethodIcon(payment.paymentMethod)}
                                            </span>
                                            <span className="method-name">
                                                {getPaymentMethodName(payment.paymentMethod)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="table-cell status">
                                        <div className={`status-badge ${statusInfo.class}`}>
                                            <span className="status-icon">{statusInfo.icon}</span>
                                            <span className="status-text">
                                                {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="table-cell date">
                                        <div className="date-info">
                                            <span className="date-text">{payment.date}</span>
                                            <span className="time-text">{payment.time}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="table-cell actions">
                                        <button 
                                            className="action-btn view"
                                            onClick={() => viewPaymentDetails(payment)}
                                        >
                                            <FaEye />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Payment Details Modal */}
            {showPaymentDetails && selectedPayment && (
                <div className="payment-modal-overlay">
                    <div className="payment-modal">
                        <div className="payment-modal-header">
                            <h3>Payment Details</h3>
                            <button onClick={() => setShowPaymentDetails(false)}>&times;</button>
                        </div>
                        
                        <div className="payment-modal-body">
                            <div className="payment-details-grid">
                                <div className="detail-section">
                                    <h4>Customer Information</h4>
                                    <div className="detail-item">
                                        <span className="label">Name:</span>
                                        <span className="value">{selectedPayment.customerName}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Order ID:</span>
                                        <span className="value">{selectedPayment.orderId}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Transaction ID:</span>
                                        <span className="value">{selectedPayment.transactionId}</span>
                                    </div>
                                </div>
                                
                                <div className="detail-section">
                                    <h4>Payment Information</h4>
                                    <div className="detail-item">
                                        <span className="label">Payment Method:</span>
                                        <span className="value">
                                            <span className="method-icon">
                                                {getPaymentMethodIcon(selectedPayment.paymentMethod)}
                                            </span>
                                            {getPaymentMethodName(selectedPayment.paymentMethod)}
                                        </span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Status:</span>
                                        <span className={`value status ${getStatusInfo(selectedPayment.status).class}`}>
                                            {getStatusInfo(selectedPayment.status).icon}
                                            {selectedPayment.status.charAt(0).toUpperCase() + selectedPayment.status.slice(1)}
                                        </span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Date & Time:</span>
                                        <span className="value">{selectedPayment.date} at {selectedPayment.time}</span>
                                    </div>
                                </div>
                                
                                <div className="detail-section">
                                    <h4>Amount Breakdown</h4>
                                    <div className="amount-breakdown">
                                        <div className="breakdown-item">
                                            <span className="label">Subtotal:</span>
                                            <span className="value">${selectedPayment.subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="breakdown-item">
                                            <span className="label">Tax:</span>
                                            <span className="value">${selectedPayment.tax.toFixed(2)}</span>
                                        </div>
                                        <div className="breakdown-item">
                                            <span className="label">Tip:</span>
                                            <span className="value">${selectedPayment.tip.toFixed(2)}</span>
                                        </div>
                                        <div className="breakdown-item total">
                                            <span className="label">Total:</span>
                                            <span className="value">${selectedPayment.amount.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="payment-modal-footer">
                            <button 
                                className="payment-modal-close"
                                onClick={() => setShowPaymentDetails(false)}
                            >
                                Close
                            </button>
                            <button className="payment-modal-receipt">
                                <MdReceipt />
                                Download Receipt
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payments; 