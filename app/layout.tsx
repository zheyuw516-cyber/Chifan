import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { sourceHanSerif } from "../font/fonts";
import MouseParticles from "@/components/MouseParticles";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chifan",
  description: "chifan = 吃饭",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable
      )}
    >
      <body
        className={`${sourceHanSerif.className} min-h-full flex flex-col`}
      >
        <MouseParticles />
        {children}
      </body>
    </html>
  );
} 