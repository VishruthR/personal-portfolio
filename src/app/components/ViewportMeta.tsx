"use client";

import { useEffect } from "react";

export default function ViewportMeta() {
  useEffect(() => {
    // Remove any existing viewport meta tag
    const existingViewport = document.querySelector('meta[name="viewport"]');
    if (existingViewport) {
      existingViewport.remove();
    }

    // Create and add the viewport meta tag
    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover";
    document.head.appendChild(viewport);

    return () => {
      // Cleanup on unmount
      const viewportTag = document.querySelector('meta[name="viewport"]');
      if (viewportTag && viewportTag.getAttribute("content")?.includes("viewport-fit=cover")) {
        viewportTag.remove();
      }
    };
  }, []);

  return null;
}

