import React, { useState } from 'react'
import Item_Cart from '../../../Component/Item_Cart/Item_Cart'

const NewArrival = ({ProductsData}) => {
  const [productCategory,setProductCategory]=useState('fragrances')
  return (
    <section className='flex flex-col gap-[20px]  max-w-[1400px]  m-auto py-[30px] px-[15px]'>
      <h1 className='text-[40px] font-bold text-black '>NEW ARRIVALS</h1>
      <div className='flex flex-wrap justify-center gap-[20px] sm:justify-start items-center w-[100%]'>
        <button  className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit"  onClick={()=>setProductCategory('groceries')}>Groceries <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
        <button className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit" onClick={()=>setProductCategory('beauty')}>Beauty <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
        <button className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit" onClick={()=>setProductCategory('fragrances')}>Fragrances <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
        <button className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit" onClick={()=>setProductCategory('furniture')}>Furniture <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
      </div>
      <div className='grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] py-[20px]'>

      {ProductsData.map(({id,title,price,stock,images,category})=> category === productCategory ? <Item_Cart key={id} id={id} title={title} category={category} price={price} images={images} stock={stock}></Item_Cart> : '')}

      </div>

       
    </section>
  )
}

export default NewArrival
