import React from 'react'
import image1 from '../../assets/banner.jpg'

export default function Bannar() {
  return (
    <div>
        <div className=" relative justify-center pt-36 boder rounded-3xl  bg-[#9538E2] w-[1160px] h-[694px]  ">
  <div className="hero-content text-center">
    <div className=" text-white p-8">
      <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn border rounded-full text-[#9538E2] bg-white ">Shop Now</button>
    </div>
  </div>
</div>

   <img className='relative flex justify-center -mt-40 w-[700px] h-[463px] ml-60 boder rounded-3xl bg-[#FFFFFF] p-4 shadow-transparent' src={image1} alt="" />


   <h3 className='font-bold text-3xl justify-center ml-96 pt-10'>Explore Cutting-Edge Gadgets</h3>
   <div>
    <div>

    </div>
   </div>
    </div>
  )
}
