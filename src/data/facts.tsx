import React from "react";

export const facts = [
  <span key="boxing">I am currently boxing for the Fighting Illini</span>,
  <span key="sports">
    I enjoy playing pretty much any sport, most recently, I’ve been playing a lot
    of volleyball
  </span>,
  <span key="baking">
    I like baking, I’ll link some of my favorite recipes below
  </span>,
  <span key="dunk">I dunked a basketball once in my life</span>,
  <span key="famous">
    I am the third most famous Vishruth Raj, behind an{" "}
    <a
      href="https://www.sammprada.com/our-doctors/dr-vishrut-raj/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-brownDark transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      accomplished doctor
    </a>{" "}
    and a{" "}
    <a
      href="https://indiabookofrecords.in/fastest-child-to-recite-counting-from-1-100-vishruth/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-brownDark transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      child who counts very fast
    </a>
  </span>,
];

