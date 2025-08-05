import React from 'react'
import ProductCategoryItem from '../../Component/ProductCategoryItem/ProductCategoryItem'
import Marquee from '../Home/Component/Marquee'
const CategoryPage = () => {
  return (
   <div className='flex flex-col mt-[20vh] '>
    <h1 className='text-[60px] text-black font-bold text-center py-[30px]'>PRODUCTS CATEGORIES</h1>
     <Marquee />
    <div className='grid grid-flow-row grid-cols-1 justify-content-center md:grid-cols-2   lg:grid-cols-3 gap-[20px] box-border  px-[10px] py-[30px] max-w-[1400px] m-auto'>
      <ProductCategoryItem></ProductCategoryItem>
      <ProductCategoryItem></ProductCategoryItem>
      <ProductCategoryItem></ProductCategoryItem>
      <ProductCategoryItem></ProductCategoryItem>
      <ProductCategoryItem></ProductCategoryItem>
      <ProductCategoryItem></ProductCategoryItem>
    </div>
   </div>
  )
}

export default CategoryPage
