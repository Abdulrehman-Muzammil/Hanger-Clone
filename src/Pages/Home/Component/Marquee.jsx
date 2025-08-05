import React from 'react'
import { useState, useRef ,useEffect} from 'react';
import { FaRegCircle } from "react-icons/fa";

  
const Marquee = () => {
    const marqueeRef = useRef(null);
    const [offset, setOffset] = useState(0);
    let lastScroll = window.scrollY;

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let CurrentScroll = window.scrollY;
            if (CurrentScroll > lastScroll) {
                setOffset((prev) => prev + 0.1);
            }
            else if (CurrentScroll < lastScroll) {
                setOffset((prev) => prev - 0.1);    
            }
            lastScroll = CurrentScroll;
        })
    })
  return (
    <section>
                <marquee
                    ref={marqueeRef}
                    onMouseOver={() => marqueeRef.current?.stop()}
                    onMouseOut={() => marqueeRef.current?.start()}
                >
                    <div className="flex gap-[20px] items-center cursor-pointer py-[20px] transition-transform duration-[800ms] ease-linear" style={{
                        transform: `translateX(${offset}px)`,
                    }} >
                        {Array(100)
                            .fill()
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[20px] items-center text-[35px] text-[#898E91] font-bold"
                                >
                                    <FaRegCircle className="text-[25px] text-black" />
                                    100+ NEW IN
                                </div>
                            ))}
                    </div>
                </marquee>
            </section>
  )
}

export default Marquee
