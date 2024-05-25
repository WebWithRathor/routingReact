import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const About = () => {
  const {pathname} = useLocation()
  return (
    <>
    <div className='flex gap-5'>

    <ul className='list-disc flex flex-col'>
      <NavLink to={`${pathname}/1`}><li> item 1</li></NavLink>
      <NavLink to={`${pathname}/2`}><li> item 2</li></NavLink>
      <NavLink to={`${pathname}/3`}><li> item 3</li></NavLink>
    </ul>
    <Outlet/>
    </div>

    </>
  )
}

export default About