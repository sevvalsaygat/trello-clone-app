"use client";

import { useLocale } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { Icons, Boards } from "@app/components";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };

  const { t } = useLocale();

  return (
    <AppLayout>
      <div className="flex justify-center">
        <div className="home-page flex bg-white justify-between mt-10">
          <Boards.Sidebar />
          <div className="w-[825px] mx-4">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <button className="group/item flex relative mr-3">
                  <div className="flex justify-center items-center w-60 h-60 border-transparent rounded-4 font-bold text-white text-35 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                    T
                  </div>
                  <span className="hidden group-hover/item:block text-14 leading-8 absolute h-8 bottom-0 bg-black-50 text-white font-bold w-full justify-center items-center underline">
                    {t("labels.change", SCOPE_OPTIONS)}
                  </span>
                </button>
                <div className="flex flex-col mt-2">
                  <div className="flex flex-row items-center">
                    <div className="text-20 leading-6 text-blue-300 font-semibold">
                      Travel Workspace
                    </div>
                    <button className="hover:bg-blue-500 ml-2 mt-1 p-1 rounded-3">
                      <Icons.SvgPen className="text-slate-100 h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex flex-row items-center">
                    <Icons.SvgLock className="text-slate-500 h-4 w-4 mr-1" />
                    <div className="text-12 leading-5 text-slate-100">
                      {t("labels.private", SCOPE_OPTIONS)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-blue-500 my-4"></div>
              <div className="flex flex-col pl-4">
                <Boards.PopularTemplates />
                <Boards.YourBoards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
