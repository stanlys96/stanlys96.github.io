import React, { forwardRef } from "react";
import { ISvgProps } from "./Icon.type";

export const ReactIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function ReactIcon({ className, ...props }, ref) {
    return (
      <svg
        className={className}
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
      >
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }
);
