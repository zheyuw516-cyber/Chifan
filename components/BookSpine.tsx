import type { ReadingNote } from "@/data/readingNotes";

type BookSpineProps = {
  book: ReadingNote;
  onOpen: (book: ReadingNote) => void;
};

export default function BookSpine({
  book,
  onOpen,
}: BookSpineProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(book)}
      aria-label={`打开《${book.title}》阅读笔记`}
      className="
        group
        relative
        flex
        shrink-0
        cursor-pointer
        items-center
        justify-center
        overflow-visible
        rounded-t-[3px]
        border-x
        border-t
        border-white/10
        shadow-[3px_3px_8px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:-translate-y-3
        hover:brightness-110
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#D8C59B]/70
      "
      style={{
        height: `${book.height ?? 180}px`,
        width: `${book.width ?? 48}px`,
        backgroundColor: book.color,
      }}
    >
      {/* 上方书脊装饰 */}
      <div
        className="
          absolute
          left-1
          right-1
          top-3
          border-t
          border-[#E8D7AF]/40
        "
      />

      {/* 书名 */}
      <span
        className="
          text-sm
          tracking-[0.18em]
          text-[#F0E5CE]
          [writing-mode:vertical-rl]
        "
      >
        {book.title}
      </span>

      {/* 下方书脊装饰 */}
      <div
        className="
          absolute
          bottom-3
          left-1
          right-1
          border-t
          border-[#E8D7AF]/40
        "
      />

      {/* Hover 提示 */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[calc(100%+18px)]
          left-1/2
          z-40
          w-max
          max-w-52
          -translate-x-1/2
          translate-y-2
          rounded-sm
          border
          border-[#D6C39B]/20
          bg-[#172219]/95
          px-4
          py-3
          text-left
          opacity-0
          shadow-[0_12px_30px_rgba(0,0,0,0.4)]
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <p className="whitespace-nowrap text-sm text-[#F4EDDF]">
          {book.title}
        </p>

        {book.author && (
          <p className="mt-1 whitespace-nowrap text-xs text-[#BDAF91]">
            {book.author}
          </p>
        )}
      </div>
    </button>
  );
}