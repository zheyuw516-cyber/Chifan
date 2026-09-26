"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WORLD_WIDTH = 1800;
const WORLD_HEIGHT = 1200;

const MIN_SCALE = 0.55;
const MAX_SCALE = 2.5;

type Node = {
  id: number;
  title: string;
  description: string;
  x: number;
  y: number;
  minScale: number;
};

const nodes: Node[] = [
  {
    id: 1,
    title: "成长",
    description: "关于改变、选择与成长。",
    x: 720,
    y: 340,
    minScale: 0.6,
  },
  {
    id: 2,
    title: "关系",
    description: "人与人之间的距离与连接。",
    x: 1130,
    y: 420,
    minScale: 0.6,
  },
  {
    id: 3,
    title: "孤独",
    description: "关于空虚、独处与内心世界。",
    x: 590,
    y: 590,
    minScale: 1.05,
  },
  {
    id: 4,
    title: "比较",
    description: "我们为什么总会看向别人？",
    x: 900,
    y: 500,
    minScale: 1.2,
  },
  {
    id: 5,
    title: "选择",
    description: "成长中那些无法回避的选择。",
    x: 1050,
    y: 680,
    minScale: 1.5,
  },
];

export default function ThoughtMap() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(0.7);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({
    mouseX: 0,
    mouseY: 0,
    mapX: 0,
    mapY: 0,
  });

  const [selectedNode, setSelectedNode] =
    useState<Node | null>(null);

  // ==============================
  // 第一次进入页面时，把整棵树放到画面中央
  // ==============================

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();

    const initialScale = 0.7;

    setScale(initialScale);

    setPosition({
      x: (rect.width - WORLD_WIDTH * initialScale) / 2,
      y: (rect.height - WORLD_HEIGHT * initialScale) / 2,
    });
  }, []);

  // ==============================
  // 鼠标滚轮缩放
  // ==============================

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    function handleWheel(event: WheelEvent) {
      event.preventDefault();

      const rect = viewport!.getBoundingClientRect();

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      setScale((currentScale) => {
        const zoomFactor = event.deltaY < 0 ? 1.12 : 0.88;

        const nextScale = Math.min(
          MAX_SCALE,
          Math.max(MIN_SCALE, currentScale * zoomFactor)
        );

        // 当前鼠标指向的“地图坐标”
        const worldX = (mouseX - position.x) / currentScale;
        const worldY = (mouseY - position.y) / currentScale;

        // 缩放以后，让鼠标继续指向同一个地方
        setPosition({
          x: mouseX - worldX * nextScale,
          y: mouseY - worldY * nextScale,
        });

        return nextScale;
      });
    }

    viewport.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, [position]);

  // ==============================
  // 鼠标拖动地图
  // ==============================

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (event.button !== 0) return;

    setDragging(true);

    dragStart.current = {
      mouseX: event.clientX,
      mouseY: event.clientY,
      mapX: position.x,
      mapY: position.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (!dragging) return;

    const deltaX =
      event.clientX - dragStart.current.mouseX;

    const deltaY =
      event.clientY - dragStart.current.mouseY;

    setPosition({
      x: dragStart.current.mapX + deltaX,
      y: dragStart.current.mapY + deltaY,
    });
  }

  function handlePointerUp() {
    setDragging(false);
  }

  // ==============================
  // 重置视角
  // ==============================

  function resetView() {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();

    const resetScale = 0.7;

    setScale(resetScale);

    setPosition({
      x: (rect.width - WORLD_WIDTH * resetScale) / 2,
      y: (rect.height - WORLD_HEIGHT * resetScale) / 2,
    });
  }

  return (
    <div
      ref={viewportRef}
      className={`
        relative
        h-full
        w-full
        overflow-hidden
        select-none
        ${dragging ? "cursor-grabbing" : "cursor-grab"}
      `}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* =========================
          整个“世界”
      ========================= */}

      <div
        className="absolute left-0 top-0"
        style={{
          width: WORLD_WIDTH,
          height: WORLD_HEIGHT,

          transform: `
            translate(${position.x}px, ${position.y}px)
            scale(${scale})
          `,

          transformOrigin: "0 0",
        }}
      >
        {/* 大树背景 */}

        <Image
          src="/life-tree.jpg"
          alt="生命之树"
          fill
          priority
          draggable={false}
          className="pointer-events-none object-cover"
        />

        {/* 深绿色遮罩 */}

        <div className="pointer-events-none absolute inset-0 bg-[#0D1F14]/25" />

        {/* =========================
            思想节点
        ========================= */}

        {nodes.map((node) => {
          const visible = scale >= node.minScale;

          return (
            <button
              key={node.id}
              type="button"
              onPointerDown={(event) =>
                event.stopPropagation()
              }
              onClick={() => setSelectedNode(node)}
              className={`
                absolute
                z-20
                -translate-x-1/2
                -translate-y-1/2
                transition-all
                duration-500

                ${
                  visible
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-75 opacity-0"
                }
              `}
              style={{
                left: node.x,
                top: node.y,
              }}
            >
              <div className="group flex items-center gap-3">
                {/* 光点 */}

                <div
                  className="
                    h-4
                    w-4
                    rounded-full
                    border
                    border-[#F1D79A]/80
                    bg-[#E8C978]
                    shadow-[0_0_18px_rgba(232,201,120,0.65)]
                    transition
                    duration-300
                    group-hover:scale-125
                  "
                />

                {/* 文字 */}

                <div className="text-left text-[#F5F3EE]">
                  <p className="text-xl tracking-wide">
                    {node.title}
                  </p>

                  {scale >= 1.25 && (
                    <p className="mt-1 text-sm text-[#F5F3EE]/65">
                      {node.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================
          页面标题
      ========================= */}

      <div className="pointer-events-none absolute left-10 top-28 z-30 text-[#F5F3EE]">
        <p className="text-sm tracking-[0.25em] text-[#D7C49A]">
          LIFE
        </p>

        <h1 className="mt-2 text-4xl font-light tracking-wide">
          生命思考
        </h1>
      </div>

      {/* =========================
          Zoom 信息
      ========================= */}

      <div
        className="
          absolute
          bottom-8
          right-8
          z-30
          flex
          items-center
          gap-4
          rounded-full
          border
          border-white/15
          bg-[#13251A]/75
          px-5
          py-3
          text-sm
          text-[#F5F3EE]/70
        "
      >
        <span>{Math.round(scale * 100)}%</span>

        <button
          type="button"
          onClick={resetView}
          className="transition hover:text-[#F1D79A]"
        >
          重置视角
        </button>
      </div>

      {/* =========================
          节点信息面板
      ========================= */}

      {selectedNode && (
        <div
          className="
            absolute
            bottom-8
            left-8
            z-40
            w-[320px]
            rounded-2xl
            border
            border-[#D7C49A]/20
            bg-[#14251A]/90
            p-6
            text-[#F5F3EE]
          "
        >
          <button
            type="button"
            onClick={() => setSelectedNode(null)}
            className="
              absolute
              right-4
              top-3
              text-xl
              text-white/50
              transition
              hover:text-white
            "
          >
            ×
          </button>

          <p className="text-xs tracking-[0.25em] text-[#D7C49A]">
            THOUGHT
          </p>

          <h2 className="mt-2 text-2xl">
            {selectedNode.title}
          </h2>

          <p className="mt-4 leading-7 text-[#F5F3EE]/65">
            {selectedNode.description}
          </p>
        </div>
      )}
    </div>
  );
}