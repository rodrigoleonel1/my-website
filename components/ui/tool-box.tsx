"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { Tool } from "@/lib/interfaces";

export const ToolBox = ({ tools }: { tools: Tool[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {tools.map((tool, idx) => (
        <div
          className="group relative -mr-4"
          key={tool.name}
          onMouseEnter={() => setHoveredIndex(tool.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === tool.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 1 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                  },
                }}
                className="absolute -top-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded bg-black px-2 py-1 shadow-xl whitespace-nowrap"
              >
                <div className="relative z-30 text-sm  text-white">
                  {tool.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={`h-10 w-10 rounded-full border-1 border-gray-700 bg-black`}
          >
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={tool.image}
              alt={tool.name}
              className={`relative !m-0 rounded-full border-1 object-cover !p-1.5 ${
                tool?.invert ? "invert" : ""
              }`}
            />
          </div>
        </div>
      ))}
    </>
  );
};
