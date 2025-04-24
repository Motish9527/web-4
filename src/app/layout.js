import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from "next/image";
import SelfImg from "@/../public/self.jpg";


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
            <Image src={SelfImg} alt="self profile" className="w-[80px] h-[80px] rounded-full "  />
            </Link>
            <h1 className="mt-2">Motish</h1>

            <p className="max-w-[380px] text-center">很愛拖，真的。</p>

            {/* SocailLinks */}
            <div className="flex gap-2 my-5">

              <a href="https://www.instagram.com/motish9527/" target="_blank" > 
                <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
              <a href="https://www.instagram.com/motish9527/" target="_blank" > 
                <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
              <a href="https://www.instagram.com/motish9527/" target="_blank" > 
                <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a> 
              <a href="https://www.instagram.com/motish9527/" target="_blank" > 
                <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>

            </div>

            {/* 作品集 */}
            <div className="w-full flex flex-col gap-2">

            <a href="/about">
              <div className="w-full h-[84px] bg-red-400 rounded-xl">
                ABOUT ME關於我
                快好了......
              </div>
            </a>
            <a href="/cate-art">
              <div className="w-full h-[84px] bg-red-500 rounded-xl">
                ART要做完了......
                </div>
            </a>
            <a href="/cate-game">
              <div className="w-full h-[84px] bg-red-600 rounded-xl">
                GAME正在努力中......
                </div>
            </a> 
            <a href="/cate-interest">
              <div className="w-full h-[84px]  bg-red-700 rounded-xl">
                interest想回家......
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
