"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 px-2 py-2 bg-brownMuted text-projectBg text-xs rounded-xl w-max max-w-[300px] text-center z-10 font-inter shadow-lg"
          >
            {text}
            {/* Arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-brownMuted" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default Tooltip;

