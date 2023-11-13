import React, { useState } from "react";

import { Icons } from "@app/components";
import { useLocale } from "@app/hooks";

type SidebarPropTypes = {};

const Sidebar: React.FC<SidebarPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Boards.Sidebar",
  };

  const { t } = useLocale();
  const [travelWorkspacesisActive, setTravelWorkspacesIsActive] =
    useState(true);
  const [premiumCardIsClosed, setPremiumCardIsClosed] = useState(false);

  const travelWorkspacesHandleClick = () => {
    setTravelWorkspacesIsActive(!travelWorkspacesisActive);
  };

  return (
    <div className="text-black break-all whitespace-pre-line mx-4 w-[256px]">
      <div className="flex flex-col w-full border-b border-gray-350">
        <div className="flex flex-row px-2 py-6 items-center border-transparent rounded-8 hover:bg-gray-350 cursor-pointer transition-all duration-100 gap-3">
          <div className="p-1">
            <Icons.SvgBoardTrello className="text-slate-900" />
          </div>
          <div className="text-14 text-slate-950 leading-5 font-medium">
            {t("labels.boards", SCOPE_OPTIONS)}
          </div>
        </div>
        <div className="flex flex-row px-2 py-6 items-center border-transparent rounded-8 hover:bg-gray-350 cursor-pointer transition-all duration-100 gap-3">
          <div className="p-1">
            <Icons.SvgTemplate className="text-slate-900 w-4 h-4" />
          </div>
          <div className="text-14 text-slate-950 leading-5 font-medium">
            {t("labels.templates", SCOPE_OPTIONS)}
          </div>
        </div>
        <div className="flex flex-row px-2 py-6 items-center border-transparent rounded-8 hover:bg-gray-350 cursor-pointer transition-all duration-100 gap-3 mb-1">
          <div className="p-1">
            <Icons.SvgHeartbeat className="text-slate-900 h-4 w-4" />
          </div>
          <div className="text-14 text-slate-950 leading-5 font-medium">
            {t("labels.home", SCOPE_OPTIONS)}
          </div>
        </div>
      </div>
      <div className="py-3 w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="text-12 leading-4 text-slate-900 pl-3 py-2 font-medium">
            {t("labels.workspaces", SCOPE_OPTIONS)}
          </div>
          <button className="mr-2 border-transparent rounded-3 hover:bg-gray-350 p-1">
            <Icons.SvgPlus className="text-slate-900 h-4 w-4" />
          </button>
        </div>
        <div role="travel" className="flex flex-col">
          <div className="flex flex-col">
            <button
              onClick={travelWorkspacesHandleClick}
              className="flex flex-row justify-between hover:bg-gray-350 rounded-8 transition-all duration-100 cursor-pointer mb-1 w-full"
            >
              <div className="flex flex-row px-3 py-6 gap-2 items-center">
                <div className="flex justify-center items-center w-6 h-6 border-transparent rounded-4 font-bold text-white text-14 bg-gradient-to-t from-blue-750 from-10% via-indigo-900 via-70% to-violet-900 to-90%">
                  T
                </div>
                <div className="text-14 leading-5 text-slate-950 font-medium">
                  {t("labels.travelWorkspaces", SCOPE_OPTIONS)}
                </div>
              </div>
              <div className="flex relative items-center mr-3">
                {travelWorkspacesisActive ? (
                  <Icons.SvgArrowUp className="text-slate-900 h-4 w-4" />
                ) : (
                  <Icons.SvgArrowDown className="text-slate-900 h-4 w-4" />
                )}
              </div>
            </button>
            {travelWorkspacesisActive && (
              <div>
                <div className="flex flex-row items-center py-6 pl-11 pr-2 gap-3 cursor-pointer bg-blue-200 rounded-8 mb-1">
                  <Icons.SvgBoardTrello className="text-slate-900" />
                  <div className="text-blue-800 text-14 leading-5">
                    {t("travelWorkspaceItems.labels.boards", SCOPE_OPTIONS)}
                  </div>
                </div>
                <div className="flex flex-row items-center py-6 pl-11 pr-2 gap-3 cursor-pointer hover:bg-gray-350 rounded-8 transition-all duration-100 mb-1">
                  <Icons.SvgHeart className="text-slate-900 w-4 h-4" />
                  <div className="text-slate-950 text-14 leading-5">
                    {t("travelWorkspaceItems.labels.highlights", SCOPE_OPTIONS)}
                  </div>
                </div>
                <div className="group/item flex flex-row items-center justify-between py-6 pl-11 pr-1 cursor-pointer hover:bg-gray-350 rounded-8 transition-all duration-100 mb-1">
                  <div className="flex flex-row items-center gap-3">
                    <Icons.SvgView className="text-slate-900 w-4 h-4" />
                    <div className="text-slate-950 text-14 leading-5">
                      {t("travelWorkspaceItems.labels.view", SCOPE_OPTIONS)}
                    </div>
                  </div>
                  <div className="mr-2">
                    <Icons.SvgArrowRight className="hidden group-hover/item:block text-slate-900 w-4 h-4 " />
                  </div>
                </div>
                <div className="group/item flex flex-row items-center justify-between py-6 pl-11 pr-1 cursor-pointer hover:bg-gray-350 rounded-8 transition-all duration-100 mb-1">
                  <div className="flex flex-row items-center gap-3">
                    <Icons.SvgMember className="text-slate-900 w-4 h-4" />
                    <div className="text-slate-950 text-14 leading-5">
                      {t("travelWorkspaceItems.labels.members", SCOPE_OPTIONS)}
                    </div>
                  </div>
                  <div className="flex flex-row relative gap-3">
                    <div className="ml-5">
                      <Icons.SvgPlus className="text-slate-900 w-4 h-4" />
                    </div>
                    <div className="mr-2">
                      <Icons.SvgArrowRight className="hidden group-hover/item:block text-slate-900 w-4 h-4 " />
                    </div>
                  </div>
                </div>
                <div className="group/item flex flex-row items-center justify-between py-6 pl-11 pr-1 cursor-pointer hover:bg-gray-350 rounded-8 transition-all duration-100 mb-1">
                  <div className="flex flex-row items-center gap-3">
                    <Icons.SvgSetting className="text-slate-900 w-4 h-4" />
                    <div className="text-slate-950 text-14 leading-5">
                      {t("travelWorkspaceItems.labels.settings", SCOPE_OPTIONS)}
                    </div>
                  </div>
                  <div className="mr-2">
                    <Icons.SvgArrowRight className="hidden group-hover/item:block text-slate-900 w-4 h-4 " />
                  </div>
                </div>
              </div>
            )}
          </div>
          {!premiumCardIsClosed && (
            <div className="premium-card border-y border-gray-350 rounded-3">
              <div className="px-3">
                <div className="flex flex-row justify-between items-center mt-4 mb-2">
                  <div className="text-slate-950 text-14 leading-4 font-medium">
                    {t("premiumCard.labels.try", SCOPE_OPTIONS)}
                  </div>
                  <button
                    onClick={() => setPremiumCardIsClosed(true)}
                    className="rounded-3 hover:bg-gray-350"
                  >
                    <Icons.SvgClose className="text-slate-900 h-4 w-4" />
                  </button>
                </div>
                <div className="text-14 leading-5 text-slate-900 mb-4">
                  {t("premiumCard.labels.content", SCOPE_OPTIONS)}
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <button className="text-slate-900 hover:text-slate-950 text-14 leading-5 underline">
                    {t("premiumCard.labels.startFree", SCOPE_OPTIONS)}
                  </button>
                  <div className="rounded-3 bg-violet-800 p-1">
                    <Icons.SvgPremium className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
