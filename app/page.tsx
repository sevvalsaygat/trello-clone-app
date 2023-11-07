"use client";

import { useState } from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";

import { useLocale } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { Icons, Form } from "@app/componets";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };

  const { t } = useLocale();
  const useFormMethods = useForm();

  const options = [
    { value: "Popular", label: "Popular" },
    { value: "small business", label: "Small business" },
    { value: "design", label: "Design" },
    { value: "education", label: "Education" },
    { value: "engineering-IT", label: "Engineering-IT" },
    { value: "marketing", label: "Marketing" },
    { value: "human resources", label: "Human Resources" },
    { value: "operations", label: "Operations" },
    { value: "sales CRM", label: "Sales CRM" },
  ];

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [isClosed, setIsClosed] = useState(false);

  return (
    <AppLayout>
      <div className="flex justify-center">
        <div
          className="flex bg-white justify-between mt-10"
          style={{ maxWidth: "calc(200vh)" }}
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
                  <button
                    onClick={handleClick}
                    className="flex flex-row justify-between hover:bg-blue-500 rounded-8 transition-all duration-100 cursor-pointer mb-1 w-full"
                  >
                    <div className="flex flex-row px-3 py-6 gap-2 items-center">
                      <div className="flex justify-center items-center w-6 h-6 border-transparent rounded-4 font-bold text-white text-14 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                        T
                      </div>
                      <div className="text-14 leading-5 text-blue-300 font-medium">
                        Travel Workspaces
                      </div>
                    </div>
                    <div className="flex relative items-center mr-3">
                      {isActive ? (
                        <Icons.SvgArrowUp className="text-slate-100 h-4 w-4" />
                      ) : (
                        <Icons.SvgArrowDown className="text-slate-100 h-4 w-4" />
                      )}
                    </div>
                  </button>
                  {isActive && (
                    <div>
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
                        <div className="flex flex-row relative gap-3">
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
                  )}
                </div>
                {!isClosed && (
                  <div className="premium-card border-y border-blue-500 rounded-3">
                    <div className="px-3">
                      <div className="flex flex-row justify-between items-center mt-4 mb-2">
                        <div className="text-blue-300 text-14 leading-4 font-medium">
                          Try Trello Premium
                        </div>
                        <button
                          onClick={() => setIsClosed(true)}
                          className="rounded-3 hover:bg-blue-500"
                        >
                          <Icons.SvgClose className="text-slate-100 h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-14 leading-5 text-slate-100 mb-4">
                        Get unlimited boards, all the views, unlimited
                        automation, and more.
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
                )}
              </div>
            </div>
          </div>
          <div className="w-[825px] mx-4">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <button className="group/item flex relative mr-3">
                  <div className="flex justify-center items-center w-60 h-60 border-transparent rounded-4 font-bold text-white text-35 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                    T
                  </div>
                  <span className="hidden group-hover/item:block text-14 leading-8 absolute h-8 bottom-0 bg-black-50 text-white font-bold w-full justify-center items-center underline">
                    Change
                  </span>
                </button>
                <div className="flex flex-col mt-2">
                  <div className="flex flex-row items-center">
                    <div className="text-20 leading-6 text-blue-300">
                      Travel Workspaces
                    </div>
                    <button className="hover:bg-blue-500 ml-2 mt-1 p-1 rounded-3">
                      <Icons.SvgPen className="text-slate-100 h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex flex-row items-center">
                    <Icons.SvgLock className="text-slate-500 h-4 w-4 mr-1" />
                    <div className="text-12 leading-5 text-slate-100">
                      Private
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-blue-500 my-4"></div>
              <div className="flex flex-col pl-4">
                <div className="py-3 mb-24">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      <Icons.SvgTemplate className="text-slate-100 w-6 h-6 mr-1" />
                      <div className="text-20 leading-6 text-blue-300 font-semibold">
                        Most popular templates
                      </div>
                    </div>
                    <button className="p-6 bg-gray-550 hover:bg-blue-500 rounded-3 mb-2">
                      <Icons.SvgClose className="text-blue-300 h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="text-14 leading-5 text-slate-100">
                      Get going faster with a template from the Trello community
                      or
                    </div>
                    <FormProvider {...useFormMethods}>
                      <Form.Select
                        className="ml-2 text-14 leading-5 text-blue-300 w-[240px]"
                        name="selectbox"
                        options={options}
                        placeholder="choose a category"
                      />
                    </FormProvider>
                  </div>
                  <div className="flex flex-row mt-8">
                    <div className="flex relative mr-4 mb-4 cursor-pointer">
                      <Image
                        src="/pink-background.jpg"
                        width={180}
                        height={96}
                        alt="account"
                        className="rounded-3 w-190 h-96"
                      />
                      <div className="absolute hover:bg-black-50 w-full h-full">
                        <div className="ml-2 mt-2">
                          <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                            Template
                          </div>
                          <div className="text-white font-semibold text-16 leading-5">
                            Project Management
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative mr-4 mb-4 cursor-pointer">
                      <Image
                        src="/kanban.jpg"
                        width={180}
                        height={96}
                        alt="account"
                        className="rounded-3 w-190 h-96"
                      />
                      <div className="absolute hover:bg-black-50 w-full h-full">
                        <div className="ml-2 mt-2">
                          <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                            Template
                          </div>
                          <div className="text-white font-semibold text-16 leading-5">
                            Kanban Template
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative mr-4 mb-4 cursor-pointer">
                      <Image
                        src="/leaf.jpg"
                        width={180}
                        height={96}
                        alt="account"
                        className="rounded-3 w-190 h-96"
                      />
                      <div className="absolute hover:bg-black-50 w-full h-full">
                        <div className="ml-2 mt-2">
                          <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                            Template
                          </div>
                          <div className="text-white font-semibold text-16 leading-5">
                            Simple Project Board
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative mr-4 mb-4 cursor-pointer">
                      <Image
                        src="/train.jpg"
                        width={180}
                        height={96}
                        alt="account"
                        className="rounded-3 w-190 h-96"
                      />
                      <div className="absolute hover:bg-black-50 w-full h-full">
                        <div className="ml-2 mt-2">
                          <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                            Template
                          </div>
                          <div className="text-white font-semibold text-16 leading-5">
                            Remote Team Hub
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-14 leading-5 text-blue-400 cursor-pointer hover:underline mb-2">
                    Browse the full template gallery
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row pb-3">
                    <div className="pr-3">
                      <Icons.SvgUser className="text-slate-100 w-6 h-6 bold" />
                    </div>
                    <h1 className="text-16 leading-6 text-blue-300 font-bold">
                      Your boards
                    </h1>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex relative mr-4 mb-4 cursor-pointer w-190 h-96">
                      <Image
                        src="/board.jpg"
                        width={180}
                        height={96}
                        alt="account"
                        className="rounded-3 w-190 h-96"
                      />
                      <div className="absolute hover:bg-black-50 w-full h-full">
                        <div className="group/item flex flex-col ml-2 mt-2 justify-between w-full h-full">
                          <div className="text-white font-semibold text-16 leading-5">
                            invoicing-app
                          </div>
                          <div className="flex mb-4 mr-5 justify-end">
                            <Icons.SvgStar className="text-white w-4 h-4 hidden group-hover/item:block" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex mr-4 mb-4 p-2 cursor-pointer w-190 h-96 bg-gray-550 hover:bg-blue-500 rounded-3">
                      <div className="flex justify-center items-center w-full h-full text-14 leading-5 text-blue-300">
                        Create a new board
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
