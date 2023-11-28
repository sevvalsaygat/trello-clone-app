import React from "react";
import Image from "next/image";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { Icons } from "@app/components";
import { COLORS } from "@app/constants";

type BoardDetailsHeaderPropTypes = {};

const TOOLTIPS = {
  star: "star-tooltip",
  private: "private-tooltip",
  board: "board-tooltip",
  arrow: "arrow-tooltip",
  power: "templates-tooltip",
  automation: "automation-tooltip",
  filter: "information-tooltip",
  share: "share-tooltip",
};

const tooltipStyles = {
  backgroundColor: COLORS.gray[800],
  color: "white",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  fontSize: "12px",
};

const Header: React.FC<BoardDetailsHeaderPropTypes> = () => {
  return (
    <div className="flex flex-wrap flex-row justify-between bg-black-50 backdrop-blur-sm py-3 pl-4 pr-3 h-auto items-center relative">
      <div className="flex flex-row items-center gap-1">
        <div className="text-white text-lg leading-8 font-bold px-3 hover:bg-slate-650 rounded-3 cursor-pointer">
          invoicing-app
        </div>
        <div
          className="p-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100"
          data-tooltip-id={TOOLTIPS.star}
          data-tooltip-content={
            "Click to star or unstart this board. Starred boards show up at the top of your boards list."
          }
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.star} style={tooltipStyles} />
          <Icons.SvgStar className="text-white hover:text-yellow-600 w-4 h-4" />
        </div>
        <div
          className="flex flex-row items-center p-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100"
          data-tooltip-id={TOOLTIPS.private}
          data-tooltip-content={"Change visibility"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.private} style={tooltipStyles} />
          <Icons.SvgLock className="text-white w-4 h-4 mr-2" />
          <div className="text-white text-sm leading-5">Private</div>
        </div>
        <div
          className="flex flex-row px-3 mr-1 bg-gray-400 hover:bg-white rounded-3 cursor-pointer"
          data-tooltip-id={TOOLTIPS.board}
          data-tooltip-content={"Board"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.board} style={tooltipStyles} />
          <Icons.SvgThreeLines className="text-slate-950 w-4 h-4 mr-1 mt-[7px]" />
          <div className="flex items-center text-sm leading-8 text-slate-950 font-medium">
            Board
          </div>
        </div>
        <div
          className="cursor-pointer p-7 hover:bg-slate-650 rounded-3"
          data-tooltip-id={TOOLTIPS.arrow}
          data-tooltip-content={"Customize views"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.arrow} style={tooltipStyles} />
          <Icons.SvgArrowDown className="text-white w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div
          className="flex flex-row items-center px-3 py-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100"
          data-tooltip-id={TOOLTIPS.power}
          data-tooltip-content={"Power-Ups"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.power} style={tooltipStyles} />
          <Icons.SvgRocket className="text-white w-4 h-4 mr-2" />
          <div className="text-white text-sm leading-5">Power-Ups</div>
        </div>
        <div
          className="flex flex-row items-center px-3 py-7 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100"
          data-tooltip-id={TOOLTIPS.automation}
          data-tooltip-content={"Automation"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.automation} style={tooltipStyles} />
          <Icons.SvgFlash className="text-white w-4 h-4 mr-1" />
          <div className="text-white text-sm leading-5">Automation</div>
        </div>
        <div
          className="flex flex-row items-center p-7 mr-1 hover:bg-slate-650 rounded-3 cursor-pointer transition-all duration-100"
          data-tooltip-id={TOOLTIPS.filter}
          data-tooltip-content={"Filter cards"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.filter} style={tooltipStyles} />
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
        <button
          className="flex flex-row items-center pr-3 pl-2 bg-gray-400 hover:bg-white rounded-3 cursor-pointer"
          data-tooltip-id={TOOLTIPS.share}
          data-tooltip-content={"Share board"}
          data-tooltip-delay-show={100}
          data-tooltip-place="bottom"
        >
          <ReactTooltip id={TOOLTIPS.share} style={tooltipStyles} />
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
