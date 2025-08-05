  import { useState } from "react";
  import { FaEnvelope, FaFacebookF, FaPinterestP } from "react-icons/fa";
  import { FaStar } from "react-icons/fa6";
  import { FiHelpCircle } from "react-icons/fi";
  import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
  import { RxCross2 } from "react-icons/rx";
  import { Link, useLocation } from "react-router-dom";
  import { useGetProductsQuery } from "../../middleware/ProductsApi";
  import { useDispatch } from "react-redux";
  import { addCartItem, AddItemSize, DecreaseCartItemQuantity, IncreaseCartItemQuantity } from "../../Store/CartSlice";
  const SingleProductPage = () => {
    const dispatch =useDispatch();
    let [productSize, setProductSize] = useState("Small");
    let [productColor, setProductColor] = useState("Black");
    let [quantity, setQuantity] = useState(1);
    const { pathname } = useLocation();
    const productId = pathname.replaceAll("/products/", "");
    const { data, isLoading, isError } = useGetProductsQuery();
    const productsData = data?.products ?? [];
    let finalProduct = productsData.filter((item) => item.id == productId);
    const { images, price, thumbnail,title, stock, rating,id, description ,category,reviews} =
      finalProduct[0] ?? [];
    return (
      <>
        {isLoading ? (
          <div className="mt-[13vh] flex justify-center items-center  h-[100vh]">
            {" "}
            <h1 className="text-black text-[40px] text-center ">
              LOADING...
            </h1>{" "}
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center mt-[13vh]  h-[100vh]">
            {" "}
            <h1 className=" text-[40px] text-center text-red-600 ">
              ERROR OCURRED...
            </h1>{" "}
          </div>
        ) : (
          <div className="flex justify-between flex-wrap md:flex-nowrap gap-[20px] max-w-[1750px] m-auto mt-[13vh] p-[10px]">
            {/* PRODUCT PICTURE  */}
            <div className="rounded-[20px]  overflow-hidden h-fit  w-[40%] hidden lg:flex">
              <img
                className="w-[100%] cursor-zoom-in"
                src={images[0] || thumbnail}
                alt=""
              />
            </div>

            {/* PRODUCT CAROUSAL  */}
            <div className="flex md:flex-col gap-[20px] w-[100%]  md:w-[40%] lg:w-[20%] overflow-x-scroll md:overflow-y-scroll h-fit md:h-[100vh] hide-scrollbar">
              {images.map((src, idx) => {
                return (
                  <div key={idx} className=" border border-black w-[100%]  h-fit rounded-[20px]">
                    <img
                      key={idx}
                      className=" w-[100%] h-fit cursor-zoom-in"
                      src={src}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>

            {/* PRODUCT DETAILS  */}

            <div className=" w-[100%] md:w-[60%] lg:w-[40%] p-5  gap-[40px] flex flex-col  ">
              {/* Title & Price */}
              <div className="flex flex-col lg:flex-row justify-between items-end">
                <h1 className="text-4xl font-medium leading-tight ">
                  {title}
                  <br />
                </h1>
                <h4 className="text-lg font-light mt-0 md:mt-[20px]">
                  $ {price}
                </h4>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex text-orange-400 text-sm">
                  {[...Array({ rating })].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm">{rating}</p>
                <span className="text-sm ml-2">2 reviews</span>
              </div>
            {/* Sizes */}
            {category == 'beauty' || category =='fragrances' || category=='furniture' ? 
              (<div>
                <p className="text-sm font-medium mb-2">
                  Size: <span className="font-normal">{productSize}</span>
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Small", "Medium", "Large", "X-Large", "XX-Large"].map(
                    (size, i) => (
                      <button
                        key={i}
                        className={`px-4 py-2 rounded border text-sm font-medium ${
                          productSize == size
                            ? "border-black"
                            : "border-[#bbbbbb]"
                        }`
                      }
                        onClick={(e) => {
                          const size= e.target.innerText
                          dispatch(AddItemSize({id,size,quantity}))
                          setProductSize(size)
                        }}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </div>) : ''}

              {/* Stock Bar */}
              <div>
                <p className="text-sm">
                  Hurry, only {stock - quantity} items left in stock!
                </p>
                <div className="w-full h-1 bg-gray-200 mt-1 rounded">
                  <div
                    className={` h-1 bg-black rounded`}
                    style={{
                      width: `${Number(100 - (stock - quantity))}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col justify-start items-start  gap-4  bg-[#F5F5F5] py-[20px] rounded-[10px] px-[30px]">
                <div className="flex items-center border rounded-full px-5 py-2 w-[30%] justify-between">
                  <IoIosArrowBack
                    className="cursor-pointer"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                        dispatch(DecreaseCartItemQuantity({id}))
                      }
                    }}
                  />
                  <span className="text-sm">{quantity}</span>
                  <IoIosArrowForward
                    className="cursor-pointer"
                    onClick={() => {
                      if (quantity < stock) {                 
                        setQuantity(quantity + 1);
                        dispatch(IncreaseCartItemQuantity({id}))
                      }
                    }}
                  />
                </div>
                <button className="w-[100%] bg-black text-white py-5 rounded-full font-medium text-sm" onClick={()=>dispatch(addCartItem({id, quantity,size:productSize}))}>
                  Add to cart
                </button>
              </div>

              {/* Buy Now */}
              <Link to={`/checkout/${id}`}>
              <button onClick={()=>dispatch(addCartItem({id, quantity,size:productSize}))} className="w-full     border border-black py-3 rounded-full font-medium duration-200 ease-in-out   text-sm hover:bg-black hover:text-white transition"> 
                Buy it now
              </button>
              </Link>

              {/* Color */}
              { category =='fragrances' || category=='furniture' ? 
              (<div>
                <p className="text-sm font-medium">
                  Color:{" "}
                  <span className="font-normal">
                    {productColor.toUpperCase()}
                  </span>
                </p>
                <div className="flex justify-start align-middle gap-[10px]">
                  {[
                    "red",
                    "white",
                    "black",
                    "Green",
                    "blue",
                    "yellow",
                    "gray",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`p-[10px] h-6 ${
                        productColor === item ? "scale-110 border-2" : "scale-100"
                      } cursor-pointer border-black rounded-full w-fit mt-1 border`}
                      style={{ backgroundColor: item.toLowerCase() }}
                      onClick={() => {
                        setProductColor(item)
                        // dispatch(SetItemColor({id,size:productSize,quantity,color:item}))
                      }}
                    ></div>
                  ))}
                </div>
              </div>):''}
              
              {/* DESCRIPTION  */}
              <div>
                <p className="text-[13px] font-light">{description}</p>
              </div>

              {/* {COMMENTS} */}

            {reviews.map((review, index) => (
    <div key={index} className="border-t border-gray-200 py-4">
      <div className="flex items-center justify-between mb-2">
        {/* Rating stars */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-sm">{review.rating}</p>
          <span className="text-sm ml-2">2 reviews</span>
        </div>

        {/* Date */}
        <span className="text-xs text-gray-500">{(review.date).split("T")[0]}</span>
      </div>

      {/* Reviewer Name */}
      <div className="mb-1 text-sm font-medium text-gray-800">
        {review.reviewerName}
      </div>

      {/* Comment */}
      <p className="font-light text-sm text-gray-500">{review.comment}</p>
    </div>
  ))}

              {/* Share */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-sm">Share:</span>
                <FaFacebookF className="text-black cursor-pointer" />
                <RxCross2 className="text-black cursor-pointer" />
                <FaPinterestP className="text-black cursor-pointer" />
                <FaEnvelope className="text-black cursor-pointer" />
                <div className="ml-auto flex items-center gap-1 text-sm cursor-pointer">
                  <FiHelpCircle className="text-black" />
                  <span>Need help?</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  export default SingleProductPage;