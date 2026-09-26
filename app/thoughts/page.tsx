import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";

const categories = [
  {
    title: "阅读笔记",
    description: "从阅读中留下的问题、句子与启发。",
    href: "/thoughts/reading",
    className: "bg-[#364638]/85",
  },
  {
    title: "生命思考",
    description: "一些关于生活、成长与日常的思考。",
    href: "/thoughts/life",
    className: "bg-[#293D33]/85",
  },
];

export default function ThoughtsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* ==================== 背景 ==================== */}
      <Image
        src="/tree_house.png"
        alt="林中书屋"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      {/* 深绿色遮罩 */}
      <div className="absolute inset-0 bg-[#0D1F14]/45" />

      {/* Navigation */}
      <Navigation />

      {/* ==================== 页面内容 ==================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-12">

        {/* 标题 */}
        <div className="mb-14">
          <p className="text-sm tracking-[0.3em] text-[#D6C49A]">
            THOUGHTS
          </p>

          <h1 className="page-title mt-4 text-[#F5F3EE]">
            想法见闻
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#F5F3EE]/70">
            一些阅读、学习、信仰与生活中留下的思考。
          </p>
        </div>

        {/* ==================== 卡片区域 ==================== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {categories.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group
                relative
                flex
                min-h-[260px]
                flex-col
                justify-end
                overflow-hidden
                rounded-[28px]
                border
                border-[#E5D6B5]/20
                p-8
                text-[#F5F3EE]
                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#E5D6B5]/45
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                md:p-10
                ${item.className}
              `}
            >

              {/* 卡片编号 */}
              <p className="mb-auto text-sm tracking-[0.25em] text-[#D7C49A]/70">
                0{index + 1}
              </p>

              {/* 内容 */}
              <div>
                <h2 className="text-3xl font-medium tracking-wide">
                  {item.title}
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#F5F3EE]/65">
                  {item.description}
                </p>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#D7C49A]
                    transition-all
                    duration-300
                    group-hover:gap-4
                  "
                >
                  阅读更多
                  <span>→</span>
                </div>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}