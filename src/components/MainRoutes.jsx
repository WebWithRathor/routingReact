import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Notfound from './Notfound'
import Details from './Details'

const MainRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}>
      <Route path='/about/:id' element={<Details/>}/>
    </Route>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  )
}

export default MainRoutes