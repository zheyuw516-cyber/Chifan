import localFont from "next/font/local";

export const sourceHanSerif = localFont({
  src: [
    {
      path: "../font/SiYuanSongTiRegular/SourceHanSerifCN-Light-5.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/SiYuanSongTiRegular/SourceHanSerifCN-Regular-1.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/SiYuanSongTiRegular/SourceHanSerifCN-Bold-2.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});