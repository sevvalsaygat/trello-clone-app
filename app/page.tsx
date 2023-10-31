"use client";

import { useRef } from "react";

import { useLocale } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { Icons } from "@app/componets";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };

  const { t } = useLocale();

  return (
    <AppLayout>
      <div className="flex justify-center">
        <div
          className="flex bg-white justify-between mt-10"
          style={{ maxWidth: "calc(115vh)" }}
        >
          <div className="text-black break-all whitespace-pre-line mx-4 w-[256px]">
            <div className="flex flex-col w-full border-b border-blue-500">
              <div className="flex flex-row px-2 py-6 items-center border-transparent rounded-8 hover:bg-blue-500 cursor-pointer transition-all duration-100 gap-3">
                <div className="p-1">
                  <Icons.SvgBoardTrello className="text-slate-100" />
                </div>
                <div className="text-14 text-blue-300 leading-5 font-medium">
                  Boards
                </div>
              </div>
              <div className="flex flex-row px-2 py-6 items-center border-transparent rounded-8 hover:bg-blue-500 cursor-pointer transition-all duration-100 gap-3">
                <div className="p-1">
                  <Icons.SvgTemplate className="text-slate-100 w-4 h-4" />
                </div>
                <div className="text-14 text-blue-300 leading-5 font-medium">
                  Templates
                </div>
              </div>
              <div className="flex flex-row px-2 py-6 items-center border-transparent rounded-8 hover:bg-blue-500 cursor-pointer transition-all duration-100 gap-3 mb-1">
                <div className="p-1">
                  <Icons.SvgHeartbeat className="text-slate-100 h-4 w-4" />
                </div>
                <div className="text-14 text-blue-300 leading-5 font-medium">
                  Home
                </div>
              </div>
            </div>
            <div className="py-3 w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="text-12 leading-4 text-slate-100 pl-3 py-2 font-medium">
                  Workspaces
                </div>
                <button className="mr-2 border-transparent rounded-3 hover:bg-blue-500 p-1">
                  <Icons.SvgPlus className="text-slate-100 h-4 w-4" />
                </button>
              </div>
              <div role="travel" className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between hover:bg-blue-500 rounded-8 transition-all duration-100 cursor-pointer mb-1 w-full">
                    <div className="flex flex-row px-3 py-6 gap-2 items-center">
                      <div className="flex justify-center items-center w-6 h-6 border-transparent rounded-4 font-bold text-white text-14 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                        T
                      </div>
                      <div className="text-14 leading-5 text-blue-300 font-medium">
                        Travel Workspaces
                      </div>
                    </div>
                    <div className="flex items-center mr-3">
                      <Icons.SvgArrowUp className="text-slate-100 h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center py-6 pl-11 pr-2 gap-3 cursor-pointer bg-blue-600 rounded-8 mb-1">
                    <Icons.SvgBoardTrello className="text-slate-100" />
                    <div className="text-blue-400 text-14 leading-5">
                      Boards
                    </div>
                  </div>
                  <div className="flex flex-row items-center py-6 pl-11 pr-2 gap-3 cursor-pointer hover:bg-blue-500 rounded-8 transition-all duration-100 mb-1">
                    <Icons.SvgHeart className="text-slate-100 w-4 h-4" />
                    <div className="text-blue-300 text-14 leading-5">
                      Highlights
                    </div>
                  </div>
                  <div className="group/item flex flex-row items-center justify-between py-6 pl-11 pr-1 cursor-pointer hover:bg-blue-500 rounded-8 transition-all duration-100 mb-1">
                    <div className="flex flex-row items-center gap-3">
                      <Icons.SvgView className="text-slate-100 w-4 h-4" />
                      <div className="text-blue-300 text-14 leading-5">
                        View
                      </div>
                    </div>
                    <div className="mr-2">
                      <Icons.SvgArrowRight className="hidden group-hover/item:block text-slate-100 w-4 h-4 " />
                    </div>
                  </div>
                  <div className="group/item flex flex-row items-center justify-between py-6 pl-11 pr-1 cursor-pointer hover:bg-blue-500 rounded-8 transition-all duration-100 mb-1">
                    <div className="flex flex-row items-center gap-3">
                      <Icons.SvgMember className="text-slate-100 w-4 h-4" />
                      <div className="text-blue-300 text-14 leading-5">
                        Members
                      </div>
                    </div>
                    <div className="flex flex-row relative">
                      <div className="ml-5">
                        <Icons.SvgPlus className="text-slate-100 w-4 h-4" />
                      </div>
                      <div className="mr-2">
                        <Icons.SvgArrowRight className="hidden group-hover/item:block text-slate-100 w-4 h-4 " />
                      </div>
                    </div>
                  </div>
                  <div className="group/item flex flex-row items-center justify-between py-6 pl-11 pr-1 cursor-pointer hover:bg-blue-500 rounded-8 transition-all duration-100 mb-1">
                    <div className="flex flex-row items-center gap-3">
                      <Icons.SvgSetting className="text-slate-100 w-4 h-4" />
                      <div className="text-blue-300 text-14 leading-5">
                        Settings
                      </div>
                    </div>
                    <div className="mr-2">
                      <Icons.SvgArrowRight className="hidden group-hover/item:block text-slate-100 w-4 h-4 " />
                    </div>
                  </div>
                </div>
                <div className="premium-card border-y border-blue-500 rounded-3">
                  <div className="px-3">
                    <div className="flex flex-row justify-between items-center mt-4 mb-2">
                      <div className="text-blue-300 text-14 leading-4 font-medium">
                        Try Trello Premium
                      </div>
                      <button className="rounded-3 hover:bg-blue-500">
                        <Icons.SvgClose className="text-slate-100 h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-14 leading-5 text-slate-100 mr-2 mb-4">
                      Get unlimited boards, all the views, unlimited automation,
                      and more.
                    </div>
                    <div className="flex flex-row justify-between mb-4">
                      <button className="text-slate-100 hover:text-blue-300 text-14 leading-5 underline">
                        Start free trial
                      </button>
                      <div className="rounded-3 bg-purple-200 p-1">
                        <Icons.SvgPremium className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[825px]">HAHAHAHHAHAHAHHAHA</div>
        </div>
      </div>
    </AppLayout>
  );
}
