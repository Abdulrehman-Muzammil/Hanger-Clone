import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaArrowCircleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='mt-[10px] p-0 bg-[#171717] overflow-x-hidden '>

               
            <div className=' bg-[#1F1F1F] rounded-b-[30px] flex flex-col ' >

                {/* FOOTER TOP  */}
                <div className='flex justify-center items-center  border-t-[1px] bg-white  border-t-[#cccccc] py-[50px] px-[10px] flex-wrap rounded-b-[30px] shadow-lg '>

                    {/* Box 1 */}
                    <div className="flex xl:flex-row sm:flex-col lg:flex-col items-start gap-4 px-6 py-6 w-full sm:w-1/3  border-[#ccc] lg:border-r">
                        <TfiHeadphoneAlt className="text-[30px]" />
                        <div>
                            <h1 className="text-[16px] font-medium">Customer service</h1>
                            <p className="text-[12px] text-[#4b4b4b]">
                                You can share your queries or comments by calling (021) 32561100 or by E-mailing us at contacus@thehangerpakistan.com
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="flex xl:flex-row sm:flex-col lg:flex-col items-start gap-4 px-6 py-6 w-full sm:w-1/3  border-[#ccc]  lg:border-r">
                        <TfiHeadphoneAlt className="text-[30px]" />
                        <div>
                            <h1 className="text-[16px] font-medium">Customer service</h1>
                            <p className="text-[12px] text-[#4b4b4b]">
                                You can share your queries or comments by calling (021) 32561100 or by E-mailing us at contacus@thehangerpakistan.com
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="flex xl:flex-row sm:flex-col lg:flex-col items-start gap-4 px-6 py-6 w-full sm:w-1/3">
                        <TfiHeadphoneAlt className="text-[30px]" />
                        <div>
                            <h1 className="text-[16px] font-medium">Customer service</h1>
                            <p className="text-[12px] text-[#4b4b4b]">
                                You can share your queries or comments by calling (021) 32561100 or by E-mailing us at contacus@thehangerpakistan.com
                            </p>
                        </div>
                    </div>

                </div>

    
                     {/* FOOTER BoTTOM  */}
                <div className='flex flex-col md:flex-row gap-[40px]  text-white max-w-[1400px] mx-auto py-[50px] px-[20px] '>
                    <div className='flex sm:flex-col flex-wrap gap-[30px]  w-[100%] sm:w-[60%]  justify-center items-start  text-center sm:text-start '>
                      <div className='flex flex-col gap-[10px] w-[40%] sm:w-[100%] '>
                        <h3 className='text-[20px] font-bold'>Quick links</h3>
                        <ul className='text-[14px] flex-col flex gap-[3px]  w-fit items-center sm:items-start'>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> About Us<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> FAQ’S<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> Exchange & Returns<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> Shipping Policy<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> Privacy Policy<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> Contact<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                            <li className="relative group cursor-pointer text-[16px] font-medium  w-fit "> Track Your Order<span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span></li>
                        </ul>
                      </div>

                    <div className='flex flex-col gap-[10px]   w-[52%] sm:w-[100%] p-0 items-center sm:items-start'>
                        <h3 className='text-[20px] font-bold '>About Us</h3>
                        <p className='text-[13px] w-[100%] sm:w-[50%]'>Established in 2020, Hanger is a fast fashion label built for the young and bold.
                            We deliver trend-driven, high-impact fashion at speed ,from elevated basics to statement pieces, all designed to reflect the now. With regular drops and a growing range of apparel, accessories, and essentials, Hanger is your go-to for fashion that moves fast, looks sharp, and never blends in.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] p-[5px] items-center sm:items-start '>

                        <h3 className='text-[25px] font-medium cursor-pointer relative group w-fit '>(021) 32561100
                            <span className="absolute right-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span>
                        </h3>
                        <h3 className='text-[23px] font-medium cursor-pointer relative group w-fit'>contactus@thehangerpakistan.com
                            <span className="absolute right-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[white] transition-transform duration-500 group-hover:scale-x-100"></span>
                        </h3>

                    </div>
                    </div>

                    <div className='w-[100%] text-center sm:text-start sm:w-[40%] p-[10px] flex flex-col gap-[20px] '>
                     <h1 className='text-[32px] font-bold  leading-[35px]   '>Join the crew, stay ahead of others with regular updates. Front row or no show? U choose. Sign up now!</h1>
                     <form className='flex justify-between p-[10px] rounded-[10px] bg-[#292929]'>
                        <input type="text" placeholder='Enter Your Email' className='text-[15px] outline-none' />
                         <FaArrowCircleRight className='text-[35px] cursor-pointer hover:animate-bounce' />
                     </form>
                    </div>
                   
                </div>

            </div>
        {/* COPY WRITE TEXT  */}

        <div className='py-[50px]  text-white text-[14px] mx-auto bg-[#171717]'>
            <p className='pl-[60px]'>© 2025 hangerpakistan. Powered by Abdulrehman</p>
        </div>
        </footer>
    )
}

export default Footer
