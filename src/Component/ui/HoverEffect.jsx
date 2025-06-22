import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../lib/utils";

const HoverEffect = ({ items }) => { // Accepts items from parent
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6")}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group block p-4 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover Effect Background */}
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
          <div className="relative z-10 hover:bg-white bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700
rounded-3xl p-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-extrabold mb-2 text-white">{item.title}</h2>
            <p className="text-gray-300 font-mono text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverEffect;
