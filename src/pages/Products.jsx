import React from 'react'
import {products} from "../data/dummy"

function Products() {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
     {products.map((product)=>(
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.productID}>
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product.productImage}/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{product.productName}</h2>
            <p class="mt-1">${product.price}</p>
          </div>
        </div>
       
     ))}
       
      
        
        
       
        {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
            <p class="mt-1">$12.00</p>
          </div>
        </div> */}
       
      </div>
    </div>
  </section>
  )
}

export default Products