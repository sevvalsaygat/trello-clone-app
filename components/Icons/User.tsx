import React, { SVGProps } from "react";

const SvgView = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title />
      <g data-name="Layer 7" id="Layer_7">
        <path
          className="cls-1"
          d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default React.memo(SvgView);
