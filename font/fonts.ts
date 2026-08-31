import localFont from "next/font/local";

export const sourceHanSerif = localFont({
  src: [
    {
      path: "../font/SiYuanSongTiRegular/SourceHanSerifCN-Light-subset.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/SiYuanSongTiRegular/SourceHanSerifCN-Regular-subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/SiYuanSongTiRegular/SourceHanSerifCN-Bold-subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});