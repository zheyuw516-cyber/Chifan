import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { sourceHanSerif } from "../../font/fonts";
import ArticleList from "@/components/lives/ArticleList";
import { articles } from "@/data/articles"; 


import { Button } from "@/components/ui/button";

export default function Home() {
  return (


    <div
      className={`${sourceHanSerif.className} min-h-screen bg-neutral-100 text-neutral-900`}
      >

      <main className="flex w-full flex-col items-center">

  <Navigation />

<section
  id="home"
  className="relative isolate min-h-screen w-full overflow-hidden"
>
  <Image
    src="/tree_house.png"
    alt="林中书屋背景"
    fill
    priority
    unoptimized
    className="-z-20 object-cover object-center"
  />
  <div className="absolute inset-0 -z-10 bg-[#0D1F14]/35" />

  {/* 文章区域 */}
  <div className="px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
    <div className="mx-auto max-w-7xl bg-[#E9DFC9]/95 px-6 py-12 shadow-2xl sm:px-12 sm:py-16">
      <h1 className="section-title mb-10 text-[#243B2D]">
        生活轨迹
      </h1>

      <ArticleList articles={articles} />
    </div>
  </div>
</section>

      

        
      </main>
    </div>
  );
}
