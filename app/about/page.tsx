import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function About() {
  return (


    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <main className="flex w-full flex-col items-center">

    <section
      id="home"
      className="flex min-h-[60vh] w-full flex-col items-center pt-[20vh] px-6 text-center bg-[url('/tree.jpg')] bg-cover bg-center bg-no-repeat]"
    >
      <h1 className="text-7xl font-bold text-white">
        About
      </h1>

      <p className="mt-8 max-w-2xl text-white font-bold">
        这是一个记录生活、学习与思考的个人网站。
      </p>

      </section>
      {/* About */}
      <section
        id="about"
        className="w-full max-w-6xl px-6 py-24 "
      ></section>

      {/* ==================== ABOUT SECTION ==================== */}

        <section
          id="about"
          className="w-full max-w-6xl px-6 py-24"
        >
        </section>


        {/* ==================== NAVIGATION SECTION ==================== */}

        <section className="fixed left-0 top-0 z-50 flex w-full justify-center bg-white p-5">

          <nav className="flex w-full items-center justify-center gap-12 px-0 py-0">

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


      






        
      </main>
    </div>
  );
}
