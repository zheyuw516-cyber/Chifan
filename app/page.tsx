import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (


    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <main className="flex w-full flex-col items-center">

    <section
      id="home"
      className="flex min-h-[80vh] w-full flex-col items-center pt-[20vh] px-6 text-center bg-[url('/tree.jpg')] bg-cover bg-center bg-no-repeat]"
    >
      <h1 className="text-9xl font-bold text-[#F5F3EE]">
        CHIFAN
      </h1>

      <p className="mt-9 max-w-4xl text-white font-bold">
        这是一个记录生活、学习与思考的个人网站。
      </p>

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

        {/* ==================== NAVIGATION SECTION ==================== */}

        <section className="fixed left-0 top-0 z-50 flex w-full bg-black/70 text-white bg-[#18251A] p-5">

          <nav className="flex w-full items-center justify-center gap-12">

            {/* Home 标签 */}
            <Link
              href="/"
              className="rounded-xl px-4 py-2"
            >
              Home
            </Link>


            {/* About 标签 */}
            <Link
              href="/about"
              className="rounded-xl px-4 py-2"
            >
              About
            </Link>

            {/* Diary 标签 */}
            <Link
              href="/diary"
              className="rounded-xl px-4 py-2"
            >
              Diary
            </Link>

          </nav>

        </section>


    
                  {/* ==================== IMAGE SECTION ==================== */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">

        {/* 第一层：背景图片 */}
        <Image
          src="/forest.jpg"
          alt="所思所想背景"
          fill
          className="object-cover"
        />

        {/* 第二层：半透明遮罩 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 第三层：文字内容 */}
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

        {/* 第一层：背景视频 */}
        <video
          autoPlay
          loop
          muted
          playsInline
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
