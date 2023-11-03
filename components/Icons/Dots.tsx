import React, { SVGProps } from "react";

const SvgDots = ({ className }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      role="presentation"
      className={className}
    >
      <g fill="currentColor" fillRule="evenodd">
        <circle cx="12" cy="19" r="2"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="12" cy="5" r="2"></circle>
      </g>
    </svg>
  );
};

export default React.memo(SvgDots);
