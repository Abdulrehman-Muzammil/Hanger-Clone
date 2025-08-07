import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../../middleware/ProductsApi";
import { useSelector } from "react-redux";
import { cartItems } from "../../Store/CartSlice";

function CheckoutPage() {
const { isLoading, isError } = useGetProductsQuery(); // <== required!
// FETCHING PRODUCTS IN  CART
const Item = useSelector(cartItems) || [];
// CALCULATING THE  TOTAL PRICE OF PRODUCTS
const TotalPrice=Item.reduce((accum,{price,quantity})=> {
              accum+=Number(price*quantity)
              return accum
            },0).toFixed(2);
  return  (
    <>
     {isLoading ? (
        <div className="flex justify-center items-center  h-[100vh]">
         
          <h1 className="text-black text-[40px] text-center ">
            LOADING...
          </h1>
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center   h-[100vh]">
          {" "}
          <h1 className=" text-[40px] text-center text-red-600 ">
            ERROR OCURRED...
          </h1>{" "}
        </div>
      ) : ( 
  <div className="mt-[13vh] w-[99vw]  overflow-x-hidden bg-white grid grid-flow-rows  md:grid-cols-2 grid-cols-1  gap-10">
        {/* Left Side - Form */}
      <div className="py-[30px]  px-[20px] flex justify-end w-[100%] "> 
          <div className="w-[100%] xl:w-[50%] ">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <input type="email" placeholder="Email" className="w-full border p-2 mb-3 rounded  border-gray-300 text-[14px] " />
          <label className="block mb-3  text-[14px] text-[#2b2a2a]">
            <input type="checkbox" className="mr-2" /> Email me with news and offers
          </label>

          <h2 className="text-xl font-semibold mt-6 mb-4">Delivery</h2>
          <select className="w-full border p-2 mb-3 rounded border-gray-300 text-[14px]">
            <option>Country/Region</option>
            <option>Pakistan</option>
          </select>
          <div className="flex gap-3 mb-3">
            <input type="text" placeholder="First name" className="w-1/2 border p-2  border-gray-300 text-[14px] rounded" />
            <input type="text" placeholder="Last name" className="w-1/2 border p-2  border-gray-300 text-[14px] rounded" />
          </div>
          <input type="text" placeholder="Address" className="w-full border border-gray-300 text-[14px]  p-2 mb-3 rounded" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border-gray-300 text-[14px]  border p-2 mb-3 rounded" />
          <div className="flex gap-3 mb-3">
            <input type="text" placeholder="City" className="w-1/2 border  border-gray-300 text-[14px] p-2 rounded" />
            <input type="text" placeholder="Postal code (optional)" className="w-1/2 border border-gray-300 text-[14px]  p-2 rounded" />
          </div>
          <input type="tel" placeholder="Phone" className="w-full border border-gray-300 text-[14px]  p-2 mb-3 rounded" />
          <label className="block mb-3 text-[14px] text-[#2b2a2a]">
            <input type="checkbox" className="mr-2 border-gray-300 text-[14px] " /> Save this information for next time
          </label>
          <label className="block mb-6  text-[14px] text-[#2b2a2a]">
            <input type="checkbox" className="mr-2" /> Text me with news and offers
          </label>

          <h2 className="text-xl font-semibold mb-4  text-[16px] text-[#222222]">Shipping method</h2>
          <div className="w-full  p-4 rounded-[10px] flex justify-between items-center mb-6  border border-blue-500 text-[15px] text-[#363636]">
            <span>COD</span>
            <span className="font-semibold">FREE</span>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[17px] text-black ">Payment</h2>
          <div className="border rounded p-4 mb-3 border-gray-400">
            <label className="block mb-2 font-semibold text-[#3b3b3b] text-[14px] ">Debit - Credit Card</label>
            <div className="bg-gray-100 p-4 text-center mb-3 ">
              <p className="text-sm">After clicking "Pay now", you will be redirected to Debit - Credit Card to complete your purchase securely.</p>
            </div>
            <label className="flex items-center text-[14px] text-[#3b3b3b]">
              <input type="radio" name="payment" className="mr-2" /> Cash on Delivery (COD)
            </label>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[17px] text-black ">Billing address</h2>
          <label className="block mb-2 text-[#3b3b3b] text-[14px]">
            <input type="radio" name="billing" className="mr-2" /> Same as shipping address
          </label>
          <label className="block mb-6 text-[#3b3b3b] text-[14px]">
            <input type="radio" name="billing" className="mr-2" /> Use a different billing address
          </label>

          <button className="w-full bg-[#1773B0] text-white p-3 rounded-[10px] font-semibold">Pay now</button>
        </div>
      </div>

        {/* Right Side - Summary */}
        <div className=" border-l border-gray-300  w-[100%] flex justify-content-start  py-[30px] px-[20px] bg-[#F5F5F5]">
         <div className="w-[100%] xl:w-[50%]">
          {Item?.map((Item,idx)=>{
            return (  <div key={idx} className="flex items-center gap-4 mb-6">

            <div className="relative">
            <img src={Item?.thumbnail} className="w-16 border-[#bebebe] border-1 h-16 rounded object-cover" alt="Product" />
            <p className="absolute top-[-5px] right-[4px]">{Item.quantity}</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#474747] text-[14px]">{Item.title}</h3>
              <p className="text-sm text-gray-500">{Item.brand}</p>
            </div>
            <div className="ml-auto font-semibold text-[#474747] text-[14px]">$. {Item.price}</div>
          </div>)
          })}

          <div className="mb-3 text-[#474747] text-[14px]">
            <input type="text" placeholder="Discount code" className="w-2/3 border bg-white py-[15px]  border-gray-300 p-2 rounded mr-2" />
            <button className="bg-[#F1F1F1] border-gray-300 border p-2 rounded  py-[15px] px-[10px]">Apply</button>
          </div>

          <div className="flex justify-between py-2  mt-4 text-[#474747] text-[14px]">
            <span>Subtotal</span>
            <span>$.{TotalPrice}</span>
          </div>
          <div className="flex justify-between py-2 text-[#474747] text-[14px]">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between py-2 font-semibold text-lg ">
            <span>Total</span>
            <span>$ {TotalPrice}</span>  
          </div>
      </div>
        </div>
      </div>
       )}
      </>
     )
  

}
export default CheckoutPage