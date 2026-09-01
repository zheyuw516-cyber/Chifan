import Image from "next/image";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <main className="flex w-full flex-col items-center">

        <section
          id="home"
          className="
            relative
            flex
            min-h-screen
            w-full
            items-center
            overflow-hidden
            px-6
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

          {/* 遮罩 */}
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

          {/* ==================== ABOUT 内容 ==================== */}
          <div
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-7xl
            "
          >
            <div className="w-full max-w-xl">
              <h1 className="page-title text-[#F5F3EE]">
                关于此站
              </h1>

              <p className="mt-2 text-xl text-amber-300">
                About
              </p>

              <div className="my-6 h-px w-32 bg-amber-300/60" />

              <div
                className="
                  rounded-3xl
                  border
                  border-white/30
                  bg-[#E8DCC4]/90
                  p-8
                  text-[#243228]
                  shadow-xl
                  md:p-10
                "
              >
                <p className="body-text">
                  这里是「林中书屋 · CHIFAN」，
                  一个记录生活、思考世界的个人空间。
                </p>

                <p className="body-text mt-4">
                  成长的路上总有许多自顾不暇的时刻，也正因如此，记录才显得格外珍贵。这里会留下我的所见、所想与生活片刻，也希望在时间过去以后，仍能从这些文字与画面中，看见曾经走过的路。
                </p>

                <p className="body-text mt-8">
                  若这些关于生活的记录，也能在某个时刻触碰
                  到你的经历与思考，那么记录本身便有了另一层意义。
                </p>
              </div>

              <p className="mt-6 text-lg text-amber-200">
                “慢下来，去观察，去感受，去思考。”
              </p>
            </div>
          </div>
        </section>

        <Navigation />

      </main>
    </div>
  );
}