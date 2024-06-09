"use client"
// components/CustomSlider.js
import Slider from "react-slick";
import { slidesData } from "../utils/constants";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { RxButton } from "react-icons/rx";


const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className=" group p-4 pb-8 item-slider transition-all">
          <div className="relative">
            <div className="relative bg-white  border-2  border-red-400 rounded-[25px] p-4 pb-8  h-full flex flex-col text-center justify-between item-slider-container transition-all ">
              <div className='relative px-[14px] py-[10px] h-[170px]'>
                <Image src={`/images/slider/${slide.image}`} alt={slide.title} className="w-full h-full object-contain " fill />
              </div>
              <h3 className="text-lg font-bold text-red-600 group-hover:text-white transition-all">{slide.title}</h3>
              <p className="text-sm text-[#707070] group-hover:text-white transition-all truncate-7-lines">{slide.desc}</p>

            </div>
            <button className=" absolute -bottom-6 right-[50%] translate-x-1/2 shadow-custom-100 bg-[#F0F0F0] inline-block p-5 rounded-full
             btn-plus transition-all
          "><FaPlus className="text-red-light" />
            </button>
          </div>

        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
