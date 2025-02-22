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
    <div >
       <div className='bg-[#9538E2] text-center justify-center w-[1200px] h-[363px]'>
        <h2 className='font-extrabold text-4xl pt-5 text-white'>
       
        ElectronicDetail:{currentProductId} </h2>
        <p className='pt-5 text-white w-[700px] text-center justify-center ml-60'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      
       </div>

       <div className='bg-slate-200 flex w-[800px] relative justify-center -mt-40  h-[563px] ml-[200px] boder rounded-3xl  p-4 shadow-transparent'>
        <div>
          <img src={product_image}
          className='w-[500px] h-[500px] p-5' alt="" />
        </div>
        <div>
            <h3 className='pt-3 font-bold text-4xl'>{product_title}</h3>
            <p className='pt-2'><strong>Price:</strong>${price}</p>
            <p className='pt-2'> {availability ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className='mt-2'>{description}</p>
            <h3 className='pt-2'>Specification</h3>
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


            <div className='border rounded-full bg-lime-400 p-1'>
            {rating}
            </div>
          </div>
          <div className='flex gap-5'>
          <div className='flex bg-[#9538E2] p-3 rounded-full w-36 mt-2 gap-2'>
          <button onClick={()=>handleMarkAsAdd(product_id)} className=' text-white boder  '>Add To Cart</button>
          <ShoppingCart />
          </div>
          <div className='mt-5 border rounded-full border-red-500'>
          <button onClick={()=>handleWistAdd(product_id)}>
          <Heart />
          </button>
          </div>
          </div>

        </div>

        
       </div>



    </div>
  )
}
