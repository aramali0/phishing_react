import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './navigation'


function Home() {
  return (
     <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navigation />
      <Outlet/>
    </div>
  )
}

export default Home