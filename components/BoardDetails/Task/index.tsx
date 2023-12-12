"use client";

import React from "react";

import { Icons } from "@app/components";

type TaskPropTypes = {
  taskName: string;
};

const Task: React.FC<TaskPropTypes> = ({ taskName }) => {
  return (
    <div>
      <li className="flex flex-col gap-2 scroll-m-20">
        <div className="board-details-taskBoard group/item flex bg-white rounded-lg min-h-[36px] cursor-pointer scroll-m-2 outline-none border-2 hover:border-pink-500">
          <div className="flex flex-col gap-1 pl-3 pr-[2px] py-2 w-full">
            <div className="flex flex-row justify-end relative">
              <div className="text-slate-950 text-sm leading-5 w-full">
                {taskName}
              </div>
              <button className="absolute p-2 -mt-[6px] mb-2 bg-white hover:bg-gray-100 rounded-full hidden group-hover/item:block">
                <Icons.SvgPen className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="p-1">
                <Icons.SvgEye className="w-4 h-4 text-slate-900" />
              </div>
              <div className="p-1">
                <Icons.SvgLine className="w-4 h-4 text-slate-900" />
              </div>
              <div className="flex flex-row items-center p-1">
                <Icons.SvgComment className="w-4 h-4 text-slate-900" />
                <span className="px-1 text-slate-900 text-xs left-5">1</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Task;
