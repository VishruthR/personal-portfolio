import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const CarouselButtons = () => {
  return (
    <div className="space-x-3">
      <div className="rounded-full">
        <BsChevronRight />
      </div>
      <div className="rounded-full">
        <BsChevronLeft />
      </div>
    </div>
  );
};
