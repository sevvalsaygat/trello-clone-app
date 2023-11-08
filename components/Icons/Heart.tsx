import React, { SVGProps } from "react";

const SvgHeart = ({ className }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18194 8.23223C5.20563 9.20854 5.20563 10.7915 6.18194 11.7678L12.1923 17.7782L18.2028 11.7678C19.1791 10.7915 19.1791 9.20854 18.2028 8.23223C17.2264 7.25592 15.6435 7.25592 14.6672 8.23223L12.8995 10C12.5089 10.3905 11.8758 10.3905 11.4852 10L9.71747 8.23223C8.74116 7.25592 7.15825 7.25592 6.18194 8.23223ZM4.76773 13.182C3.01037 11.4246 3.01037 8.57538 4.76773 6.81802C6.52509 5.06066 9.37433 5.06066 11.1317 6.81802L12.1923 7.87868L13.253 6.81802C15.0104 5.06066 17.8596 5.06066 19.617 6.81802C21.3743 8.57538 21.3743 11.4246 19.617 13.182L12.8995 19.8995C12.5089 20.29 11.8758 20.29 11.4852 19.8995L4.76773 13.182Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default React.memo(SvgHeart);