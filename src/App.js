import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/HomePage/Home'
import './App.css'


import RegisterMainRoute from './components/HomePage/RegisterMainRoute/index'

import RestaurantLogin from './components/RestaurentLogin'

import RestaurantDashboard from './components/RestaurentDashboard/MainPage'
import GetMoreInforRest from './components/GetMoreInforRest/'

import MenuPage from './components/RestaurentDashboard/Menu'

import CustomerDashboard from './components/CustomerDashboard/MainPage'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/login' Component={RestaurantLogin} />
      <Route exact path='/restaurantReg' Component={RegisterMainRoute} />
      <Route exact path='/getMoreInforRest' Component={GetMoreInforRest} />
      <Route exact path='/restaurantDashboard' Component={RestaurantDashboard} />
      <Route exact path='/customerDashboard/:tableId/:restaurantId' Component={CustomerDashboard} />
      <Route exact path='/menu' Component={MenuPage} />
    </Routes>
  )
}

export default App
