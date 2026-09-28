"use client";

import { useState } from "react";

import BookSpine from "./BookSpine";
import ReadingCard from "./ReadingCard";

import {
  readingNotes,
  type ReadingNote,
} from "@/data/readingNotes";

function ShelfRow({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* 放书区域 */}
      <div
        className="
          flex
          min-h-[225px]
          items-end
          gap-[6px]
          overflow-visible
          px-8
          pb-2
        "
      >
        {children}
      </div>

      {/* 木板 */}
      <div
        className="
          h-6
          border-y
          border-[#98714F]/30
          bg-gradient-to-b
          from-[#765137]
          via-[#56371F]
          to-[#382216]
          shadow-[0_8px_16px_rgba(0,0,0,0.5)]
        "
      />
    </div>
  );
}

export default function Bookshelf() {
  const [selectedBook, setSelectedBook] =
    useState<ReadingNote | null>(null);

  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-4">
        {/* 整个书柜 */}
        <div
          className="
            relative
            overflow-visible
            border-x-[18px]
            border-[#432A19]
            bg-[#1E160F]/85
            shadow-[0_25px_70px_rgba(0,0,0,0.55)]
          "
        >
          {/* 顶部木板 */}
          <div
            className="
              h-8
              border-y
              border-[#98714F]/30
              bg-gradient-to-b
              from-[#805A3C]
              via-[#5B3A23]
              to-[#3B2517]
              shadow-[0_8px_15px_rgba(0,0,0,0.35)]
            "
          />

          {/* 第一层 */}
          <ShelfRow>
            {readingNotes.slice(0, 3).map((book) => (
              <BookSpine
                key={book.id}
                book={book}
                onOpen={setSelectedBook}
              />
            ))}
          </ShelfRow>

          {/* 第二层 */}
          <ShelfRow>
            {readingNotes.slice(3).map((book) => (
              <BookSpine
                key={book.id}
                book={book}
                onOpen={setSelectedBook}
              />
            ))}
          </ShelfRow>

          {/* 第三层先空着 */}
          <ShelfRow />

          {/* 书柜底座 */}
          <div
            className="
              h-10
              border-t
              border-[#8C6747]/30
              bg-gradient-to-b
              from-[#5F3E27]
              to-[#342015]
              shadow-[0_12px_24px_rgba(0,0,0,0.45)]
            "
          />
        </div>
      </div>

      {/* 打开的阅读笔记 */}
      {selectedBook && (
        <ReadingCard
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
}