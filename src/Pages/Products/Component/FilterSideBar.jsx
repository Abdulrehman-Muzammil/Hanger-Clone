import { useState } from "react"

const FilterSideBar = ({isChecked,min,max,maxValue,setIsChecked,handleMaxChange,isFilter,setProductCategory}) => {
  return (
   <>
    {/* Filter Sidebar */}
              <div
                className={`${
                  isFilter ? "w-0 h-0 overflow-hidden" : "w-full md:w-[25%]"
                } transition-all duration-300 `}
              >
                <div className="  border-b-1 border-[#cacaca] flex justify-between items-center align-middle p-[10px]">
                  <h1 className="text-17px ">In stock only</h1>
                  <label className="relative inline-block w-[44px] h-[24px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className="sr-only peer "
                    />
                    <div
                      className={`w-full h-full ${
                        isChecked === true ? "bg-black" : "bg-gray-400"
                      } rounded-full peer-checked:bg-black transition duration-300`}
                    ></div>
                    <div
                      className={`absolute top-[2px] left-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[20px]`}
                    ></div>
                  </label>
                </div>

                {/* PRICING LINE  */}
                <div className="w-full max-w-md mx-auto p-4">
                  {/* Title */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Price</h2>
                    <span className="rotate-180 text-xl">^</span>
                  </div>

                  {/* Slider Track */}
                  <div className="relative h-[6px] bg-gray-300 rounded-full mb-12">
                    {/* Active range line */}
                    <div
                      className="absolute h-full bg-black rounded-full z-0"
                      style={{
                        left: `${(min/ max) * 100}%`,
                        width: `${((maxValue - min) / max) * 100}%`,
                      }}
                    ></div>

                    {/* Sliders */}
                    <input
                      type="range"
                      min={min}
                      max={max}
                       defaultValue={min}
                      className="absolute w-full appearance-none bg-transparent pointer-events-auto z-10 h-[6px]"
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={maxValue}
                      onChange={handleMaxChange}
                      className="absolute w-full appearance-none bg-transparent pointer-events-auto z-10 h-[6px]"
                    />
                  </div>

                  {/* Price Display */}
                  <div className="flex justify-between items-center">
                    <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-1">
                      <span>$ </span>
                      <span>{min}</span>
                    </div>
                    <span className="text-gray-500">to</span>
                    <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-1">
                      <span>$ </span>
                      <span>{maxValue}</span>
                    </div>
                  </div>
                </div>


                {/* FILTER BY CATEGORY  */}
                 <div className='flex flex-wrap justify-center py-[20px] px-[5px] gap-[20px] sm:justify-start items-center w-[100%]'>
        <button  className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit"  onClick={()=>setProductCategory('all')}>All <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button><button  className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit"  onClick={()=>setProductCategory('groceries')}>Groceries <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
        <button className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit" onClick={()=>setProductCategory('beauty')}>Beauty <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
        <button className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit" onClick={()=>setProductCategory('fragrances')}>Fragrances <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button><button className=" px-[40px] py-[15px] rounded-full font-semibold bg-white border-1 text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit" onClick={()=>setProductCategory('furniture')}>Furniture <span className="bg-[black] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span></button>
                 </div>
              </div>
   </>
  )
}

export default FilterSideBar
