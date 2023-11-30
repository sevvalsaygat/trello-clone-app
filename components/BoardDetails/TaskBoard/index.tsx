import React from "react";

import { Icons } from "@app/components";

type TaskBoardPropTypes = {
  title: string;
  content?: string;
};

const TaskBoard: React.FC<TaskBoardPropTypes> = ({ title, content }) => {
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
                <li className="flex flex-col gap-2 scroll-m-20">
                  <div className="board-details-taskBoard group/item flex bg-white rounded-lg min-h-[36px] cursor-pointer scroll-m-2 outline-none border-2 hover:border-pink-500">
                    <div className="flex flex-col gap-1 pl-3 pr-[2px] py-2 w-full">
                      <div className="flex flex-row justify-end relative">
                        <div className="text-slate-950 text-sm leading-5 w-full">
                          {content}
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
                          <span className="px-1 text-slate-900 text-xs left-5">
                            1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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

export default TaskBoard;
