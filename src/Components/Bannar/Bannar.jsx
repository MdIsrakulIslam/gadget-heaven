import React from 'react'
import image1 from '../../assets/banner.jpg'

export default function Bannar() {
  return (
    <div className='flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8'>
  <div className='relative bg-[#9538E2] text-white text-center rounded-3xl p-10 w-full max-w-6xl '>
    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Upgrade Your Tech Accessories with Gadget Heaven</h1>
    <p className='py-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    <button className='btn border rounded-full text-[#9538E2] bg-white'>Shop Now</button>
  </div>
  <img className='relative -mt-8 sm:-mt-8 w-full max-w-lg border rounded-3xl bg-white p-4 shadow-lg' src={image1} alt='' />
  <h3 className='font-bold text-2xl sm:text-3xl text-center pt-10'>Explore Cutting-Edge Gadgets</h3>
</div>
  )
}
