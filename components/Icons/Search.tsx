import React, { SVGProps } from "react";

const SvgSearch = ({ className }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      role="presentation"
      className={className}
    >
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default React.memo(SvgSearch);