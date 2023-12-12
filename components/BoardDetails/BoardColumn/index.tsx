"use client";

import React from "react";

import { Icons, BoardDetails } from "@app/components";

type BoardColumnPropTypes = {
  title: string;
  tasks?: string[];
};

const BoardColumn: React.FC<BoardColumnPropTypes> = ({ title, tasks = [] }) => {
  return (
    <div className="flex flex-row mt-3">
      <ul className="mb-2 px-7">
        <li className="flex flex-shrink h-full cursor-pointer">
          <div className="whitespace-normal w-[272px] scroll-m-2">
            <div className="board-details-taskBoard flex flex-col bg-gray-100 rounded-xl gap-1">
              <div className="flex flex-row px-2 pt-2 justify-between">
                <div className="text-slate-950 text-sm leading-5 font-semibold pl-3 pr-2 py-7">
                  {title}
                </div>
                <button className="p-2 rounded-lg hover:bg-slate-450">
                  <Icons.SvgTreePoint className="w-4 h-4 text-slate-950" />
                </button>
              </div>
              <ul className="px-2 py-1">
                {tasks.map((taskName, i) => (
                  <BoardDetails.Task key={i} taskName={taskName} />
                ))}
              </ul>
              <div className="flex flex-row justify-between items-center p-2 pt-1">
                <div className="flex flex-row items-center gap-2 py-7 pl-2 pr-3 hover:bg-slate-450 cursor-pointer rounded-lg w-full text-gray-700 hover:text-slate-950 transition-all duration-300">
                  <Icons.SvgPlus className="w-4 h-4" />
                  <div className="text-sm leading-5 font-medium">
                    Add a card
                  </div>
                </div>
                <div className="hover:bg-slate-450 cursor-pointer rounded-lg p-2 transition-all duration-300">
                  <Icons.SvgTemplate className="w-4 h-4 text-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BoardColumn;
