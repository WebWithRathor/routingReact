import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const submithandle = (e)=>{
    e.preventDefault();
    console.log('submit hogya');
    navigate('/about')
  }
  return (
    <form className='flex flex-col gap-10 items-center justify-center' onSubmit={submithandle}>
      <input type="text" className='border-2 rounded' />
      <button className='bg-blue-500 rounded px-4 py-3 text-white font-medium'>submit</button>
    </form>
  )
}

export default Home