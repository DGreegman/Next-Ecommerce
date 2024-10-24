import { fetchProductDetails } from '@/actions'
import React from 'react'

async function Details({params}) {
    const product = await fetchProductDetails(params.details)
    console.log(product);
    
  return (
    <div class="container mx-auto p-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <!-- Product Image --> */}
        <div class="bg-white rounded-lg shadow-lg">
            <img src={product?.thumbnail} alt={product?.title} class="rounded-lg object-cover w-full h-full"/>
            <div className="flex flex-wrap gap-5 justify-center mx-auto">

                {
                    product?.images.map((image) =>(
                        <img src={image} 
                            alt={image}
                            className='w-24 cursor-pointer'
                        />
                    ))
                }

            </div>
        </div>

        {/* <!-- Product Information --> */}
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold mb-4">{product?.title}</h1>
            <p class="text-gray-700 text-lg mb-4">
               {product?.description}
            </p>
            <div class="flex items-center mb-6">
                <span class="text-2xl font-bold text-green-500 mr-4">${product?.price}</span>
                <span class="text-gray-500 line-through">$129.99</span>
            </div>

            {/* <!-- Product Specifications --> */}
            <div class="mb-6">
                <h3 class="text-xl font-semibold mb-2">Specifications</h3>
                <ul class="list-disc list-inside text-gray-700">
                    <li>SKU: {product?.sku}</li>
                    <li>Weight: {product?.weight} kg</li>
                    <li>Width: {product?.dimensions?.width}</li>
                    <li>Height: {product?.dimensions?.height}</li>
                </ul>
            </div>

            {/* <!-- Add to Cart Button --> */}
            <button class="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                Add to Cart
            </button>
        </div>
    </div>
</div>
  )
}

export default Details