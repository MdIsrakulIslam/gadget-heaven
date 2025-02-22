import React from 'react'
import { Link } from 'react-router-dom';

export default function Electronic({electronic}) {
    const {product_id,product_title,product_image,price}=electronic;
  return (
    <div className="card w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
    
      alt="Shoes"
      className="rounded-xl h-[200px] w-[282px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p> Price: {price}k</p>
   
      <Link to={`/electircs/${product_id}`}>
      <button className="btn border rounded-full text-[#9538E2] bg-white border-fuchsia-500">View Details</button>
      </Link>
    
  </div>
</div>
  )
}
