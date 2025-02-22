import React, { useEffect, useState } from 'react'
import Electronic from '../Electronic/Electronic';

export default function Electronics() {
  
    const[electircs, setElectircs]=useState([]);

    useEffect(()=>{
        fetch('./Electronic.json')
        .then(res =>res.json())
        .then(data=> setElectircs(data))
    },[])


  return (
    <div>
        <p>phone:{electircs.length}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                electircs.map(electronic => <Electronic key={electronic.product_id} electronic={electronic}></Electronic>)
            }
        </div>
    </div>
  )
}
