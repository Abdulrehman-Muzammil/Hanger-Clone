import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import Logo from "../../assets/Website_Logo.avif";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let [wrap,setWrap]=useState(false)
  const CartList=useSelector((state)=>state.cart.list)

  return (
    <header className="flex justify-between items-center w-[100vw] p-[10px]  fixed top-0 left-0 h-[13vh] bg-[#ffffff]   shadow-md   shadow-black-500 overflow-x-hidden z-1">
      {/* SMALL DEVICES  NAV */}

      <div className="w-[20%] sm:block xl:hidden ">
        <RiMenu2Fill className="cursor-pointer text-[30px]" onClick={()=>setWrap((prev)=>!prev)} />
    
        <div className={`bg-[white] w-[100%] sm:w-[70%] h-screen flex flex-col z-100 gap-[20px] duration-500 ease-in-out fixed top-0 left-0 transform  shadow-xl/30 shadow-black-500
            ${wrap ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="w-[100%]  flex justify-end p-[20px]">
          <ImCross className="text-[25px] cursor-pointer" onClick={() => setWrap(false)} />
          </div>
          <ul className="flex  flex-col  gap-[20px]  p-[20px] w-[100%] text-[22px] font-medium">
            <Link to={`/`}>
            <li className="cursor-pointer ">Home</li>
            </Link> 
            <Link to={`/products`}>
            <li className="cursor-pointer ">Products</li>
            </Link>

    
          </ul>
        </div>

      </div>


      <div className="sm:w-[50%] xl:w-[20%]  sm:justify-center flex">
      <Link to={`/`}>
        <img src={Logo} alt="Logo" />
      </Link>
      </div>

      {/* DESK TOP NAV */}

      <nav className="w-[60%]  justify-center align-middle items-center hidden h-[50%]   overflow-y-hidden sm:hidden xl:flex" >
        <ul className="flex justify-center align-middle gap-[60px]  items-center w-[100%] text-[14px] font-medium">
          <li>
            <div className="group flex flex-col gap-1 justify-center items-center relative">
              <span className="cursor-pointer transition-transform duration-300 group-hover:opacity-0 ">
                <Link to={'/'}>Home</Link>
                 </span>

              <span className="absolute top-[-20px] mt-2 bg-black text-white rounded-[25px] px-[20px] py-[10px] 
                   cursor-pointer transform translate-y-[150px] opacity-0 w-max h-auto
                   transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><Link to={'/'}>Home</Link> </span>
            </div>
          </li>

          <li>
            <div className="flex flex-col  gap-1 justify-center items-center relative ">
              <div className="group flex flex-col gap-1 justify-center items-center relative">
              <span className="cursor-pointer transition-transform duration-300 group-hover:opacity-0">
                <Link to={'/products'}>Products</Link>
                </span>

              <span className="absolute top-[-20px] mt-2 bg-black text-white rounded-[25px] px-[20px] py-[10px] 
                   cursor-pointer transform translate-y-[150px] opacity-0 w-max h-auto
                   transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                      <Link to={'/products'}>Products</Link>
            </span>
            </div>
            </div>
          </li>

          <li>
           <div className="flex flex-col  gap-1 justify-center items-center relative ">
              <div className="group flex flex-col gap-1 justify-center items-center relative">
              <span className="cursor-pointer transition-transform duration-300 group-hover:opacity-0 text-[red] "><Link to={'/category'}>Products Category</Link></span>


              <span className="absolute top-[-20px] mt-2 bg-black text-white rounded-[25px] px-[20px] py-[10px] 
                   cursor-pointer transform translate-y-[150px] opacity-0 w-max h-auto
                   transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Link to={'/category'}>Products Category</Link>
                    </span>
            </div>
            </div>
          </li>
        </ul>
      </nav>
{/* ICONS  */}
      <div className="w-[30%]   flex justify-end align-middle gap-[10px] text-[25px] cursor-pointer font-extrabold sm:pr-[10px] lg:pr-[30px]">
        <CiSearch className=" hover:animate-bounce duration-[2000]" />
        <Link to={`/cart`} className="relative">
        <CiShoppingCart className=" hover:animate-bounce duration-[2000]" />
        <p className="absolute top-[-12px] right-[-5px]  text-[15px]">{CartList.length }</p>
        </Link>
        <Link to={'/login'}>
        <FaRegUser className=" hover:animate-bounce duration-[2000]" />
        
        </Link>
      </div>

    </header>
  );
};

export default Header;
