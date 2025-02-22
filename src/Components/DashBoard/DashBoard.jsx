import { PlayCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredAddList, getStoredWistList } from '../../Utility/addToDb';
import Electronic from '../Electronic/Electronic';

export default function DashBoard() {
    const [cartList, setCartList] = useState([])
  
    const allElectric =useLoaderData();


    useEffect(()=>{
        const storeAddList =getStoredAddList();
        const storAddListInt = storeAddList.map(id => parseInt(id));
        console.log(storeAddList,storAddListInt,allElectric)

         const cartAllList = allElectric.filter(electronic =>storAddListInt.includes(electronic.product_id) )

         setCartList(cartAllList)
    },[]) 
        

    const [wistlist,setWistlist] = useState([])
    const allwist =useLoaderData();

    useEffect(()=>{
      const storedWistList =getStoredWistList()
      const storedWistListInt = storedWistList.map(id =>parseInt(id))
      console.log(storedWistList, storedWistListInt, allwist)
      const wistBookList = allwist.filter(electronic => storedWistListInt.includes(electronic.product_id))

      setWistlist(wistBookList)
    },[])
   



  return (
    <div>
    <div className='text-3xl text-red-800 text-center p-5 bg-[#9538E2] text-white'> DashBoard
    <p className='p-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    </div>
    <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Cart" />
  <div role="tabpanel" className="tab-content p-10">cart: {cartList.length}

  <h2 className='grid grid-cols-2 gap-20'>
    {
      cartList.map(electronic =><Electronic key={electronic.product_id} electronic={electronic}></Electronic> )
    }
  </h2>
  </div>
  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="Wishlist"
    defaultChecked />

  

  
  <div role="tabpanel" className="tab-content p-10">wistlist: {wistlist.length}

  <h2 className='grid grid-cols-2 gap-20'>

{
  wistlist.map(electronic =><Electronic key={electronic.product_id} electronic={electronic}></Electronic> )
}
</h2>
  </div>


</div>  
    
   
    

  
    
    </div>

    
  )
}
