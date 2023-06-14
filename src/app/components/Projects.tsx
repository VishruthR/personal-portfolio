"use client";

import { projects } from "@/data/projects";
import { Project } from "./Project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1350 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  tabletPlus: {
    breakpoint: { max: 1350, min: 1100 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1200, min: 940 },
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
    breakpoint: { max: 800, min: 643 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 150,
  },
  mobile: {
    breakpoint: { max: 643, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
};

const Projects = () => {
  return (
    <div className="my-8 py-8" id="projects">
      <p className="text-white font-bold md:text-6xl sm:text-4xl mb-8">
        Projects
      </p>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        keyBoardControl={true}
        partialVisbile={true}
      >
        {projects.map((project) => (
          <Project key={`project-${project.name}`} project={project} />
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
