import Header from "../Header"

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import React, { use, useState } from 'react'

import { FaArrowLeft } from "react-icons/fa";

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
    const [togglePassword, setTogglePassword] = useState(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
    const [isAllInitialDetailsDone, setIsAllInitialDetailsDone] = useState(false);
    const [isValidEmailAddress, setIsValidEmailAddress] = useState("no");

    const [showPasswordOne, setShowPasswordOne] = useState(false);

    const [showIsConfirmPasswordMatch, setShowIsMatch] = useState(false);

    const [onContinuePasswordMatch, setOnContinuePasswordMatch] = useState(false);

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

    const onChangeConfirmPassword = (e) => {
        if(e.target.value != password){
            setShowIsMatch(true);
        }else{
            setShowIsMatch(false);
        }

        setConfirmPassword(e.target.value);

    }

    const onClickLeftArrowInReg = () => {
        setIsAllInitialDetailsDone(false);
    }

    const onChangeEmailOne = (e) => {
        if(e.target.value.endsWith('@gmail.com')){
            setIsValidEmailAddress('yes');
        }
        setEmail(e.target.value);

    }

    const onChangePasswordInput =  (e) => {
        setShowPasswordOne(true)
        if(e.target.value == ''){
            setShowPasswordOne(false)
        }
        setPassword(e.target.value)
    } 


    const onClickContinueButton = () => {
        if(restaurantName.trim() != '' && ownerName.trim() != '' && email.trim() != '' && phone.trim() != '' && password.trim() != '' && confirmPassword.trim() != '') {
            if(email.endsWith("@gmail.com")){
                setIsValidEmailAddress("yes")
                if(password === confirmPassword) {
                    setOnContinuePasswordMatch(false)
                    setIsAllInitialDetailsDone(true)
                } else {
                    setOnContinuePasswordMatch(true)
                    setTimeout(() => setOnContinuePasswordMatch(false), 1000);
                }
            }else{
                setIsValidEmailAddress("error")
            }

        }else{
            console.log("not fill")
        }
    }

    console.log(onContinuePasswordMatch)

  return (
    <div className="register-initial-cont">
      <Header />
      <div className="main-container-reg">
        <div className="main-sub-reg">
            <form className="register-form">
                <div className={`reg-form-left-cont ${isAllInitialDetailsDone ? 'continue-the-reg-left-cont' : 'block-the-reg-left-cont'}`}>
                    <h2 className="reg-form-main-head">Register Your Restaurant</h2>   
                    <label htmlFor="restaurantName">Restaurant Name:</label>
                    <input className={`${restaurantName.length > 0 ? "filled" : ""}`} value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} type="text" id="restaurantName" name="restaurantName" required />
                    <label htmlFor="ownerName">Your Full Name:</label>
                    <input className={`${ownerName.length > 0 ? "filled" : ""}`} value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type="text" id="ownerName" name="ownerName" required />
                    <label htmlFor="email">Email:</label>
                    <input className={`${email.length > 0 ? "filled" : ""}`} value={email} onChange={onChangeEmailOne} type="email" id="email" name="email" required />
                    <label htmlFor="phone">Phone Number:</label>
                    <div className="phone-input-container">
                        <select onChange={(e) => setCountryCode(e.target.value)} value={countryCode} id="countryCode" className="reg-country-code-cont" name="countryCode" required>
                            {countryCodes.map((country) => (
                            <option key={country.code} value={country.dial_code}>
                                {country.dial_code}
                            </option>
                            ))}
                        </select>
                        <input className={`phone-number ${phone.length > 0 ? "filled" : ""}`} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" required />
                    </div>
                    <label htmlFor="password">Password:</label>
                    <div className="password-input-container one-password-one">
                        <input className={`password-input ${password.length > 0 ? "filled" : ""}`} value={password} onChange={onChangePasswordInput} type={togglePassword ? "text" : "password"} id="password" name="password" required />
                        <span className={`password-toggle-icon ${password.length > 0 ? "password-visi" : ""}`} onClick={() => setTogglePassword(!togglePassword)}>
                            {togglePassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {showPasswordOne && <div className="password-error-cont">
                            <p className="password-error-one-upon-it password-error-one-upon-it-remove">Password should - </p>
                            <p className="password-error-one-upon-it"> - has atleast 8 characters</p>
                            <p className="password-error-one-upon-it"> - has atleast 1 Uppercase</p>
                            <p className="password-error-one-upon-it"> - has atleast 1 Lowercase</p>
                            <p className="password-error-one-upon-it"> - has atleast 1 Number</p>
                            <p className="password-error-one-upon-it"> - has atleast 1 Special Character</p>
                        </div>
                        }

                    </div>
                    
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className="password-input-container">
                        <input className={`password-input ${confirmPassword.length > 0 ? "filled" : ""}`} value={confirmPassword} onChange={onChangeConfirmPassword} type={toggleConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" required />
                        <span className={`password-toggle-icon ${confirmPassword.length > 0 ? "password-visi" : ""}`} onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}>
                            {toggleConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <p className="login-link mobile-login-text-reg">Already have an account? <a href="/login">Login here</a></p>
                    {isValidEmailAddress == "error" && <p className="email-error-one">The Email should consists of @gmail.com</p>}

                    {showIsConfirmPasswordMatch && <p className={`confirm-pass-error ${onContinuePasswordMatch && "animate-the-pass-one"}`}>should be match ?</p>}
                </div>
                {isAllInitialDetailsDone == false ? <div className="reg-form-button-cont">
                    <button className="continue-button" onClick={onClickContinueButton}>Continue</button>
                </div> : "" }

                <div className={`reg-form-right-cont ${isAllInitialDetailsDone && 'reg-right-cont-continue'}`}>
                    <label htmlFor="branchName">Branch Name:</label>
                    <input className={`${branchName.length > 0 ? "filled" : ""}`} value={branchName} onChange={(e) => setBranchName(e.target.value)} type="text" id="branchName" name="branchName" required />
                    <label htmlFor="country">Country:</label>
                    <select value={country} onChange={(e) => setCountry(e.target.value) } className="reg-country-code-cont" id="country" name="country" required>
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
                {isAllInitialDetailsDone && <FaArrowLeft onClick={onClickLeftArrowInReg} className="left-arrow-reg" />
 }
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default RegisterMainRoute
