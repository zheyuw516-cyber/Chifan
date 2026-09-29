import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import { articles } from "@/data/articles";
import { sourceHanSerif } from "../../../font/fonts";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div
      className={`${sourceHanSerif.className} min-h-screen bg-neutral-100 text-neutral-900`}
    >
      <main className="flex w-full flex-col items-center">
        <Navigation />

        <section className="relative isolate min-h-screen w-full overflow-hidden">
          {/* 与 lives 列表页共用森林背景 */}
          <Image
            src="/tree_house.png"
            alt="林中书屋背景"
            fill
            priority
            unoptimized
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[#0D1F14]/35" />

          <div className="px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
            <article className="mx-auto max-w-3xl bg-[#E9DFC9]/95 px-6 py-12 text-[#243B2D] shadow-2xl sm:px-12 sm:py-16">
              <Link
                href="/lives"
                className="text-sm text-[#8B704D] hover:underline"
              >
                ← 返回生活轨迹
              </Link>

              <header className="mt-10">
                <p className="text-sm text-[#8B704D]">
                  {article.category} · {article.date}
                </p>
                <h1 className="page-title mt-4">{article.title}</h1>
                <p className="mt-5 leading-8 text-[#5C645B]">
                  {article.excerpt}
                </p>
              </header>

              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src={article.cover}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>

              <div className="mt-12 space-y-8">
                {article.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-base leading-9 text-[#33291F]"
                      >
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="pt-4 text-2xl text-[#243B2D]"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  return (
                    <figure key={index}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 768px"
                          className="object-cover"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="mt-3 text-center text-sm text-[#71685A]">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}