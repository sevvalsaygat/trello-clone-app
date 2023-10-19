import React from "react";

import { LanguageSelect, Icons } from "@app/componets";

type FooterPropTypes = {};

const Footer: React.FC<FooterPropTypes> = () => {
  return (
    <div className="container flex flex-col items-center justify-center mb-6">
      <LanguageSelect />
      <hr className="my-9 border-gray-300 border-t w-full" />
      <div className="container w-150 mb-5">
        <Icons.SvgAtlassian />
      </div>
      <ul className="flex container items-center justify-center mt-7 text-14 leading-5 text-gray-250 font-light mx-auto">
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          Templates
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          Pricing
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">Apps</li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">Jobs</li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">Blog</li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          Developers
        </li>
        <li className="mx-2 cursor-pointer hover:underline">About</li>
        <li className="mx-2 cursor-pointer hover:underline">Help</li>
      </ul>
    </div>
  );
};

export default Footer;
