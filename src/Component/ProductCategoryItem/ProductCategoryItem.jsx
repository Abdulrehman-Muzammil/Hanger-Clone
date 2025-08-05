import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const ProductCategoryItem = () => {
  return (
   <>
   <div className='group  cursor-pointer  w-[100%]'>
    <div className='overflow-hidden rounded-[15px]'>
        <img src="https://thehangerpakistan.com/cdn/shop/files/IMG_1292-Recovered_3196f9aa-1d80-4ff1-8e62-451e6fb2e183.jpg?v=1747657637&width=1080" alt="" className='group-hover:scale-[1.1] duration-150 ease-in'/>
    </div>
    <div className='flex justify-between items-center px-[10px] py-[15px]'>
        <h1 className='text-[25px] font-bold relative'>T-Shirt <span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[#000000] transition-transform duration-500 group-hover:scale-x-100"></span></h1>
        <GoArrowRight className='text-[28px] font-light group-hover:rotate-90 duration-150 ease-in-out' />
    </div>
   </div>
   </>
  )
}

export default ProductCategoryItem
