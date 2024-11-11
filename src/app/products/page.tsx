import { FocusCards } from '@/components/ui/focus-cards'
import React from 'react'
import Ourproducts from "@/data/products_data.json";

function page() {
  return (
    <div className='flex justify-center items-center py-12 pt-36 flex-col'>
      <title>Products</title>
      <h1 className='text-xl text-center pb-5'>
        Our Products ({Ourproducts.products.length})
      </h1>
      {Ourproducts.products.length >= 1 ? (
        <FocusCards cards={Ourproducts.products} />
      ) : (
        <h2 className='text-3xl font-serif'>Our fascinating products are on the way.</h2>
      )}
    </div>
  )
}

export default page