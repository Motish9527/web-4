'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import Image21 from "@/../public/21.png";
import Image22 from "@/../public/22.png";
import Image23 from "@/../public/23.png";

export default function CateGame() {
  const images = [Image21, Image22, Image23 ];
  const descriptions = [
    "2023 TRPG自創角-管家雷文",
    "2023 灌籃高手電影應援場(喜歡不打籃球的角色......)",
    "2022 靈能二創聚會小卡",
    

  ];

  // 第幾張
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="hidden w-full h-full bg-white flex-col justify-start items-center rounded-2xl px-6 pt-8 sm:flex overflow-auto">

      {/* 標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold border-b pb-1 mb-4">GAME</h1>
      </div>

      {/* 輪播區 */}
      <div className="w-full mx-auto mt-6">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          navigation
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex);  // 更新目前是第幾張
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="w-full h-[300px] [&_.swiper-button-next]:text-gray-800 [&_.swiper-button-prev]:text-gray-800"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="relative w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg 
                              transition-all duration-500">
                <Image
                  src={img}
                  alt={`Artwork ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 作品文字 */}
      <div className='w-full h-[200px] border-2 border-gray-800 rounded-2xl -mt-12
      flex flex-col justify-center items-center '>
        <div className=" text-gray-800 text-center px-4 font-bold">
          {descriptions[currentSlide]}
        </div>
      </div>

    </div>
  );
}
