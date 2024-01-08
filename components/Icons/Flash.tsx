import React, { SVGProps } from "react";

const SvgFlash = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.21234 2.79947C8.29833 2.61633 8.48261 2.49955 8.68494 2.5L15.3137 2.51465C15.5157 2.51509 15.6993 2.63238 15.7846 2.81556C15.87 2.99874 15.8416 3.21473 15.7119 3.36971L12.1298 7.65085H15.1664C15.3797 7.65085 15.5715 7.78094 15.6503 7.97916C15.7292 8.17738 15.6792 8.40365 15.5242 8.55019L5.54499 17.9827C5.35867 18.1588 5.07191 18.1731 4.86897 18.0165C4.66602 17.8598 4.60726 17.5788 4.73044 17.3539L7.87765 11.6092H4.89583C4.71761 11.6092 4.55176 11.5181 4.4562 11.3676C4.36064 11.2172 4.34863 11.0283 4.42438 10.867L8.21234 2.79947Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.memo(SvgFlash);