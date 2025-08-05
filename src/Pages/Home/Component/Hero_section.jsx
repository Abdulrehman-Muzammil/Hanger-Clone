import React from 'react'

const Hero_section = () => {
  return (
   <section className="relative w-full h-[105vh] sm:h-[130vh] z-[-1] lg:h-[200vh] overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                >
                    <source
                        src="https://thehangerpakistan.com/cdn/shop/videos/c/vp/0d1a59641c3248cf8d4f199091a44b68/0d1a59641c3248cf8d4f199091a44b68.HD-1080p-7.2Mbps-47839468.mp4?v=0"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay (optional) */}
                <div className="absolute top-0 right-0 inset-0 bg-[#0000008c] bg-opacity-40 z-0"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">SS-25</h1>
                    <p className="text-lg md:text-2xl mb-6">Live Now</p>
                    <button className=" px-[60px] py-[10px] rounded-full font-semibold border-2 border-white text-white hover:text-black transition cursor-pointer relative group overflow-hidden z-[0]">
                        <span className="bg-[white] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span>
                        Shop Now
                    </button>
                </div>
            </section>
  )
}

export default Hero_section
