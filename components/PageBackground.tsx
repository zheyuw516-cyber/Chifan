import Image from "next/image";

type PageBackgroundProps = {
  src: string;
  alt: string;
};

export default function PageBackground({
  src,
  alt,
}: PageBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#0D1F14]/15" />
    </>
  );
}