"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsMouse, BsMouseFill } from "react-icons/bs";
import { facts } from "@/data/facts";

const FastFactsCard = () => {
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % facts.length);
      setIsFlipping(false);
    }, 150);
  };

  return (
    <div className="mt-4" onClick={handleNext}>
      <motion.div
        className="w-full flex justify-center relative cursor-pointer"
        initial={false}
        animate={{ rotateX: isFlipping ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative border-2 border-brownMuted rounded-2xl h-[150px] md:w-[75%] sm:w-[90%] px-2 flex flex-col items-center bg-background text-center select-none">
          <div className="flex-1 flex items-center justify-center">
            <p className="font-inter md:text-lg sm:text-sm text-brownMuted leading-relaxed">
              {facts[index]}
            </p>
          </div>
          <div className="w-full flex mb-2 items-center justify-center px-4 relative">
            <div className="absolute left-2 text-xs text-brownMuted opacity-60 font-inter">
              {index + 1}/{facts.length}
            </div>
            <div className="gap-2 flex items-center text-brownDark opacity-60 text-sm font-inter">
              <span>Click to see more</span>
              <BsMouseFill />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FastFactsCard;

