import React from 'react'
import './index.css'

const RestaurantRegister = () => {

    const content = () => {
        return (
                        <form className='restaurant-login-form'>
                <h1 className='restaurant-login-form-header-main'>Create Your TableTrack Account</h1>
                <h1 className='restaurant-login-form-header'>Enter your Restaurant Name</h1>
                <input type='text' className='restaurant-login-form-input' placeholder='Restaurant Name' required />
                <h1 className='restaurant-login-form-header'>Enter your Full Name</h1>
                <input type='text' className='restaurant-login-form-input' placeholder='Full Name' required />
                <h1 className='restaurant-login-form-header'>Enter your Email</h1>
                <input type='email' className='restaurant-login-form-input' placeholder='Email' required />
                <h1 className='restaurant-login-form-header'>Enter your Password</h1>
                <input type='password' className='restaurant-login-form-input' placeholder='Password' required />
                <h1 className='restaurant-login-form-header'>Confirm your Password</h1>
                <input type='password' className='restaurant-login-form-input' placeholder='Confirm Password' required />
                <h1 className='restaurant-login-form-header'>Already have an account? <span>Login</span></h1>
                <button className='restaurant-login-form-button'>Continue</button>
            </form>
        )
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
            {content()}
        </div>
    </div>
  )
}

export default RestaurantRegister;
