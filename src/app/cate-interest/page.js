import Image from "next/image";
import SelfImg from "@/../public/self.jpg";
import Image0 from "@/../public/0.jpg";
import Image12 from "@/../public/12.jpg";
import Image13 from "@/../public/13.jpg";
import Image14 from "@/../public/14.jpg";
import Image15 from "@/../public/15.png";
import Image16 from "@/../public/16.jpg";
import Image17 from "@/../public/17.jpg";
import Image18 from "@/../public/18.jpg";

export default function Home() {
  return (
    <div className="hidden w-full h-full bg-white flex-col justify-start items-center rounded-2xl px-6 py-8 text-gray-800 sm:flex ">


      {/* 標題 + 說明 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">興趣</h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          是阿宅，所以都是跟宅相關的興趣
          <br />
          特別喜歡怪漫
        </p>
      </div>

      {/* 卡片區 (GRID) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* 卡片1 */}
        <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md 
                        transition-transform duration-300 hover:scale-105">
          <video
            src="/11.mp4"
            controls
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            弓道
          </div>
        </div>

        {/* 卡片2 */}
        <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md 
                        transition-transform duration-300 hover:scale-105">
          <Image src={Image12} alt="睡覺" className="w-full h-[180px] object-cover" />
          <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            睡覺
          </div>
        </div>

        {/* 卡片3 */}
        <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md 
                        transition-transform duration-300 hover:scale-105">
          <Image src={Image18} alt="漫畫" className="w-full h-[180px] object-cover" />
          <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            漫畫
          </div>
        </div>

        {/* 卡片4 */}
        <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md 
                        transition-transform duration-300 hover:scale-105">
          <Image src={Image15} alt="道具1" className="w-full h-[180px] object-cover" />
          <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            道具製作
          </div>
        </div>

        {/* 卡片5 */}
        <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md 
                        transition-transform duration-300 hover:scale-105">
          <Image src={Image16} alt="道具2" className="w-full h-[180px] object-cover" />
          <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            道具製作
          </div>
        </div>


        {/* 卡片6 */}
        <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md 
                        transition-transform duration-300 hover:scale-105">
          <Image src={Image0} alt="畫圖" className="w-full h-[180px] object-cover" />
          <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            畫圖
          </div>
        </div>

      </div>

    </div>
  );
}
