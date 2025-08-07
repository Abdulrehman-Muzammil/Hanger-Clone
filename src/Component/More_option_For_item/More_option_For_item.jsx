import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { FaStar, FaFacebookF, FaPinterestP, FaEnvelope } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCartItem, AddItemSize, DecreaseCartItemQuantity, IncreaseCartItemQuantity} from '../../Store/CartSlice';

const More_option_For_item = ({removeModal,setRemoveModal,category ,images,id,title,price,stock}) => {
    let [counter,setCounter]=useState(1);
    let [productImageIdx,setproductImageIdx]=useState(0)
    let [productSize,setProductSize]=useState('Small');
    let [productColor,setProductColor]=useState('black');
    const dispatch=useDispatch();
 
  return (
  <>
  <div className={`bg-[#00000096] w-[100%] h-[100%] fixed ${removeModal === false ? 'hidden' :'flex' } top-0 right-0  justify-center p-[10px] pb-[3%] items-center flex-col z-[10000] overflow-hidden duration-300 `}>

    <div className="flex flex-col md:flex-row  overflow-hidden max-w-[400px]  sm:h-[60vh] md:h-[50vh] m-auto lg:h-[90vh] bg-white rounded-[20px]">
      {/* Left Side - Images */}
      <div className="md:w-1/2 max-w-[800px] h-[50vh] lg:h-full flex items-center  overflow-hidden justify-center bg-[#f4f4f4] relative">
        <div className='flex flex-nowrap gap-0 w-[100%] h-[100%]  '  style={{ transform: `translateX(-${productImageIdx * 100}%)` }}>

            {images.map((src, i) => (
              <div key={i} className="flex-none w-full">
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="h-full object-cover w-[100%] object-center"
                />
              </div>
            ))}

        
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full flex gap-1 shadow">
          {[...Array(images.length)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full cursor-pointer    " onClick={()=> setproductImageIdx(i)}></div>
          ))}
        </div>
      </div>

      {/* Right Side - Details */}
      <div className="relative md:w-1/2 w-full h-[50vh] lg:h-full flex flex-col justify-between  overflow-hidden">
        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 w-[100%] overflow-x-hidden gap-[20px] flex flex-col justify-between scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300" style={{ maxHeight: 'calc(100vh - 60px)' }}>
          {/* Close button */}
          <div className='absolute top-4 right-4'>
            <div className='bg-white p-4 rounded-full shadow-lg cursor-pointer hover:rotate-45 transition duration-300'>
              <ImCross  onClick={()=>{setRemoveModal((prev)=> !prev) } }/>
            </div>
          </div>

          {/* Title & Price */}
          <p className='text-xs font-medium mb-2'>hangerpakistan</p>
          <div className='flex justify-between items-end'>
            <h1 className='text-4xl font-bold leading-tight'>{title}<br /></h1>
            <h4 className='text-lg font-medium'>$ {price}</h4>
          </div>

          {/* Ratings */}
          <div className='flex items-center gap-2 mt-4'>
            <div className='flex text-orange-400 text-sm'>
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className='text-sm'>5.0</p>
            <span className='text-sm ml-2'>2 reviews</span>
          </div>

          {/* Sizes */}
            {category == 'beauty' || category =='fragrances' || category=='furniture' ? 
            (
                 <div className='mt-6 w-[100%] '>
            <p className='text-sm font-medium mb-2'>Size: <span className="font-normal">{productSize}</span></p>
            <div className='flex gap-3 flex-wrap'>
              {['Small','Medium','Large','X-Large','XX-Large'].map((size, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded border text-sm font-semibold ${productSize == size ? 'border-black' : 'border-gray-300'}`}
                  onClick={(e)=>{
                    const size=e.target.innerText;
                    dispatch(AddItemSize({id,size,quantity:counter}))
                    setProductSize(size)}}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
                ):''}
       

          {/* Color */}
            {category =='fragrances' || category=='furniture' ? 
            (   <div className='mt-6'>
            <p className='text-sm font-medium'>Color: <span className='font-normal'>{productColor.toUpperCase()}</span></p>
            <div className='flex justify-start align-middle gap-[10px]'>
              {['red','white','black','Green','blue','yellow','gray'].map((item,i)=><div key={i} className={`p-[10px] h-6 ${productColor === item ? 'scale-110 border-2' : 'scale-100'} cursor-pointer border-black rounded-full w-fit mt-1 border`} style={{ backgroundColor: item.toLowerCase() }} onClick={() => setProductColor(item)}></div>)}
            </div>
          </div>):''}
          

          {/* Stock Bar */}
          <div className='mt-4'>
            <p className='text-sm'>Hurry, only {stock -counter} items left in stock!</p>
            <div className='w-full h-1 bg-gray-200 mt-1 rounded'>
              <div className={` h-1 bg-black rounded`} style={{width:`${Number(100 -(stock - counter))}%`}}></div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className='flex items-center gap-4 mt-6'>
            <div className='flex items-center border rounded-full px-5 py-2 w-[30%] justify-between'>
              <IoIosArrowBack className='cursor-pointer'  onClick={()=>{
                if(counter >=1)
                {
                   dispatch(DecreaseCartItemQuantity({id}))
                  setCounter(counter - 1)
                }
              }}/>
              <span className='text-sm'>{counter}</span>
              <IoIosArrowForward className='cursor-pointer' onClick={()=>{
                if(counter < stock)
                {
                  setCounter(counter + 1)
                  dispatch(IncreaseCartItemQuantity({id}))
                }
              }} />
            </div>
            <button className='w-[70%] bg-black text-white py-3 rounded-full font-medium text-sm' onClick={()=>dispatch(addCartItem({id,quantity:counter ,size:productSize}))}>Add to cart</button>
          </div>

          {/* Buy Now */}
         <Link to={`/checkout/${id}`}>
          <button className='w-full mt-4 border border-black py-3 rounded-full font-medium text-sm hover:bg-black duration-200 ease-in-out hover:text-white transition'>Buy it now</button>
         </Link>

          {/* Share */}
          <div className='flex items-center gap-4 mt-6'>
            <span className='text-sm'>Share:</span>
            <FaFacebookF className='text-black cursor-pointer' />
            <RxCross2 className='text-black cursor-pointer' />
            <FaPinterestP className='text-black cursor-pointer' />
            <FaEnvelope className='text-black cursor-pointer' />
            <div className='ml-auto flex items-center gap-1 text-sm cursor-pointer'>
              <FiHelpCircle className='text-black' />
              <span>Need help?</span>
            </div>
          </div>
        </div>

        {/* Sticky Bottom */}
    <Link to={`/products/${id}`}>
        <div className='sticky bottom-0 bg-white border-t py-4 px-4 flex justify-between items-center text-sm mt-4'>
          <span>View full details</span>
          <IoIosArrowForward />
        </div>
    </Link>

      </div>
    </div>

  </div>
  </>
    
  );
};

export default More_option_For_item;
