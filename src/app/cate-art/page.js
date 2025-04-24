import Image from "next/image";
import SelfImg from "@/../public/self.jpg";
import Image01 from "@/../public/1.png"
import Image02 from "@/../public/2.png"
import Image03 from "@/../public/3.png"
import Image04 from "@/../public/4.png"
import Image05 from "@/../public/5.png"




export default function CateArt() {

  let dog = "bg-red-200";

  return (
    <div className="hidden w-full h-full bg-white flex-col justify-start items-center rounded-2xl px-6 pt-8 sm:flex ">

      {/* <Image src={Image01}/> */}
  

      <div className=" flex flex-col w-full">
        <h1 className="text-xl font-semibold border-b pb-1 mb-4">ART</h1>
       
      </div>

      
      <div className="flex flex-col w-full gap-4 mt-3">

      
      <div className="grid grid-cols-3 w-full gap-2 h-[33vh]">

        <div className={`bg-amber-300 ${dog} rounded-2xl`}
          style={
         { backgroundImage: `url(${Image01.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}
         }
        >
          One
        </div>

        <div className={`bg-amber-300 ${dog} rounded-2xl`}
          style={
         { backgroundImage: `url(${Image04.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}
         }
        >
          Two
        </div>

        <div className={`bg-amber-300 ${dog} rounded-2xl`}
          style={
         { backgroundImage: `url(${Image03.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}
         }
        >
          three
        </div>
        
      </div>
      
      <div className="grid grid-cols-2 w-full gap-x-2 gap-y-4 h-[200px]  mt-6">
        
        <div className={`bg-amber-300 ${dog} rounded-2xl`}
          style={
         { backgroundImage: `url(${Image02.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}
         }
        >
          four
        </div>

        
        <div className={`bg-amber-300 ${dog} rounded-2xl`}
          style={
         { backgroundImage: `url(${Image05.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}
         }
        >
          five
        </div>
        
      </div>
      </div>
      
      <p>
        Art
      </p>
      
    </div>
  );
}
