import React, { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 299 511.517"
      {...props}
    >
      <path
        d="M286.421 75.262c36.893-64.702-15.581-96.094-51.926-60.145L25.08 215.793c-33.44 33.44-33.44 46.491 0 79.93L234.495 496.4c36.345 35.949 88.819 4.557 51.926-60.146L189.16 255.758l97.261-180.496z"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.memo(SvgArrowLeft);