"use client";

import { projects } from "@/data/projects";
import { Project } from "./Project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@/app/styles.css";
import { CarouselButtonGroup } from "./CarouselArrows";

interface CustomDotProps {
  onClick: () => void;
  active: boolean;
}

const responsive = {
  desktopPlus: {
    breakpoint: { max: 3000, min: 1570 },
    items: 4,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
  desktopMid: {
    breakpoint: { max: 1570, min: 1450 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 70,
  },
  desktop: {
    breakpoint: { max: 1450, min: 1350 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  tabletPlusPlus: {
    breakpoint: { max: 1350, min: 1200 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 140,
  },
  tabletPlus: {
    breakpoint: { max: 1200, min: 1100 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1100, min: 940 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  mobilePlusPlus: {
    breakpoint: { max: 940, min: 800 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 300,
  },
  mobilePlus: {
    breakpoint: { max: 800, min: 490 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 150,
  },
  mobile: {
    breakpoint: { max: 490, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
};

const CustomDot = ({ onClick, active }: CustomDotProps) => {
  return (
    <div
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className="flex items-center justify-center rounded-full w-3 h-3 bg-lightGray mx-2"
    >
      <div
        className={`rounded-full w-2 h-2 ${
          active ? "bg-lightGray " : "bg-darkGray"
        }`}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="my-8 py-8 relative" id="projects">
      <p className="text-white font-bold md:text-6xl sm:text-4xl mb-8">
        Projects
      </p>
      <div className="min-h-[350px]">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          keyBoardControl={true}
          partialVisbile={true}
          infinite={true}
          showDots={true}
          arrows={false}
          // @ts-ignore
          customDot={<CustomDot />}
          renderButtonGroupOutside={true}
          // @ts-ignore
          customButtonGroup={<CarouselButtonGroup />}
        >
          {projects.map((project) => (
            <div key={`project-${project.name}`} className="h-[97%]">
              <Project project={project} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
