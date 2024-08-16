import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Card from './Card';
import categories from '../restaurantChains.json';
import useSlideCounter from './customHook/useSlideCounter';


const TopRest = () => {
    const { slide, nextSlide, prevSlide } = useSlideCounter(categories, 0);

    // const [slide, setSlide] = useState(0);

    // const nextSlide = () => {
    //     if (restaurantChains.length - 4 == slide) return false;
    //     setSlide(slide + 2);
    // }
    // const prevSlide = () => {
    //     if (slide == 0) return false;
    //     setSlide(slide - 2);
    // }

    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between my-3">
                    <h1 className="text-[25px] font-bold">Top restaurant chains in Ahmedabad</h1>
                    <div className="flex">
                        <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-[#d6d8d9] group" onClick={()=>prevSlide(0,2)}><FaArrowLeft className="text-[15px] opacity-50 group-hover:opacity-100" /></div>
                        <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-[#d6d8d9] group" onClick={()=>nextSlide(4,2)}><FaArrowRight className="text-[15px] opacity-50 group-hover:opacity-100" /></div>
                    </div>
                </div>

                <div className="flex gap-7 overflow-hidden">
                    <Card slide={slide} />
                </div>

                <hr className="mt-10 mb-8" />
            </div>
        </>
    )
}

export default TopRest