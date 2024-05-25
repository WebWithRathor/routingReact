import React from 'react'
import { NavLink, useParams } from 'react-router-dom'


const Details = () => {
  const { id } = useParams()
  return (
    <>
      <div className='bg-zinc-50 flex w-96 flex-col'>
        <div className='text-[30px] p-2 bg-zinc-200'>Details</div>
        <h1 className='text-[20px] my-4 px-2 font-black'>{id}</h1>
        <NavLink className="bg-red-600 mx-2 w-max text-center px-2 py-1 text-sm font-semibold uppercase rounded text-white" to='/about'>back</NavLink>

      </div>
    </>
  )
}

export default Details