import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/HomePage/Home'
import './App.css'


import RegisterMainRoute from './components/HomePage/RegisterMainRoute/index'

import RestaurantLogin from './components/RestaurentLogin'
import RestaurantRegister  from './components/RestaurentRegister'

const App = () => {
  return (
    <Routes>
      <Route exact path='/home' Component={Home} />
      <Route exact path='/login' Component={RestaurantLogin} />
      <Route exact path='/register' Component={RestaurantRegister} />
      <Route exact path='/restaurantReg' Component={RegisterMainRoute} />
    </Routes>
  )
}

export default App
