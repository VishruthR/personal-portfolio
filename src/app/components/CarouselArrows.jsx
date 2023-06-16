import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const CarouselButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="absolute flex right-2 top-14 space-x-4">
      <div
        className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-darkGray hover:opacity-75 text-lightGray hover:text-teal"
        onClick={() => previous()}
      >
        <BsChevronLeft size={22} />
      </div>
      <div
        className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-darkGray hover:opacity-75 text-lightGray hover:text-teal"
        onClick={() => next()}
      >
        <BsChevronRight size={22} />
      </div>
    </div>
  );
};
