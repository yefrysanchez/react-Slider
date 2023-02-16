import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1676455205860-a08ff9a5dd07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676211986358-8b57ad9a2df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676487918369-0e3b85e5240b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676402519263-54dc34265e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
  ];

  const [slide, setSlide] = useState(0)

  const slideLeft = () => {
    if(slide === 0){
      setSlide(slides.length - 1)
    } else {
      setSlide(slide - 1)
    }
  }

  const slideRight = () => {
    if(slide === slides.length - 1){
      setSlide(0)
    } else {
      setSlide(slide + 1)
    }
  }
  const goToSlide = (index) => {
    setSlide(index)
  }


  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[slide].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover
       duration-500"
      ></div>
      <div onClick={slideLeft} className="hidden group-hover:block text-slate-100 bg-black/20 rounded-full p-2 absolute top-1/2 translate-y-[-50%] left-5 cursor-pointer">
        <BsChevronCompactLeft size={30} />
      </div>
      <div onClick={slideRight} className="hidden group-hover:block text-slate-100 bg-black/20 rounded-full p-2 absolute top-1/2 translate-y-[-50%] right-5 cursor-pointer">
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((e, index) => (
          <div onClick={() => goToSlide(index)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
