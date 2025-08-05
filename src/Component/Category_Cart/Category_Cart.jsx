 import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
  import { useDispatch, useSelector } from 'react-redux'
  import { cartItems,DecreaseCartItemQuantity, IncreaseCartItemQuantity, removeCartItem } from '../../Store/CartSlice'
import {  useGetProductsQuery } from '../../middleware/ProductsApi'
import { Link } from 'react-router-dom'

  const Category_Cart = () => {
const dispatch=useDispatch()
const { isLoading, isError } = useGetProductsQuery(); // <== required!
  const Items = useSelector(cartItems);
   return (
      <>
      <div className='mt-[20vh]'>
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
        <div className="w-full min-h-screen bg-white px-8 py-10 lg:px-20">
          <h1 className="text-[72px] font-extrabold leading-none mb-10">
            Your cart
          </h1>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left - Cart Items */}
            <div className="w-full lg:w-2/3 space-y-10">
              {Items.map(({ id, title, stock, price, thumbnail,quantity,size,color }, idx) => (
                <div key={id || idx} className="flex flex-row  flex-wrap  items-start sm:items-center gap-6 border-b pb-6 overflow-hidden">
                  <img
                    src={thumbnail || "https://via.placeholder.com/10 "}
                    alt="product"
                    className="w-[200px] h-[135px] rounded-lg object-cover  hover:scale-110  cursor-pointer  duration-200 ease-in-out"
                  />
                  <div className="flex-1 space-y-1">
                    {/* {const ExisteingIdx=} */}
                    <h2 className="text-lg font-semibold">{title || 'Product Title'}</h2>
                   { size !== undefined ? ( <p className="text-sm text-gray-600">Size: {size || 'small'}</p>) : undefined}
                   { color !== undefined ? ( <p className="text-sm text-gray-600">Color: {color || ''}</p>) : undefined}
                 
                    <p className="text-sm text-gray-900 font-medium">$.{price?.toLocaleString() || '2,200.00'}</p>
                  </div>

                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <div className='flex items-center border rounded-full px-5 py-2 justify-between'>
                      <IoIosArrowBack
                        className='cursor-pointer'
                        onClick={() => {
                            dispatch(DecreaseCartItemQuantity({ id }))                        
                        }}
                      />
                      <span className='text-sm px-2'>{quantity}</span>
                      <IoIosArrowForward
                        className='cursor-pointer'
                        onClick={() => {
                          if (quantity < stock) {
                            dispatch(IncreaseCartItemQuantity({ id }))
                          }
                        }}
                      />
                    </div>
                    <button className="text-sm text-black hover:underline" onClick={()=>dispatch(removeCartItem({id}))}> Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Summary */}
            <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow">
              <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                <div className="h-full bg-black rounded-full w-[100%]" />
              </div>

              <div className="flex justify-between mb-2 text-lg font-semibold">
                <span>Subtotal</span>
                <span>
                  $ {Items.reduce((total, item) => total + item.quantity * item.price, 0).toLocaleString()} DOLLAR
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Taxes included and shipping calculated at checkout.
              </p>

              <label className="text-sm font-medium mb-2 block">Add a note to your order</label>
              <textarea
                className="w-full border p-3 rounded-md text-sm mb-6"
                placeholder="Order note"
                rows={3}
              />
            <Link to={`/checkout/${Math.random}`} >
              <button className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900">
                🛒 Check out
              </button>
              </Link>
            </div>  
          </div>
        </div>
      )}
      </div>
      </>
     
    )
  }

  export default Category_Cart

