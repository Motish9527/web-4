'use client';

import { useState } from 'react';
import Image from 'next/image';
import PDFImg from '@/../public/PDF.png';

export default function Home() {
  // 狀態：點擊次數 & 是否正在被按壓
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  // 點擊圖片時執行的事件
  const handleClick = () => {
    setCount(count + 1);       // 計數 +1
    setIsPressed(true);        // 啟用下移效果

    // 150ms 後還原位置
    setTimeout(() => {
      setIsPressed(false);
    }, 80);
  };

  return (
    <div className="hidden w-full h-full bg-white justify-center items-center rounded-2xl py-8 text-gray-800 sm:flex flex-col">
      
      {/* 圖片按鈕區 */}
      <div
        onClick={handleClick}
        className={`cursor-pointer transition-transform duration-150 ${
          isPressed ? 'translate-y-[3px]' : ''
        }`}
      >
        <Image src={PDFImg} width={100} height={100} alt="PDF icon" />
      </div>

      {/* 計數顯示 */}
      <p className="mt-4 text-sm text-gray-500">恭喜你!今天又破防 {count} 次了！</p>
    </div>
  );
}
