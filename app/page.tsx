import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { sourceHanSerif } from "../font/fonts";
import MouseParticles from "@/components/MouseParticles";


import { Button } from "@/components/ui/button";

export default function Home() {
  return (


    <div
      className={`${sourceHanSerif.className} min-h-screen bg-neutral-100 text-neutral-900`}
      >

      <MouseParticles />

      <main className="flex w-full flex-col items-center">

    <section
      id="home"
      className="
      relative
      flex
      min-h-screen
      w-full
      flex-col
      items-center
      justify-center
      overflow-hidden
      px-6
      text-center
    "
    >
    {/* 背景图片 */}
      <Image
        src="/tree_house.png"
        alt="林中书屋"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />
        {/* 深绿色半透明遮罩 */}
      <div className="absolute inset-0 bg-[#0D1F14]/35" />

          {/* 灯光 Hotspot */}
      <div
        className="
          absolute
          left-[50%]
          top-[30%]
          z-10
          h-4
          w-4
          rounded-full
          bg-amber-200/0
          transition-all
          duration-500
          hover:bg-amber-200/30
          hover:shadow-[0_0_45px_20px_rgba(253,230,138,0.35)]
        "
      />

      <div className="relative z-10 w-full max-w-7xl -translate-y-20 px-12 text-left">
        <h1 className="text-xl font-light text-[#F5F3EE]">
          林中书屋 · CHIFAN
        </h1> 

        <h2 className="mt-4 text-6xl font-light tracking-wider text-[#F5F3EE]">
          记录生活，思考世界(Testing)
        </h2>
      </div>
    </section>
          {/* ==================== ABOUT SECTION ==================== */}
      <section
        id="about"
        className="relative w-full overflow-hidden bg-[url('/lake.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* 半透明深绿色遮罩 */}
        <div className="absolute inset-0 bg-[#142019]/65" />

        {/* About 内容 */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-white">

          <h2 className="text-5xl font-bold">
            介绍
          </h2>

          <div className="mt-8 text-lg font-bold">
            哈喽，这里是 Jeremy（哲宇）的个人国内网站，
            会时不时更新一些个人所见所想的内容~
          </div>

        </div>
      </section>

       <Navigation/>


    
            {/* ==================== IMAGE SECTION ==================== */}
        <section
          className="
            relative
            flex
            min-h-[80vh]
            w-full
            items-center
            justify-center
            overflow-hidden
          "
        >
          <Image
            src="/forest.jpg"
            alt="森林背景"
            fill
            className="object-cover object-center"
          />
          {/* 半透明遮罩 */}
          <div className="absolute inset-0 bg-black/40" />

          {/* 文字内容 */}
          <div className="relative z-10 ml-[50vw] px-6 text-right text-white">
            <h2 className="text-6xl font-bold">
              生活点滴
            </h2>

            <p className="mt-6 text-lg">
              生活中凝聚的片刻精彩会在这里呈现
            </p>
          </div>
        </section>



            {/* ==================== VIDEO SECTION ==================== */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">

       <video
        loop
        muted
        playsInline
        preload="none"
        poster="/aurora-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/Aurora.mp4" type="video/mp4" />
      </video>

        {/* 第二层：半透明遮罩 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 第三层：文字内容 */}
        <div className="relative z-10 ml-[-60vw] px-6 text-left text-white">
          <h2 className="text-6xl font-bold">
            所思所想
          </h2>

          <p className="mt-6 text-lg">
            去思考、去触碰、去感受，在这里看见不一样的视界和想法。
          </p>
        </div>

      </section>






    <footer className="py-6 text-center text-sm text-black/50">
              首页背景图片及视频来源：哲风壁纸
    </footer>


        
      </main>
    </div>
  );
}
