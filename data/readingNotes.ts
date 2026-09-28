export type ReadingNote = {
  id: string;
  title: string;
  author?: string;
  date?: string;

  content: string;

  color: string;
  height?: number;
  width?: number;
};

export const readingNotes: ReadingNote[] = [
  {
    id: "the-stranger",
    title: "局外人",
    author: "阿尔贝·加缪",
    date: "2026.09",
    content:
      "荒诞并不意味着世界毫无意义。\n\n也许真正值得思考的是，当世界不主动给予答案的时候，我们如何继续生活，又如何面对自己的选择。",
    color: "#304438",
    height: 180,
    width: 48,
  },

  {
    id: "1984",
    title: "1984",
    author: "乔治·奥威尔",
    date: "2026.08",
    content:
      "真正值得警惕的，也许不只是被迫接受某一种思想，而是在漫长的过程中逐渐失去判断真实的能力。",
    color: "#683F32",
    height: 195,
    width: 52,
  },

  {
    id: "sapiens",
    title: "人类简史",
    author: "尤瓦尔·赫拉利",
    date: "2026.07",
    content:
      "阅读历史有趣的一点，是我们很容易把今天习以为常的东西，当成自古以来便理所当然存在的事物。",
    color: "#75613F",
    height: 170,
    width: 50,
  },

  {
    id: "meditations",
    title: "沉思录",
    author: "马可·奥勒留",
    content:
      "我们无法决定所有发生在自己身上的事情，却仍然能够思考自己如何回应它们。",
    color: "#464457",
    height: 185,
    width: 46,
  },

  {
    id: "bible",
    title: "圣经",
    content:
      "这里可以记录阅读过程中留下的问题、经文以及自己的思考。",
    color: "#28372E",
    height: 205,
    width: 56,
  },
];