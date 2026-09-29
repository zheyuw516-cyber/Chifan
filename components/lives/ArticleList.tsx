import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <p className="text-[#5C645B]">
        文章正在整理中。
      </p>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/lives/${article.slug}`}
          className="group overflow-hidden border border-[#D8D0BF] bg-[#FBF8F1]"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <p className="text-sm text-[#8B704D]">
              {article.category} · {article.date}
            </p>
            <h3 className="mt-3 text-xl text-[#243B2D]">
              {article.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#5C645B]">
              {article.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}