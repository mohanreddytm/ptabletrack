import React from 'react'
import './index.css'

import Cookies from 'js-cookie'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const RestaurantLogin = () => {

    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onClickCreateAccount = () => {
        navigate('/restaurantReg');
    }

    const onChangeLoginEmail = (e) => {
        setLoginEmail(e.target.value);
    }

    const onChangeLoginPassword = (e) => {
        setLoginPassword(e.target.value);
    }

    const onClickLoginButton = async (e) => {
        e.preventDefault();
        if(loginEmail && loginPassword) {
            const url = "https://ttbackone.onrender.com/login"
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                }),
                credentials: 'include'
            }

            const response = await fetch(url, options);
            const jsonResponse = await response.json();

            console.log(jsonResponse);
            console.log(response.ok)

            if(response.ok){
                if(jsonResponse.message === "Login successful"){
                    console.log("all done..")
                        navigate(
                            `/getMoreInforRest`
                        )
                }
            }

        // navigate(`/restaurantDashboard/${data.id}`);
        }
    }

  return (
    <div className='restaurant-login-container-initial-cont'>
        <div className='restaurant-login-container-main'>
            <div className='header-logo-cont header-logo-cont-login'>
                <div className='header-logo-mini-cont'>
                    <h1 className='header-logo-t'>T</h1>
                    <h1 className='header-logo-tt'>T</h1>
                </div>
                <p className='header-logo-text login-logo'>TableTrack</p>
            </div>
            <form className='restaurant-login-form'>
                <h1 className='restaurant-login-form-header'>Enter your Email</h1>
                <input value={loginEmail} onChange={onChangeLoginEmail} type='email' className='restaurant-login-form-input' placeholder='Email' required />
                <h1 className='restaurant-login-form-header'>Enter your Password</h1>
                <input value={loginPassword} onChange={onChangeLoginPassword} type='password' className='restaurant-login-form-input' placeholder='Password' required />
                <div className='restaurant-login-form-checkbox-cont'>
                    <div className='restaurant-login-form-checkbox-inner-cont'>
                        <input id='remember' type='checkbox' className='restaurant-login-form-checkbox' />
                        <label htmlFor='remember' className='restaurant-login-form-checkbox-label'>Remember me</label>
                    </div>
                    <br />
                    <a href='#' className='restaurant-login-form-forgot-password'>Forgot Password?</a>
                </div>
                <div className='restaurant-login-form-button-cont'>
                    <h1 className='restaurant-login-form-button-header'>Are you new here ? <br/> <span onClick={onClickCreateAccount}>Create an Account</span> </h1>

                    <button onClick={onClickLoginButton} className='restaurant-login-form-button'>Login</button>
                </div>
                <p onClick={() => navigate('/')} className='restaurant-login-form-footer'>Go to Home</p>
            </form>
        </div>
    </div>
  )
}

export default RestaurantLogin;
