import type { ReadingNote } from "@/data/readingNotes";

type ReadingCardProps = {
  book: ReadingNote;
  onClose: () => void;
};

export default function ReadingCard({
  book,
  onClose,
}: ReadingCardProps) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#07100B]/65
        px-5
        py-10
      "
      onClick={onClose}
    >
      <article
        className="
          relative
          max-h-[80vh]
          w-full
          max-w-2xl
          overflow-y-auto
          rounded-sm
          border
          border-[#8B704D]/30
          bg-[#E9DFC9]
          px-8
          py-10
          text-[#33291F]
          shadow-[0_30px_90px_rgba(0,0,0,0.6)]
          sm:px-12
          sm:py-12
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* 纸张内部边框 */}
        <div
          className="
            pointer-events-none
            absolute
            inset-3
            border
            border-[#806A4E]/15
          "
        />

        {/* 关闭 */}
        <button
          type="button"
          onClick={onClose}
          aria-label="关闭阅读笔记"
          className="
            absolute
            right-6
            top-5
            z-10
            text-2xl
            font-light
            text-[#665642]/60
            transition-colors
            hover:text-[#33291F]
          "
        >
          ×
        </button>

        <div className="relative z-10">
          <p
            className="
              text-xs
              tracking-[0.28em]
              text-[#857258]
            "
          >
            READING NOTES
          </p>

          <h2
            className="
              mt-5
              text-3xl
              font-medium
              tracking-wide
              sm:text-4xl
            "
          >
            {book.title}
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#76654F]">
            {book.author && (
              <span>{book.author}</span>
            )}

            {book.date && (
              <span>{book.date}</span>
            )}
          </div>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#725D43]/20" />

            <span className="text-xs text-[#8C775B]/60">
              ◆
            </span>

            <div className="h-px flex-1 bg-[#725D43]/20" />
          </div>

          <div
            className="
              whitespace-pre-line
              text-base
              leading-8
              tracking-wide
              text-[#40352A]
              sm:text-lg
              sm:leading-9
            "
          >
            {book.content}
          </div>
        </div>
      </article>
    </div>
  );
}