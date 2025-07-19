import './index.css'

import React from 'react'

import AllInOne from '../../../complexOne/index'

import logo from '../../../images/dashlogo.png'

const Header = () => {
  return (
    <AllInOne.Consumer>
      {
        value => {
          const {userId, restaurantDetails} = value;
          const {restaurentname} = restaurantDetails;
          console.log(restaurantDetails)
          return (
            <header className='dash-header-initial-cont'>
              <div className='dash-header-main-c'>
                <div className='dash-h-left-c'>
                  <img src={logo} className='dash-h-logo' alt='dashboard logo' />
                  <h1 className='dash-header-main-head'>{restaurentname}</h1>
                </div>
                <div className='dash-h-middle-c'>
                  <button type='button'>Current Orders <span className='dash-h-btn-span'>3</span></button>
                  <button type='button'>Payment Issue <span className='dash-h-btn-span'>1</span></button>
                  <button type='button'>Waiter's Call <span className='dash-h-btn-span'>0</span></button>
                </div>
                <div className='dash-h-right-c'>
                  <button className='dash-h-btn' type='button'>First</button>
                  <h1 className='dash-h-profile'>MR</h1>
                </div>
              </div>
            </header>
          )
        }
      }
    </AllInOne.Consumer>

  )
}

export default Header
