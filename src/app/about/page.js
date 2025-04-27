import Image from "next/image";
import SelfImg from "@/../public/self.jpg";

export default function About() {
  return (
    <div className="hidden w-full h-full max-w-5xl bg-white flex-col justify-start items-center rounded-2xl overflow-auto px-6 py-8 text-gray-800 sm:flex">

      {/* 🖼️ 頭貼 + 名字框 */}
      <div className="w-full max-w-3xl border border-gray-800 rounded-xl p-4 flex items-center gap-4 mb-8">
        <Image
          src={SelfImg}
          alt="頭像"
          width={120}
          height={120}
          className="rounded-full border"
        />
        <div>
          <h1 className="text-xl font-bold">吳采蓁</h1>
          <p className="text-sm">試圖模仿蔡康永，但失敗了。 </p>
        </div>
      </div>

      {/* 📄 主要內容區塊（左對齊） */}
      <div className="w-full max-w-3xl flex flex-col gap-8 text-left">

        {/* 📌 基本資料 */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-4">基本資料</h2>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li>台南人，中文系大四，雙主修數位學程，輔日文。</li>
            <li>人生 ONLINE LEVEL：22</li>
          </ul>
        </section>

        {/* 📌 關於我 */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-4">關於我</h2>
          <p className="text-sm leading-relaxed">
            一直很想睡覺的人
          </p>
        </section>

        {/* 📌 經歷 / 參與作品 */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-4">經歷 / 參與作品</h2>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">

            <li>師培助理/數內課程助理</li>
            <li>遊戲作品：《Escape》、《Stjerne》、《盲 愛》、《Differences》</li>

          </ul>
        </section>

      </div>
    </div>
  );
}
