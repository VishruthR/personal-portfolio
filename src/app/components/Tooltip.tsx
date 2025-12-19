"use client";

import { Tooltip as ReactTooltip } from "react-tooltip";
import { cloneElement, isValidElement } from "react";
import "react-tooltip/dist/react-tooltip.css";

interface TooltipProps {
  id: string;
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ id, content, children }: TooltipProps) => {
  // Clone the child element and add data attributes
  const childWithProps = isValidElement(children)
    ? cloneElement(children as React.ReactElement, {
        "data-tooltip-id": id,
        "data-tooltip-content": content,
      })
    : children;

  return (
    <>
      {childWithProps}
      <ReactTooltip
        id={id}
        place="bottom"
        className="!bg-brownMuted !text-projectBg !text-xs !rounded-xl !px-2 !z-50 !font-inter !shadow-lg"
        style={{
          textAlign: "center",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        }}
      />
    </>
  );
};

export default Tooltip;

