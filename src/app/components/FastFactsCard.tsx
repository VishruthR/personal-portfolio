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
        <div className="relative border-2 border-brownMuted rounded-2xl p-8 pb-2 h-[150px] w-[75%] flex flex-col items-center bg-background text-center select-none">
          <div className="flex-1 flex items-center justify-center">
            <p className="font-playfair text-md md:text-lg text-brownMuted leading-relaxed">
              {facts[index]}
            </p>
          </div>
          <div className="mt-6 gap-2 flex items-center text-brownDark opacity-60 text-sm font-sans">
            <span>Click to see more</span>
            <BsMouseFill />
          </div>
          <div className="absolute bottom-3 left-4 text-xs text-brownMuted opacity-60 font-sans">
            {index + 1}/{facts.length}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FastFactsCard;

