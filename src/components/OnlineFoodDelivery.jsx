import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { TbArrowsExchange2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const OnlineFoodDelivery = () => {
    const [isSticky, setIsSticky] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const top = componentRef.current.getBoundingClientRect().top;
                setIsSticky(top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="max-w-[1200px] mx-auto" ref={componentRef}>
                <div className="flex items-center justify-between my-3">
                    <h1 className="text-[25px] font-bold">Restaurants with online food delivery in Ahmedabad</h1>
                </div>

                <div className={isSticky ? 'fixed top-0 z-[999] bg-white w-full left-0 shadow-md' : ''}>
                    <div className={isSticky ? "flex justify-center items-center w-full mx-auto my-3 gap-8" : 'flex my-4'}>
                        <div className='flex gap-2'>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Filter <TbArrowsExchange2 className="inline ms-1" /> </button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Sort By <IoIosArrowDown className="inline ms-1" /></button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Fast Delivery</button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">New on Swiggy</button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Ratings 4.0+</button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Pure Veg</button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">FilterOffers</button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Rs. 300-Rs. 600</button>
                            <button className="py-1 px-3 rounded-3xl border border-[#02060c26] font-semibold text-[14px] shadow-sm">Less than Rs. 300</button>
                        </div>
                        {isSticky ?
                            <div className="bg-gray-100 text-[#02060c73] py-3 px-4 text-[18px] rounded-xl">
                                Search for restaurant and food
                                <FiSearch className='inline ms-3' />
                            </div>
                        : ''}

                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-7">
                    <Card />
                </div>

                <hr className="mt-10 mb-8" />
            </div>
        </>
    )
}

export default OnlineFoodDelivery