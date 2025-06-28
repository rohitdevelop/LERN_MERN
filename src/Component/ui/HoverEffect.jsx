import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../lib/utils";

const HoverEffect = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl py-10 w-full"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="relative group p-4 w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover Background Effect */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 -inset-2 bg-purple-800/80 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                />
              )}
            </AnimatePresence>

            {/* Card Content */}
            <div className="relative z-10 bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-3xl p-6 shadow-xl group-hover:scale-105 transition-transform duration-300 text-center">
              {/* Icon in center */}
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 mx-auto mb-4">
                <span className="text-3xl text-purple-700 dark:text-purple-300">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 font-mono text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffect;
