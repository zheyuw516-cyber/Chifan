import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import PageBackground from "@/components/PageBackground";
import { sourceHanSerif } from "@/font/fonts";
import Bookshelf from "@/components/BookShelf";

export default function Home() {
  return (


    <div
      className={`${sourceHanSerif.className} min-h-screen bg-neutral-100 text-neutral-900`}
      >

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
      <PageBackground
         src="/inner_house.png"
         alt="林中书屋"
        />
        {/* 深绿色半透明遮罩 */}
      <div className="absolute inset-0 bg-[#0D1F14]/15" />

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

        <h2 className="display-title mt-4 text-[#F5F3EE]">
          记录生活，思考世界(Testing)
        </h2>
      </div>

         <Bookshelf />
    </section>
        
       <Navigation/>





        
      </main>
    </div>
  );
}
