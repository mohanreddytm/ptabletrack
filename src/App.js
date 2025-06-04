import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/HomePage/Home'

const App = () => {
  return (
    <Routes>
      <Route exact path='/home' Component={Home} />
    </Routes>
  )
}

export default App
