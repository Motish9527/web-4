import Image from "next/image";
import Image01 from "@/../public/1.png";
import Image02 from "@/../public/2.jpg";
import Image03 from "@/../public/3.png";
import Image04 from "@/../public/4.jpg";
import Image05 from "@/../public/5.jpg";
import Image06 from "@/../public/6.png";
import Image07 from "@/../public/7.png";
import Image08 from "@/../public/8.png";

export default function CateArt() {
  const images = [Image01, Image02, Image03, Image04, Image05, Image06, Image07, Image08];

  return (
    <div className="hidden w-full h-full bg-white flex-col justify-start items-center rounded-2xl px-6 pt-8 sm:flex">
      
      {/* 標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold border-b pb-1 mb-4">ART</h1>
      </div>

      {/* 名片式滑動區 */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full py-8 scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden snap-center bg-gray-100 group transition-all duration-300 hover:scale-105"
          >
            <Image
              src={img}
              alt={`Artwork ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
