export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  excerpt: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "the-beginning-of-a-journey",
    title: "旅途的开始",
    date: "2026-09-29",
    category: "生命旅途",
    cover: "/articles/journey-cover.jpg",
    excerpt: "在一些平凡的日子里，重新学习观察生活。",
    content: [
      {
        type: "paragraph",
        text: "这里写文章的第一段。你可以像写普通文字一样修改它。",
      },
      {
        type: "paragraph",
        text: "这里写第二段。每一段都是一个独立的内容块。",
      },
      {
        type: "heading",
        text: "路上的风景",
      },
      {
        type: "image",
        src: "/articles/journey-road.jpg",
        alt: "旅途中拍摄的一条小路",
        caption: "那天下午经过的小路。",
      },
      {
        type: "paragraph",
        text: "图片之后还可以继续写文字。",
      },
    ],
  },

    {
    slug: "light-in-ordinary-days",
    title: "平凡日子里的微光",
    date: "2026-09-29",
    category: "生命旅途",
    cover: "/articles/ordinary-days-cover.jpg",
    excerpt: "有些改变并不轰轰烈烈，而是从重新留意一天的生活开始。",
    content: [
      {
        type: "paragraph",
        text: "过去一段时间，我常常觉得日子过得很快。起床、做事、休息，一天结束时，却很难说清自己经历了什么。",
      },
      {
        type: "paragraph",
        text: "后来我开始尝试放慢一点。走路时看看路旁的树，吃饭时留意食物的味道，也给自己一点时间想想今天的心情。",
      },
      {
        type: "heading",
        text: "从细小的事开始",
      },
      {
        type: "paragraph",
        text: "这些事情并没有立刻改变我的生活，但它们提醒我：平凡的一天也值得认真地度过。",
      },
      {
        type: "image",
        src: "/articles/ordinary-days-window.jpg",
        alt: "阳光照进窗边的日常景象",
        caption: "一个安静的下午。",
      },
      {
        type: "paragraph",
        text: "我想继续记录这样的时刻，也记录自己在旅途中慢慢学会的事。",
      },
    ],
  },

  {
  slug: "a-slow-morning",
  title: "慢下来的早晨",
  date: "2026-09-28",
  category: "生活记录",
  cover: "/articles/slow-morning.jpg",
  excerpt: "试着把早晨留给自己，而不是一醒来就追赶时间。",
  content: [
    {
      type: "paragraph",
      text: "以前我醒来后，总会立刻拿起手机。还没真正开始一天，注意力就已经被许多事情带走了。",
    },
    {
      type: "heading",
      text: "给早晨一点空白",
    },
    {
      type: "paragraph",
      text: "现在我想试着先打开窗户、喝一杯水，再安静地想想今天要做的事。这样的改变很小，却让我更愿意面对新的一天。",
    },
  ],
},
{
  slug: "walking-through-the-city",
  title: "走过熟悉的街道",
  date: "2026-09-26",
  category: "生活记录",
  cover: "/articles/city-walk.jpg",
  excerpt: "同一条路，放慢脚步时也会看见不一样的风景。",
  content: [
    {
      type: "paragraph",
      text: "这条街我已经走过很多次。过去，我总想着快点到达目的地，很少留意路上的人和景色。",
    },
    {
      type: "paragraph",
      text: "今天没有赶时间，我看见店门口新摆的花，也注意到树影随着风轻轻移动。熟悉的地方，原来也能带来新的发现。",
    },
  ],
},
{
  slug: "learning-to-begin-again",
  title: "学习重新开始",
  date: "2026-09-24",
  category: "成长随笔",
  cover: "/articles/begin-again.jpg",
  excerpt: "有些计划没有按预想完成，但今天依然可以是新的起点。",
  content: [
    {
      type: "paragraph",
      text: "有时候我会因为之前没有做好一件事，就迟迟不愿意重新开始。好像必须先弥补过去，才有资格往前走。",
    },
    {
      type: "heading",
      text: "从今天能做的事开始",
    },
    {
      type: "paragraph",
      text: "但重新开始不一定需要一个隆重的决定。整理桌面、写下几句话、完成一件小事，也是在往前走。",
    },
  ],
},
{
  slug: "a-conversation-worth-remembering",
  title: "一次值得记住的谈话",
  date: "2026-09-21",
  category: "人与相遇",
  cover: "/articles/conversation.jpg",
  excerpt: "有时一句真诚的话，会在心里停留很久。",
  content: [
    {
      type: "paragraph",
      text: "那天的谈话并不长，我们只是坐下来聊了聊近来的生活。我原本以为自己没有多少话可说，后来却发现，被认真倾听是一件很珍贵的事。",
    },
    {
      type: "paragraph",
      text: "我也希望自己能学习这样倾听别人：不用急着给出答案，而是先陪对方把话说完。",
    },
  ],
},
{
  slug: "when-plans-change",
  title: "当计划发生变化",
  date: "2026-09-18",
  category: "成长随笔",
  cover: "/articles/changed-plans.jpg",
  excerpt: "面对意料之外的变化，我正在学习给自己一些时间。",
  content: [
    {
      type: "paragraph",
      text: "我喜欢提前想好事情会怎样发展，因为确定的安排让我安心。但生活并不总按计划进行。",
    },
    {
      type: "heading",
      text: "允许自己停一停",
    },
    {
      type: "paragraph",
      text: "计划改变时，我可以先承认自己的失望，再决定下一步。暂时不知道答案，也不代表我已经走错了路。",
    },
  ],
},
{
  slug: "keeping-small-moments",
  title: "把细小的时刻留下来",
  date: "2026-09-15",
  category: "生命旅途",
  cover: "/articles/small-moments.jpg",
  excerpt: "写作让我发现，有些看似普通的片刻值得被记住。",
  content: [
    {
      type: "paragraph",
      text: "我开始记录一些很小的事情：一顿好吃的饭、傍晚的光、朋友发来的一句问候。它们不一定能写成精彩的故事，却真实地构成了我的生活。",
    },
    {
      type: "paragraph",
      text: "也许多年以后再读这些文字，我会想起的不只是发生了什么，还有当时的自己怎样感受这一切。",
    },
  ],
},






];

