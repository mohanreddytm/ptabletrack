import React from 'react'
import './index.css'

import { useNavigate } from 'react-router-dom'

const RestaurantLogin = () => {

    const navigate = useNavigate();

    const onClickCreateAccount = () => {
        navigate('/restaurantReg');
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
                <input type='email' className='restaurant-login-form-input' placeholder='Email' required />
                <h1 className='restaurant-login-form-header'>Enter your Password</h1>
                <input type='password' className='restaurant-login-form-input' placeholder='Password' required />
                <div className='restaurant-login-form-checkbox-cont'>
                    <div className='restaurant-login-form-checkbox-inner-cont'>
                        <input id='remember' type='checkbox' className='restaurant-login-form-checkbox' />
                        <label htmlFor='remember' className='restaurant-login-form-checkbox-label'>Remember me</label>
                    </div>
                    <br />
                    <a href='#' className='restaurant-login-form-forgot-password'>Forgot Password?</a>
                </div>
                <div className='restaurant-login-form-button-cont'>
                    <h1 className='restaurant-login-form-button-header'>Are you new here ? <span onClick={onClickCreateAccount}>Create an Account</span> </h1>

                    <button className='restaurant-login-form-button'>Login</button>
                </div>
                <p onClick={() => navigate('/')} className='restaurant-login-form-footer'>Go to Home</p>
            </form>
        </div>
    </div>
  )
}

export default RestaurantLogin;
