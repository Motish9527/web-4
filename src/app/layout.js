import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from "next/image";
import SelfImg from "@/../public/self.jpg";
import IGImg from"@/../public/brand-instagram.svg";
import FBImg from"@/../public/brand-facebook.svg";
import YTImg from"@/../public/brand-youtube.svg";
import XImg from"@/../public/brand-x.svg";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "吳采蓁的數位履歷",
  description: "Always sleepy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* left-side profile formal*/}
        <div className="w-screen h-screen flex gap-5 bg-gray-200 p-8" >
          <div className="min-w-[320px] w-[320px] h-full rounded-2xl bg-white flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
             <Link href="/">
            <Image src={SelfImg} alt="self profile" className="w-[80px] h-[80px] rounded-full 
            transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"  />
            </Link>
            <h1 className="mt-2">Motish</h1>

            <p className="max-w-[380px] text-center">很愛拖，真的。</p>

            {/* SocailLinks */}
            <div className="flex gap-2 my-5">

              <a href="https://www.instagram.com/motish9527/" target="_blank" > 
                <div className=" w-[40px] h-[40px] rounded-full flex justify-center items-center border-1 border-gray-800
                transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
                 <Image src={IGImg} alt="IG page" width={24} height={24} className="flex justify-center items-center object-contain"/>
                </div>
              </a>
              <a href="https://www.facebook.com/wu.cai.zhen.706138" target="_blank" > 
                <div className=" w-[40px] h-[40px] rounded-full flex justify-center items-center border-1 border-gray-800
                transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
                 <Image src={FBImg} alt="FB page"  className="w-[24px] h-[24px] flex justify-center items-center object-contain" />

                </div>
              </a>
              <a href="https://x.com/realDonaldTrump" target="_blank " > 
                <div className=" w-[40px] h-[40px] rounded-full flex justify-center items-center border-1 border-gray-800
                transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <Image src={XImg} alt="X page" width={22} height={22} className="flex justify-center items-center object-contain" />
                </div>
              </a> 
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank " > 
                <div className="  w-[40px] h-[40px] rounded-full flex justify-center items-center border-1 border-gray-800 
                transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <Image src={YTImg} alt="YT page" width={24} height={24} className=" flex justify-center items-center object-contain" />
                </div>
              </a>

            </div>

            {/* 作品集 */}
            <div className="w-full flex flex-col gap-2">

            <a href="/about">
              <div className="w-full h-[84px] border-2 border-gray-800 bg-white rounded-xl hover:bg-gray-800 hover:text-white
              transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg flex justify-center items-center font-bold ">
                ABOUT ME
              </div>
            </a>
            <a href="/cate-art">
              <div className="w-full h-[84px] border-2 border-gray-800 bg-white rounded-xl hover:bg-gray-800 hover:text-white hover:px-7
              transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg flex justify-center items-center font-bold">
              ART  

              </div>
            </a>
            <a href="/cate-game">
              <div className="w-full h-[84px] border-2 border-gray-800 bg-white rounded-xl hover:bg-gray-800 hover:text-white
              transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg flex justify-center items-center font-bold">
                GAME
              </div>
            </a> 
            <a href="/cate-interest">
              <div className="w-full h-[84px] border-2 border-gray-800 bg-white rounded-xl hover:bg-gray-800 hover:text-white
              transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg flex justify-center items-center font-bold">
                INTEREST
              </div>
            </a> 

            </div>

          
          
          
          </div>
          
          {children}
      
        </div>
      
      </body>
    </html>
  );
}
