import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import categories from '../category.json'
import useSlideCounter from './customHook/useSlideCounter';

const Category = () => {
  const { slide, nextSlide, prevSlide } = useSlideCounter(categories, 0);

  // const [slide, setSlide] = useState(0);

  // const nextSlide = () => {
  //   if (categories.length - 8 == slide) return false;
  //   setSlide(slide + 3);
  // }
  // const prevSlide = () => {
  //   if (slide == 0) return false;
  //   setSlide(slide - 3);
  // }

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-[75px] pt-3">
        <div className="flex items-center justify-between my-3">
          <h1 className="text-[25px] font-bold">What's on your mind?</h1>
          <div className="flex">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-[#d6d8d9] group" onClick={() => prevSlide(0,3)} > <FaArrowLeft className="text-[15px] opacity-50 group-hover:opacity-100" /></div>
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-[#d6d8d9] group" onClick={() => nextSlide(8,3)} > <FaArrowRight className="text-[15px] opacity-50 group-hover:opacity-100" /></div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {categories.map((cate, index) => (
            <div key={index} className="w-[150px] shrink-0" style={{ transform: `translateX(-${slide * 100}%)`, transition: 'all 1.5s ease' }}>
              <img src={"/images/" + cate.image} alt="category image" />
            </div>
          ))}
        </div>
        <hr className="mt-10 mb-8" />
      </div>

    </>
  )
}

export default Category