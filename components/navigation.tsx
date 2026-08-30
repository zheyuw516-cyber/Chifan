import Link from "next/link";

export default function Navigation() {
  return (
    <section className="fixed left-0 top-0 z-50 flex w-full bg-[#18251A] p-5 text-white">
      <nav className="flex w-full items-center justify-center gap-12">
        <Link href="/" className="rounded-xl px-4 py-2">
          首页
        </Link>

        <Link href="/about" className="rounded-xl px-4 py-2">
          关于此站
        </Link>

        <Link href="/thoughts" className="rounded-xl px-4 py-2">
          想法见闻
        </Link>

        <Link href="/life" className="rounded-xl px-4 py-2">
          生活
        </Link>
      </nav>
    </section>
  );
}