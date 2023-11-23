import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";

type SidebarPropTypes = {};

const Sidebar: React.FC<SidebarPropTypes> = () => {
  return (
    <div className="flex flex-col justify-between board-details-sidebar max-w-260 h-screen bg-gray-950 border-r border-blue-100">
      <div className="w-260 flex flex-col">
        <div className="flex flex-row px-3 py-3 border-b border-blue-100">
          <div className="flex justify-center items-center w-9 h-9 border-transparent rounded font-bold text-white text-xl bg-gradient-to-t from-blue-750 from-10% via-indigo-900 via-70% to-violet-900 to-90%">
            T
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col mx-2">
              <div className="text-white text-sm leading-5 font-bold">
                Travel Workspaces
              </div>
              <div className="text-white text-xs leading-5">Free</div>
            </div>
            <button className="flex justify-center items-center align-center p-10 bg-gray-900 border border-transparent hover:bg-slate-700 hover:border hover:border-slate-750 hover:rounded-sm transition-all duration-100">
              <Icons.SvgArrowLeft className="flex w-2 h-2 text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col pt-3">
          <button className="flex flex-row items-center pl-3 hover:bg-blue-100 p-1 transition-all duration-100">
            <div className="p-1">
              <Icons.SvgBoardTrello className="w-18 h-18 text-white" />
            </div>
            <div className="ml-2 text-white text-sm leading-5">Boards</div>
          </button>
          <button className="flex flex-row items-center pl-3 hover:bg-blue-100 p-1 transition-all duration-100">
            <div className="p-1">
              <Icons.SvgUser className="w-18 h-18 text-white" />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="ml-2 text-white text-sm leading-5">Members</div>
              <button className="p-1 mx-2 hover:bg-slate-600 hover:rounded-3">
                <Icons.SvgPlus className="w-4 h-4 text-white" />
              </button>
            </div>
          </button>
          <button className="flex flex-row items-center mb-2 pl-3 hover:bg-blue-100 p-1 transition-all duration-100">
            <div className="p-1">
              <Icons.SvgSetting className="w-18 h-18 text-white" />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="ml-2 text-white text-sm leading-5">
                Workspace settings
              </div>
              <button className="p-1 mx-2">
                <Icons.SvgArrowDown className="w-4 h-4 text-white" />
              </button>
            </div>
          </button>
        </div>
        <div className="flex flex-col mt-1">
          <div className="pl-3 py-1 text-white text-sm leading-6">
            Workspace views
          </div>
          <button className="group/item flex flex-row items-center mb-2 pl-3 hover:bg-blue-100 p-1 transition-all duration-100">
            <div className="p-1">
              <Icons.SvgTable className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="ml-2 text-white text-sm leading-5 italic">
                Table
              </div>
              <button className="p-1 mx-2 hover:bg-slate-600 hover:rounded-3">
                <Icons.SvgTreePoint className="w-4 h-4 text-white hidden group-hover/item:block" />
              </button>
            </div>
          </button>
          <button className="group/item flex flex-row items-center mb-2 pl-3 hover:bg-blue-100 p-1 transition-all duration-100">
            <div className="p-1">
              <Icons.SvgCalendar className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="ml-2 text-white text-sm leading-5 italic">
                Calendar
              </div>
              <button className="p-1 mx-2 hover:bg-slate-600 hover:rounded-3">
                <Icons.SvgTreePoint className="w-4 h-4 text-white hidden group-hover/item:block" />
              </button>
            </div>
          </button>
        </div>
        <div className="flex flex-col mt-1">
          <div className="group/item flex flex-row w-full justify-between">
            <div className="hover:bg-transparent pl-3 py-1 text-white text-sm leading-6">
              Your boards
            </div>
            <div className="flex flex-row items-center">
              <button className="p-1 mx-2 hover:bg-slate-600 hover:rounded-3">
                <Icons.SvgTreePoint className="w-4 h-4 text-white hidden group-hover/item:block" />
              </button>
              <button className="p-1 mx-3 hover:bg-slate-600 hover:rounded-3">
                <Icons.SvgPlus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          <div className="group/item flex flex-row items-center justify-between bg-slate-500 hover:bg-slate-550 px-3">
            <div className="flex flex-row items-center">
              <div className="flex items-center w-8 h-8 mr-2">
                <Image
                  src="/board.jpg"
                  width={55}
                  height={32}
                  alt="board"
                  className="rounded-sm"
                />
              </div>
              <div className="text-white text-sm leading-5">invoicing-app</div>
            </div>
            <div className="flex flex-row items-center">
              <button className="p-1 mx-2 hover:bg-slate-400 hover:rounded-3">
                <Icons.SvgTreePoint className="w-4 h-4 text-white hidden group-hover/item:block" />
              </button>
              <button className="p-1">
                <Icons.SvgStar className="w-4 h-4 hidden group-hover/item:block text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-white p-3 border-t border-blue-100">
        <button className="flex flex-row bg-gradient-to-r from-violet-800 via-violet-500 to-pink-400 hover:bg-gradient-to-r hover:from-blue-950 hover:via-indigo-850 hover:to-violet-700 rounded-3 items-center px-2 py-2 pr-3 w-full">
          <div className="mr-2">
            <Icons.SvgPremium className="w-4 h-4 text-white" />
          </div>
          <div className="text-white text-sm leading-5">Try Premium free</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
