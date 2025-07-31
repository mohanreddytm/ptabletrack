import React, { useState, useContext } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaCalendarAlt, FaClock, FaUsers, FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdPerson, MdLocationOn, MdEvent } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import AllInOne from '../../../complexOne';
import './index.css';

const Reservations = () => {
    const { statusOne } = useContext(AllInOne);
    
    // Mock data for reservations
    const [reservations, setReservations] = useState([
        {
            id: 1,
            customerName: 'John Smith',
            phone: '+1 (555) 123-4567',
            email: 'john.smith@email.com',
            date: '2024-01-15',
            time: '19:00',
            partySize: 4,
            tableNumber: 'A12',
            status: 'confirmed',
            specialRequests: 'Window seat preferred',
            createdAt: '2024-01-10'
        },
        {
            id: 2,
            customerName: 'Sarah Johnson',
            phone: '+1 (555) 987-6543',
            email: 'sarah.j@email.com',
            date: '2024-01-16',
            time: '20:30',
            partySize: 2,
            tableNumber: 'B8',
            status: 'pending',
            specialRequests: 'Anniversary celebration',
            createdAt: '2024-01-11'
        },
        {
            id: 3,
            customerName: 'Mike Wilson',
            phone: '+1 (555) 456-7890',
            email: 'mike.w@email.com',
            date: '2024-01-15',
            time: '18:00',
            partySize: 6,
            tableNumber: 'C15',
            status: 'confirmed',
            specialRequests: 'High chair needed',
            createdAt: '2024-01-09'
        },
        {
            id: 4,
            customerName: 'Emily Davis',
            phone: '+1 (555) 321-0987',
            email: 'emily.d@email.com',
            date: '2024-01-17',
            time: '19:30',
            partySize: 3,
            tableNumber: 'A5',
            status: 'cancelled',
            specialRequests: '',
            createdAt: '2024-01-12'
        },
        {
            id: 5,
            customerName: 'David Brown',
            phone: '+1 (555) 654-3210',
            email: 'david.b@email.com',
            date: '2024-01-18',
            time: '21:00',
            partySize: 8,
            tableNumber: 'D20',
            status: 'confirmed',
            specialRequests: 'Business dinner',
            createdAt: '2024-01-13'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [formData, setFormData] = useState({
        customerName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        partySize: '',
        tableNumber: '',
        status: 'pending',
        specialRequests: ''
    });

    // Filter reservations based on search and filters
    const filteredReservations = reservations.filter(reservation => {
        const matchesSearch = reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            reservation.phone.includes(searchTerm) ||
                            reservation.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || reservation.status === statusFilter;
        const matchesDate = !dateFilter || reservation.date === dateFilter;
        
        return matchesSearch && matchesStatus && matchesDate;
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Add new reservation
    const handleAddReservation = () => {
        const newReservation = {
            id: Date.now(),
            ...formData,
            createdAt: new Date().toISOString().split('T')[0]
        };
        setReservations(prev => [...prev, newReservation]);
        setFormData({
            customerName: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            partySize: '',
            tableNumber: '',
            status: 'pending',
            specialRequests: ''
        });
        setShowAddModal(false);
    };

    // Edit reservation
    const handleEditReservation = () => {
        setReservations(prev => prev.map(reservation => 
            reservation.id === selectedReservation.id 
                ? { ...selectedReservation, ...formData }
                : reservation
        ));
        setShowEditModal(false);
        setSelectedReservation(null);
        setFormData({
            customerName: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            partySize: '',
            tableNumber: '',
            status: 'pending',
            specialRequests: ''
        });
    };

    // Delete reservation
    const handleDeleteReservation = (id) => {
        if (window.confirm('Are you sure you want to delete this reservation?')) {
            setReservations(prev => prev.filter(reservation => reservation.id !== id));
        }
    };

    // Open edit modal
    const openEditModal = (reservation) => {
        setSelectedReservation(reservation);
        setFormData({
            customerName: reservation.customerName,
            phone: reservation.phone,
            email: reservation.email,
            date: reservation.date,
            time: reservation.time,
            partySize: reservation.partySize.toString(),
            tableNumber: reservation.tableNumber,
            status: reservation.status,
            specialRequests: reservation.specialRequests
        });
        setShowEditModal(true);
    };

    // Get status class for card styling
    const getStatusClass = (status) => {
        return `status-${status}`;
    };

    // Get status note
    const getStatusNote = (status) => {
        return (
            <div className={`reservation-status-note ${status}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
        );
    };

    return (
        <div className="menu-page-main-cont reservations-main-cont">
            {/* Header */}
            <div className="reservations-header">
                <div className="reservations-header-left">
                    <h2>Reservations</h2>
                    <p>Manage restaurant reservations and bookings</p>
                </div>
                <button 
                    className="reservations-add-button"
                    onClick={() => setShowAddModal(true)}
                >
                    <FaPlus />
                    Add Reservation
                </button>
            </div>

            {/* Filters and Search */}
            <div className="reservations-filters">
                <div className="reservations-search">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by name, phone, or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <div className="reservations-filter-controls">
                    <div className="filter-group">
                        <FaFilter />
                        <select 
                            value={statusFilter} 
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="pending">Pending</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                    
                    <div className="filter-group">
                        <FaCalendarAlt />
                        <input
                            type="date"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            placeholder="Filter by date"
                        />
                    </div>
                </div>
            </div>

            <div className="reservations-stats-cont">
                <div>
                    <p className='reservations-stats-cont-title'>Total Reservations</p>
                    <p className='reservations-stats-cont-value'>10</p>
                </div>
                <div>
                    <p className='reservations-stats-cont-title-2'></p>
                    <p className='reservations-stats-cont-value-2'>Confirmed</p>
                </div>
                <div>
                    <p className='reservations-stats-cont-title-3'></p>
                    <p className='reservations-stats-cont-value-3'>Pending</p>
                </div>
                <div>
                    <p className='reservations-stats-cont-title-4'></p>
                    <p className='reservations-stats-cont-value-4'>Cancelled</p>
                </div>
            </div>

            {/* Reservations List */}
            <div className="reservations-list">
                {filteredReservations.length === 0 ? (
                    <div className="reservations-empty">
                        <MdEvent />
                        <h3>No reservations found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className="reservations-grid">
                        {filteredReservations.map(reservation => (
                            <div key={reservation.id} className={`reservation-card ${getStatusClass(reservation.status)}`}>
                                <div className="reservation-card-header">
                                    <div className="reservation-customer-info">
                                        <div className="reservation-avatar">
                                            <MdPerson />
                                        </div>
                                        <div>
                                            <h4>{reservation.customerName}</h4>
                                            <p>{reservation.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="reservation-details">
                                    <div className="reservation-detail-item">
                                        <FaCalendarAlt />
                                        <span>{reservation.date}</span>
                                    </div>
                                    <div className="reservation-detail-item">
                                        <FaClock />
                                        <span>{reservation.time}</span>
                                    </div>
                                    <div className="reservation-detail-item">
                                        <FaUsers />
                                        <span>{reservation.partySize} people</span>
                                    </div>
                                    <div className="reservation-detail-item">
                                        <MdLocationOn />
                                        <span>Table {reservation.tableNumber}</span>
                                    </div>
                                    {reservation.specialRequests && (
                                        <div className="reservation-special-requests">
                                            <p><strong>Special Requests:</strong> {reservation.specialRequests}</p>
                                        </div>
                                    )}
                                </div>
                                
                                    <div className="reservation-actions">
                                        <button 
                                            className="reservation-action-btn edit"
                                            onClick={() => openEditModal(reservation)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button 
                                            className="reservation-action-btn delete"
                                            onClick={() => handleDeleteReservation(reservation.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Reservation Modal */}
            {showAddModal && (
                <div className="reservation-modal-overlay">
                    <div className="reservation-modal">
                        <div className="reservation-modal-header">
                            <h3>Add New Reservation</h3>
                            <button onClick={() => setShowAddModal(false)}>&times;</button>
                        </div>
                        
                        <div className="reservation-modal-body">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Customer Name</label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleInputChange}
                                        placeholder="Enter customer name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Party Size</label>
                                    <input
                                        type="number"
                                        name="partySize"
                                        value={formData.partySize}
                                        onChange={handleInputChange}
                                        placeholder="Number of people"
                                        min="1"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Table Number</label>
                                    <input
                                        type="text"
                                        name="tableNumber"
                                        value={formData.tableNumber}
                                        onChange={handleInputChange}
                                        placeholder="Table number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea
                                    name="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={handleInputChange}
                                    placeholder="Any special requests or notes..."
                                    rows="3"
                                />
                            </div>
                        </div>
                        
                        <div className="reservation-modal-footer">
                            <button 
                                className="reservation-modal-cancel"
                                onClick={() => setShowAddModal(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="reservation-modal-save"
                                onClick={handleAddReservation}
                            >
                                Add Reservation
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Reservation Modal */}
            {showEditModal && (
                <div className="reservation-modal-overlay">
                    <div className="reservation-modal">
                        <div className="reservation-modal-header">
                            <h3>Edit Reservation</h3>
                            <button onClick={() => setShowEditModal(false)}>&times;</button>
                        </div>
                        
                        <div className="reservation-modal-body">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Customer Name</label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleInputChange}
                                        placeholder="Enter customer name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Party Size</label>
                                    <input
                                        type="number"
                                        name="partySize"
                                        value={formData.partySize}
                                        onChange={handleInputChange}
                                        placeholder="Number of people"
                                        min="1"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Table Number</label>
                                    <input
                                        type="text"
                                        name="tableNumber"
                                        value={formData.tableNumber}
                                        onChange={handleInputChange}
                                        placeholder="Table number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea
                                    name="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={handleInputChange}
                                    placeholder="Any special requests or notes..."
                                    rows="3"
                                />
                            </div>
                        </div>
                        
                        <div className="reservation-modal-footer">
                            <button 
                                className="reservation-modal-cancel"
                                onClick={() => setShowEditModal(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="reservation-modal-save"
                                onClick={handleEditReservation}
                            >
                                Update Reservation
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reservations; 