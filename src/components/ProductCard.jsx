
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

function ProductCard({ item }) {
    const router = useRouter()
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200" key={item?.id}>
      <img
        src={item?.thumbnail || "default.jpg"}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-base mb-4">${item.price}</p>
        <div className='flex gap-2 justify-between'>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={()=>router.push(`/${item?.id}`)}>
              Details
            </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
