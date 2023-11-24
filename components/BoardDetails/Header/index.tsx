import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";

type BoardDetailsHeaderPropTypes = {};

const Header: React.FC<BoardDetailsHeaderPropTypes> = () => {
  return (
    <div className="flex flex-wrap flex-row justify-between board-details-header bg-black-50 backdrop-blur-sm py-3 pl-4 pr-3 h-auto items-center relative">
      <div className="flex flex-row items-center gap-1">
        <div className="text-white text-lg leading-8 font-bold px-3 hover:bg-slate-650 rounded-3 cursor-pointer">
          invoicing-app
        </div>
        <div className="p-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100">
          <Icons.SvgStar className="text-white hover:text-yellow-600 w-4 h-4" />
        </div>
        <div className="flex flex-row items-center p-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100">
          <Icons.SvgLock className="text-white w-4 h-4 mr-2" />
          <div className="text-white text-sm leading-5">Private</div>
        </div>
        <div className="flex flex-row px-3 mr-1 bg-gray-400 hover:bg-white rounded-3 cursor-pointer">
          <Icons.SvgThreeLines className="text-slate-950 w-4 h-4 mr-1 mt-[7px]" />
          <div className="flex items-center text-sm leading-8 text-slate-950 font-medium">
            Board
          </div>
        </div>
        <div className="cursor-pointer p-7 hover:bg-slate-650 rounded-3">
          <Icons.SvgArrowDown className="text-white w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row items-center px-3 py-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100">
          <Icons.SvgRocket className="text-white w-4 h-4 mr-2" />
          <div className="text-white text-sm leading-5">Power-Ups</div>
        </div>
        <div className="flex flex-row items-center px-3 py-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100">
          <Icons.SvgFlash className="text-white w-4 h-4 mr-1" />
          <div className="text-white text-sm leading-5">Automation</div>
        </div>
        <div className="flex flex-row items-center p-7 mr-1 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100">
          <Icons.SvgFilter className="text-white w-4 h-4 mr-1" />
          <div className="text-white text-sm leading-5">Filters</div>
        </div>
        <div className="mx-1 my-2 h-4 border border-gray-450"></div>
        <div className="flex flex-row items-center">
          <div className="relative">
            <Image
              src="/account.png"
              width={28}
              height={28}
              alt="account"
              className="relative z-10 cursor-pointer"
            />
            <Image
              src="/three-arrows.png"
              width={9}
              height={9}
              alt="account"
              className="absolute z-20 right-0 bottom-0 cursor-pointer"
            />
          </div>
          <div>
            <Image
              src="/user.png"
              width={31}
              height={31}
              alt="account"
              className="ml-[-3px] relative rounded-full cursor-pointer"
            />
          </div>
        </div>
        <button className="flex flex-row items-center pr-3 pl-2 bg-gray-400 hover:bg-white rounded-3 cursor-pointer">
          <Icons.SvgAddAccount className="text-slate-950 w-4 h-4 mr-1" />
          <div className="flex items-center text-sm leading-8 text-slate-950 font-medium">
            Share
          </div>
        </button>
        <div className="cursor-pointer p-7 hover:bg-slate-650 rounded-3">
          <Icons.SvgTreePoint className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
