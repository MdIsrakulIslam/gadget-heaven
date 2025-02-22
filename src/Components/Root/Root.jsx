import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
        
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div className='pt-10'>
        <Footer></Footer>
        </div>
        
     </div>
  )
}
