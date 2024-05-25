import React from 'react'
import Nav from './components/Nav'
import MainRoutes from './components/MainRoutes'

const App = () => {
  return (
    <div className='h-screen flex-col flex'>
      <Nav />
      <div className="div flex flex-col items-center justify-center bg-blue-50 h-full text-5xl">
        <MainRoutes />

      </div>
    </div>
  )
}

export default App