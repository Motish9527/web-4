'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import Image1 from "@/../public/1.png";
import Image2 from "@/../public/2.jpg";
import Image3 from "@/../public/3.png";
import Image5 from "@/../public/5.jpg";
import Image6 from "@/../public/6.png";
import Image7 from "@/../public/7.png";
import Image8 from "@/../public/8.png";

export default function CateArt() {
  const images = [Image1, Image2, Image3, Image5, Image6, Image7, Image8];

  return (
    <div className="w-full mx-6 sm:mx-10">
    <div className="hidden w-screen h-screen max-w-[1100px] bg-white flex-col justify-start items-center rounded-2xl px-6 pt-8 sm:flex">
      
      {/* 標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold border-b pb-1 mb-4">ART</h1>
      </div>
      {/* /w-full max-w-[300px] bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg */}
      {/* 輪播區 */}
      <div className="w-full max-w-[1100px] mx-auto mt-6">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          navigation
          coverflowEffect={{
            rotate: 0,         // 卡片旋轉角度（這邊設 0 保持平面）
            stretch: 0,        // 每張之間的拉伸
            depth: 100,        // 深度（越大，左右越小）
            modifier: 2.5,     // 強度（越大，效果越誇張）
            slideShadows: false, // 關掉陰影
          }}
          className="w-full h-[400px]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="relative w-[220px] h-[320px] rounded-2xl overflow-hidden shadow-lg 
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
    </div>
    </div>
  );
}
