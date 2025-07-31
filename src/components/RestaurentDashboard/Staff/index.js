import React, { useState, useContext } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaSearch, FaFilter } from 'react-icons/fa';
import { MdPerson, MdEmail, MdPhone, MdLocationOn, MdWork } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import AllInOne from '../../../complexOne';
import './index.css';

const Staff = () => {
    const { userId } = useContext(AllInOne);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
    
    const [staffData, setStaffData] = useState([
        {
            id: 1,
            name: 'John Smith',
            email: 'john.smith@restaurant.com',
            phone: '+91 98765 43210',
            role: 'Waiter',
            status: 'Active',
            joinDate: '2024-01-15',
            salary: '₹15,000',
            address: 'Kurnool, Andhra Pradesh',
            image: null
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah.johnson@restaurant.com',
            phone: '+91 98765 43211',
            role: 'Chef',
            status: 'Active',
            joinDate: '2023-08-20',
            salary: '₹25,000',
            address: 'Kurnool, Andhra Pradesh',
            image: null
        },
        {
            id: 3,
            name: 'Mike Wilson',
            email: 'mike.wilson@restaurant.com',
            phone: '+91 98765 43212',
            role: 'Manager',
            status: 'Active',
            joinDate: '2023-06-10',
            salary: '₹35,000',
            address: 'Kurnool, Andhra Pradesh',
            image: null
        },
        {
            id: 4,
            name: 'Emily Davis',
            email: 'emily.davis@restaurant.com',
            phone: '+91 98765 43213',
            role: 'Waiter',
            status: 'Inactive',
            joinDate: '2024-02-01',
            salary: '₹15,000',
            address: 'Kurnool, Andhra Pradesh',
            image: null
        }
    ]);

    const [newStaff, setNewStaff] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'Waiter',
        salary: '',
        address: ''
    });

    const roles = ['Waiter', 'Chef', 'Manager', 'Cashier', 'Kitchen Helper', 'Host'];
    const statuses = ['Active', 'Inactive', 'On Leave'];

    const filteredStaff = staffData.filter(staff => {
        const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            staff.phone.includes(searchTerm);
        const matchesRole = selectedRole === 'all' || staff.role === selectedRole;
        const matchesStatus = selectedStatus === 'all' || staff.status === selectedStatus;
        
        return matchesSearch && matchesRole && matchesStatus;
    });

    const handleAddStaff = () => {
        if (newStaff.name && newStaff.email && newStaff.phone) {
            const staff = {
                id: staffData.length + 1,
                ...newStaff,
                status: 'Active',
                joinDate: new Date().toISOString().split('T')[0],
                image: null
            };
            setStaffData([...staffData, staff]);
            setNewStaff({
                name: '',
                email: '',
                phone: '',
                role: 'Waiter',
                salary: '',
                address: ''
            });
            setShowAddModal(false);
        }
    };

    const handleEditStaff = () => {
        if (selectedStaff) {
            setStaffData(staffData.map(staff => 
                staff.id === selectedStaff.id ? { ...staff, ...selectedStaff } : staff
            ));
            setShowEditModal(false);
            setSelectedStaff(null);
        }
    };

    const handleDeleteStaff = (id) => {
        if (window.confirm('Are you sure you want to delete this staff member?')) {
            setStaffData(staffData.filter(staff => staff.id !== id));
        }
    };

    const handleStatusChange = (id, newStatus) => {
        setStaffData(staffData.map(staff => 
            staff.id === id ? { ...staff, status: newStatus } : staff
        ));
    };

    return (
        <div className="menu-page-main-cont staff-main-cont">
            <div className="staff-header-cont">
                <div className="staff-header-left">
                    <h1 className="staff-header-title">Staff Management</h1>
                    <p className="staff-header-subtitle">Manage your restaurant staff</p>
                </div>
                <div className="staff-header-right">
                    <button 
                        className="staff-add-button"
                        onClick={() => setShowAddModal(true)}
                    >
                        <FaPlus /> Add Staff
                    </button>
                </div>
            </div>
            <div className="staff-filters-cont">
                <div className="staff-search-cont">
                    <FaSearch className="staff-search-icon" />
                    <input
                        type="text"
                        placeholder="Search staff by name, email, or phone..."
                        className="staff-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <div className="staff-filter-options">
                    <select 
                        className="staff-filter-select"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <option value="all">All Roles</option>
                        {roles.map(role => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                    
                    <select 
                        className="staff-filter-select"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        {statuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="staff-list-cont">
                {filteredStaff.length > 0 ? (
                    <div className="staff-grid">
                        {filteredStaff.map(staff => (
                            <div key={staff.id} className="staff-card">
                                <div className="staff-card-header">
                                    <div className="staff-avatar">
                                        <MdPerson />
                                    </div>
                                    <div className="staff-status-badge">
                                        <span className={`status-dot ${staff.status.toLowerCase()}`}></span>
                                        {staff.status}
                                    </div>
                                </div>
                                
                                <div className="staff-card-body">
                                    <h3 className="staff-name">{staff.name}</h3>
                                    <p className="staff-role">{staff.role}</p>
                                    
                                    <div className="staff-info">
                                        <div className="staff-info-item">
                                            <MdEmail className="staff-info-icon" />
                                            <span>{staff.email}</span>
                                        </div>
                                        <div className="staff-info-item">
                                            <MdPhone className="staff-info-icon" />
                                            <span>{staff.phone}</span>
                                        </div>
                                        <div className="staff-info-item">
                                            <MdLocationOn className="staff-info-icon" />
                                            <span>{staff.address}</span>
                                        </div>
                                        <div className="staff-info-item">
                                            <MdWork className="staff-info-icon" />
                                            <span>{staff.salary}</span>
                                        </div>
                                        <div className="staff-info-item">
                                            <IoMdTime className="staff-info-icon" />
                                            <span>Joined: {staff.joinDate}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="staff-card-actions">
                                    <button 
                                        className="staff-action-btn staff-edit-btn"
                                        onClick={() => {
                                            setSelectedStaff(staff);
                                            setShowEditModal(true);
                                        }}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button 
                                        className="staff-action-btn staff-delete-btn"
                                        onClick={() => handleDeleteStaff(staff.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="staff-empty-state">
                        <MdPerson className="staff-empty-icon" />
                        <h3>No staff found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
            {showAddModal && (
                <div className="staff-modal-overlay">
                    <div className="staff-modal">
                        <div className="staff-modal-header">
                            <h2>Add New Staff</h2>
                            <button 
                                className="staff-modal-close"
                                onClick={() => setShowAddModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="staff-modal-body">
                            <div className="staff-form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={newStaff.name}
                                    onChange={(e) => setNewStaff({...newStaff, name: e.target.value})}
                                    placeholder="Enter full name"
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={newStaff.email}
                                    onChange={(e) => setNewStaff({...newStaff, email: e.target.value})}
                                    placeholder="Enter email address"
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    value={newStaff.phone}
                                    onChange={(e) => setNewStaff({...newStaff, phone: e.target.value})}
                                    placeholder="Enter phone number"
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Role</label>
                                <select
                                    value={newStaff.role}
                                    onChange={(e) => setNewStaff({...newStaff, role: e.target.value})}
                                >
                                    {roles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Salary</label>
                                <input
                                    type="text"
                                    value={newStaff.salary}
                                    onChange={(e) => setNewStaff({...newStaff, salary: e.target.value})}
                                    placeholder="Enter salary"
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Address</label>
                                <textarea
                                    value={newStaff.address}
                                    onChange={(e) => setNewStaff({...newStaff, address: e.target.value})}
                                    placeholder="Enter address"
                                />
                            </div>
                        </div>
                        
                        <div className="staff-modal-footer">
                            <button 
                                className="staff-modal-btn staff-modal-cancel"
                                onClick={() => setShowAddModal(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="staff-modal-btn staff-modal-save"
                                onClick={handleAddStaff}
                            >
                                Add Staff
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showEditModal && selectedStaff && (
                <div className="staff-modal-overlay">
                    <div className="staff-modal">
                        <div className="staff-modal-header">
                            <h2>Edit Staff</h2>
                            <button 
                                className="staff-modal-close"
                                onClick={() => {
                                    setShowEditModal(false);
                                    setSelectedStaff(null);
                                }}
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="staff-modal-body">
                            <div className="staff-form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={selectedStaff.name}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, name: e.target.value})}
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={selectedStaff.email}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, email: e.target.value})}
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    value={selectedStaff.phone}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, phone: e.target.value})}
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Role</label>
                                <select
                                    value={selectedStaff.role}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, role: e.target.value})}
                                >
                                    {roles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Status</label>
                                <select
                                    value={selectedStaff.status}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, status: e.target.value})}
                                >
                                    {statuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Salary</label>
                                <input
                                    type="text"
                                    value={selectedStaff.salary}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, salary: e.target.value})}
                                />
                            </div>
                            
                            <div className="staff-form-group">
                                <label>Address</label>
                                <textarea
                                    value={selectedStaff.address}
                                    onChange={(e) => setSelectedStaff({...selectedStaff, address: e.target.value})}
                                />
                            </div>
                        </div>
                        
                        <div className="staff-modal-footer">
                            <button 
                                className="staff-modal-btn staff-modal-cancel"
                                onClick={() => {
                                    setShowEditModal(false);
                                    setSelectedStaff(null);
                                }}
                            >
                                Cancel
                            </button>
                            <button 
                                className="staff-modal-btn staff-modal-save"
                                onClick={handleEditStaff}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Staff; 