import Header from "../Header"
import MainBack from './style'
import RegisterImage from '../../../images/RegisterImage.jpg'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import React, { useState } from 'react'

import './index.css'

const RegisterMainRoute = () => {

    const [restaurantName, setRestaurantName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [branchName, setBranchName] = useState('');
    const [country, setCountry] = useState('India');
    const [branchAddress, setBranchAddress] = useState('');


    const countryCodes = [
        { name: 'India', code: 'IN', dial_code: '+91' },
        { name: 'United States', code: 'US', dial_code: '+1' },
        { name: 'United Kingdom', code: 'GB', dial_code: '+44' },
        { name: 'Canada', code: 'CA', dial_code: '+1' },
        { name: 'Australia', code: 'AU', dial_code: '+61' },
        { name: 'Germany', code: 'DE', dial_code: '+49' },
        { name: 'France', code: 'FR', dial_code: '+33' },
        { name: 'China', code: 'CN', dial_code: '+86' },
        { name: 'Japan', code: 'JP', dial_code: '+81' },
        { name: 'Brazil', code: 'BR', dial_code: '+55' },
    ];

  return (
    <div className="register-initial-cont">
      <Header />
      <div className="main-container-reg">
        <MainBack className="main-sub-reg" image={RegisterImage}>
            <form className="register-form">
                <div className="reg-form-left-cont">
                    <h2 className="reg-form-main-head">Register Your Restaurant</h2>   
                    <label htmlFor="restaurantName">Restaurant Name:</label>
                    <input className={`${restaurantName.length > 0 ? "filled" : ""}`} value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} type="text" id="restaurantName" name="restaurantName" required />
                    <label htmlFor="ownerName">Your Full Name:</label>
                    <input className={`${ownerName.length > 0 ? "filled" : ""}`} value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type="text" id="ownerName" name="ownerName" required />
                    <label htmlFor="email">Email:</label>
                    <input className={`${email.length > 0 ? "filled" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
                    <label htmlFor="phone">Phone Number:</label>
                    <div className="phone-input-container">
                        <select id="countryCode" className="reg-country-code-cont" name="countryCode" required>
                            {countryCodes.map((country) => (
                            <option key={country.code} value={country.dial_code}>
                                {country.dial_code}
                            </option>
                            ))}
                        </select>
                        <input className={`${phone.length > 0 ? "filled" : ""}`} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" required />
                    </div>
                    <label htmlFor="password">Password:</label>
                    <input className={`${password.length > 0 ? "filled" : ""}`} value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className={`${confirmPassword.length > 0 ? "filled" : ""}`} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <div className="reg-form-right-cont">
                    <label htmlFor="branchName">Branch Name:</label>
                    <input className={`${branchName.length > 0 ? "filled" : ""}`} value={branchName} onChange={(e) => setBranchName(e.target.value)} type="text" id="branchName" name="branchName" required />
                    <label htmlFor="country">Country:</label>
                    <select className="reg-country-code-cont" id="country" name="country" required>
                        {countryCodes.map((country) => (
                            <option key={country.code} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="branchAddress">Branch Address:</label>
                    <textarea className={`reg-country-text-area ${branchAddress.length > 0 ? "filled" : ""}`} value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} rows={5} id="branchAddress" name="branchAddress" required></textarea>
                    <button type="submit" className="reg-sub-button">Sign Up</button>
                    <p className="login-link">Already have an account? <a href="/login">Login here</a></p>
                </div>
            </form>
        </MainBack>
        
      </div>
    </div>
  )
}

export default RegisterMainRoute
