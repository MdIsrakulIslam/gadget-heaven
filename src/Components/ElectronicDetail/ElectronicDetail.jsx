import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { addToStoreAddList, addToStoreWistList } from '../../Utility/addToDb';


export default function ElectronicDetail() {
  const{product_id}=useParams()
  const data= useLoaderData()
  const id = parseInt(product_id)
  const electronic = data.find(electronic=>electronic.product_id === id)

  const {product_id: currentProductId, product_title,product_image,category,price,description,Specification,availability,rating}=electronic

  const handleMarkAsAdd =(id) =>{
   addToStoreAddList(id)
  }

  const handleWistAdd =(id)=>{
    addToStoreWistList(id)
  }

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-20">
    {/* Header Section */}
    <div className='bg-[#9538E2] text-center justify-center w-full max-w-[1200px] h-auto sm:h-[363px] p-5 rounded-lg'>
      <h2 className='font-extrabold text-2xl sm:text-4xl text-white'>ElectronicDetail: {currentProductId}</h2>
      <p className='pt-5 text-white max-w-lg mx-auto'>
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>

    {/* Product Detail Section */}
    <div className='bg-slate-200 flex flex-col lg:flex-row w-full max-w-[800px] relative justify-center -mt-10 sm:-mt-28 h-auto rounded-3xl p-4 shadow-lg'>
      <div className='flex justify-center'>
        <img src={product_image} className='w-[250px] sm:w-[400px] md:w-[500px] h-auto p-5' alt="Product" />
      </div>
      <div className='p-4'>
        <h3 className='pt-3 font-bold text-xl sm:text-4xl'>{product_title}</h3>
        <p className='pt-2'><strong>Price:</strong> ${price}</p>
        <p className='pt-2'>{availability ? 'In Stock' : 'Out of Stock'}</p>
        <p className='mt-2'>{description}</p>
        
        <h3 className='pt-2 font-semibold'>Specification</h3>
        <ul className="list-disc pl-5">
          {Specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
         
         <div className='flex gap-3'>
         <p className='pt-2'><strong>Rating</strong></p>

          <div  className='mt-2'>
          <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#F9C004]" />
  
</div>
          </div>
         </div>
          
          <div className='flex gap-3'>
          <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#F9C004]" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#F9C004]"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#F9C004]" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#F9C004]" defaultChecked/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
</div>


<div className='border rounded-full bg-lime-400 p-1 px-3'>{rating}</div>
          </div>

          <div className='flex gap-5 pt-5'>
            <div className='flex bg-[#9538E2] p-3 rounded-full w-36 gap-2 items-center justify-center'>
              <button onClick={() => handleMarkAsAdd(product_id)} className='text-white'>Add To Cart</button>
              <ShoppingCart size={20} color='white' />
            </div>
            <div className='border rounded-full border-red-500 p-2'>
              <button onClick={() => handleWistAdd(product_id)}>
                <Heart size={20} color='red' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
