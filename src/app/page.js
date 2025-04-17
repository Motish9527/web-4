import Image from "next/image";
import SelfImg from "@/../public/self.jpg";


export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center ">

      <div className="w-[600px] h-[90%] rounded-2xl bg-white flex 
      justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
        <Image src={SelfImg} alt="self profile" className="w-[80px] h-[80px] rounded-full "  />
        <h1 className="mt-2">Motish</h1>

        <p className="max-w-[380px] text-center">個人簡介</p>

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
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">學經歷</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">經歷一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">學經二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-xl">學經三</div>


        </div>

      </div>
      
      
    </div>
  );
}
