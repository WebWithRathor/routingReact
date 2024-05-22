import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-black text-white font-medium flex items-center justify-center py-5 gap-10'>
       <NavLink style={(e)=>({fontWeight : e.isActive ? '900' : ''})} to="/">Home</NavLink>
       <NavLink style={(e)=>({fontWeight : e.isActive ? '900' : ''})} to="/about">About</NavLink>
    </div>
  )
}

export default Nav