'use client';

import { useState } from 'react';
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
  const descriptions = [
    "2023 TRPG自創角-管家雷文",
    "2023 灌籃高手電影應援場(喜歡不打籃球的角色......)",
    "2022 靈能二創聚會小卡",
    "2024 外星人舞台Ivan(還沒畫完...我愛拖)",
    "2023 灌籃高手電影應援場(水戶洋平......)",
    "2023 灌籃高手電影應援場(一灌再灌)",
    "2022 漫畫惡之華二創",
  ];

  // 第幾張
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="hidden w-full h-full bg-white flex-col justify-start items-center rounded-2xl px-6 pt-8 sm:flex overflow-auto">
      
      {/* 標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold border-b pb-1 mb-4">ART</h1>
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

      {/* 作品文字 */}
      <div className=" text-gray-800 text-center px-4 font-bold">
        {descriptions[currentSlide]}
      </div>
    </div>
  );
}
