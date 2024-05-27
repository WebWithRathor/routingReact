import axios from '../helper/Instance.jsx';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [Users, setUsers] = useState([])
  const navigate = useNavigate()
  const getUser =async ()=>{
    const {data} =await axios.get('/users');
    setUsers([...data]);
  }
  const submithandle = (e)=>{
    e.preventDefault();
    console.log('submit hogya');
    navigate('/about')
  }
  return (
    <>
    <form className='flex flex-col gap-3 items-center justify-center' onSubmit={submithandle}>
      <input type="text" className='border-2 rounded text-lg' />
      <button className='bg-blue-500 rounded px-2 py-1 text-white font-medium'>submit</button>
    </form>
    <button className='bg-blue-500 rounded px-2 py-1 text-white font-medium mt-3' onClick={getUser}>get api</button>
    <ul className='p-4 text-sm list-disc'>
      {Users.map((user)=>{
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
    </>
  )
}

export default Home