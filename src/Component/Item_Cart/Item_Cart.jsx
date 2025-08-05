import React, { useState, useEffect,useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import More_option_For_item from "../More_option_For_item/More_option_For_item";
import { Link } from "react-router-dom";


const Item_Cart = ({id,title,price,stock,images,category}) => {
 let [removeModal,setRemoveModal]=useState(false)
 const [activeIndex, setActiveIndex] = useState(0);
 const handleMouseMove = (e) => {
    const width = e.currentTarget.offsetWidth;
    const x = e.nativeEvent.offsetX;

    if (x < width / 3) {
      setActiveIndex(0);
    } else if (x < (2 * width) / 3) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  };

  return (
    <>
    <More_option_For_item  id={id} removeModal={removeModal} category={category} setRemoveModal={setRemoveModal} key={id} title={title} price={price} images={images} stock={stock}></More_option_For_item>

    <Link to={`/products/${id}`}>
    <div className="group relative cursor-pointer   ">
      {/* Main Product Box */}
      <div className="relative w-full overflow-hidden rounded-[20px] shadow-lg">
        {/* Product Image */}

        <div
          className="relative w-full  h-[100%] overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Slide Container */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            // style={`${images.length !== 1 ? {transform: `translateX(-${activeIndex * 100}%)`} :{transform:'translateX(0%)'}}`}
            style={
  images?.length !== 1
    ? { transform: `translateX(-${activeIndex * 100}%)` }
    : { transform: 'translateX(0%)' }
}

          >
            {/* Each slide image */}
            {images?.map((src, i) => (
              <div key={i} className="flex-none w-full">
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="absolute top-4 right-4 bg-white/60 p-2 rounded-[10px] flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
          <FaStar className="text-yellow-400" />
          <p className="text-sm font-medium">5.0</p>
        </div>

        {/* Eye Icon on Hover */}
        <div className="absolute top-4 right-4 bg-white/70 p-2 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaRegEye className="text-black text-[17px]" />
        </div>

        {/* Bottom Section: Button + Sub Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Main Button */}
          <Link >
          <button className="relative  group/button px-6 py-3 font-medium rounded-full bg-black text-white overflow-hidden z-[10] hover:text-black transition-colors group cursor-pointer is-published" onClick={()=>setRemoveModal((prev)=> !prev)}>
            <span className="absolute top-full left-0 w-full h-[200%] bg-white rounded-[40%] group-hover/button:top-[-60%] transition-all duration-500 z-[-1]"></span>
            More Options
          </button>
          </Link>

          {/* Sub Buttons (Dots) - Hide on button hover only */}
          {/* Navigation Dots */}
          <div className="flex gap-[7px] px-4 py-1 bg-[#ffffff4b] rounded-[15px] transition-opacity duration-300 group-[.is-published]:opacity-0">
            {images?.map((_, i) => (
              <span
                key={i}
                className={`
              w-3 h-3 rounded-full cursor-pointer transform transition 
              ${activeIndex === i ? "scale-125 bg-[black]" : "bg-gray-400"}
            `}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Name and Price (Static) */}
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[16px] font-medium w-fit">
          {title}
          </h3>
          <p className=" text-[15px] text-[#4d4d4d] font-light">$ {price}</p>
        </div>
      </div>
      <div className="flex justify-between gap-[10px] items-center align-middle">
        <div className={`bg-[${stock <=0 ? "gray":"black"}] border-black  border-1 p-[8px] rounded-2xl w-fit cursor-pointer mt-3 `}></div>
        <h1>{stock <=0 ? "Out OF Stock" : ""}</h1>
      </div>
    </div>
    </Link>
    </>
  );
};

export default Item_Cart;
