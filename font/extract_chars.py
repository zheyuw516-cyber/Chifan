from pathlib import Path
from fontTools import subset

SCRIPT_DIR = Path(__file__).resolve().parent

ROOT = SCRIPT_DIR.parent / "app"
OUTPUT = SCRIPT_DIR.parent / "font" / "characters.txt"

chars = set()


def remove_comments(text: str) -> str:
    result = []

    i = 0
    in_string = None

    while i < len(text):

        # 如果当前正在字符串里面
        if in_string:
            result.append(text[i])

            # 处理转义字符，例如 \"
            if text[i] == "\\" and i + 1 < len(text):
                result.append(text[i + 1])
                i += 2
                continue

            # 字符串结束
            if text[i] == in_string:
                in_string = None

            i += 1
            continue

        # 检测字符串开始
        if text[i] in ('"', "'", "`"):
            in_string = text[i]
            result.append(text[i])
            i += 1
            continue

        # 检测 // 单行注释
        if (
            text[i] == "/"
            and i + 1 < len(text)
            and text[i + 1] == "/"
        ):
            i += 2

            # 一直跳到这一行结束
            while i < len(text) and text[i] != "\n":
                i += 1

            continue

        # 检测 /* 多行注释 */
        if (
            text[i] == "/"
            and i + 1 < len(text)
            and text[i + 1] == "*"
        ):
            i += 2

            while i + 1 < len(text):
                if text[i] == "*" and text[i + 1] == "/":
                    i += 2
                    break

                i += 1

            continue

        result.append(text[i])
        i += 1

    return "".join(result)


for path in ROOT.rglob("*.tsx"):

    print(f"Scanning: {path}")

    text = path.read_text(
        encoding="utf-8",
        errors="ignore"
    )

    # 先删除注释
    text = remove_comments(text)

    # 再提取字符
    for ch in text:
        if (
            "\u4e00" <= ch <= "\u9fff"
            or ch.isascii()
            or ch in "，。！？：；、“”‘’（）·-—~"
        ):
            chars.add(ch)


OUTPUT.write_text(
    "".join(sorted(chars)),
    encoding="utf-8"
)

print(f"Extracted {len(chars)} characters.")
print(f"Saved to {OUTPUT}")

# ==============================
# 根据 characters.txt 生成字体子集
# ==============================

FONT_DIR = SCRIPT_DIR.parent / "font" / "SiYuanSongTiRegular"

FONTS = [
    (
        FONT_DIR / "SourceHanSerifCN-Light-5.otf",
        FONT_DIR / "SourceHanSerifCN-Light-subset.woff2",
    ),
    (
        FONT_DIR / "SourceHanSerifCN-Regular-1.otf",
        FONT_DIR / "SourceHanSerifCN-Regular-subset.woff2",
    ),
    (
        FONT_DIR / "SourceHanSerifCN-Bold-2.otf",
        FONT_DIR / "SourceHanSerifCN-Bold-subset.woff2",
    ),
]


for input_font, output_font in FONTS:

    print(f"Subsetting: {input_font.name}")

    options = subset.Options()

    # 输出 WOFF2
    options.flavor = "woff2"

    font = subset.load_font(
        str(input_font),
        options
    )

    subsetter = subset.Subsetter(options=options)

    # 告诉 FontTools：
    # 只保留 characters.txt 中出现的字符
    subsetter.populate(
        text="".join(chars)
    )

    subsetter.subset(font)

    subset.save_font(
        font,
        str(output_font),
        options
    )

    print(f"Created: {output_font.name}")