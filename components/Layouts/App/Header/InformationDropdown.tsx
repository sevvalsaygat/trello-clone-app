import React from "react";
import Image from "next/image";

import { useLocale } from "@app/hooks";

type InformationDropdownPropTypes = {};

const InformationDropdown: React.FC<InformationDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.InformationDropdown",
  };

  const { t } = useLocale();

  return (
    <div className="p-3">
      <div className="px-3">
        <div className="flex flex-col max-w-336 hover:bg-zinc-300 cursor-pointer rounded-3">
          <Image src="/world.png" width={336} height={168} alt="world" />
          <h3 className="text-base leading-5 text-slate-950 p-2 font-semibold text-center mb-2">
            {t("labels.description", SCOPE_OPTIONS)}
          </h3>
        </div>
        <div className="flex justify-center mb-5">
          <button className="text-sm leading-5 text-blue-800 hover:underline font-medium w-full">
            {t("actions.newTip", SCOPE_OPTIONS)}
          </button>
        </div>
        <div className="border-b border-gray-350"></div>
        <div className="flex flex-wrap py-2 gap-1 max-w-336 justify-center px-9">
          <div className="text-sm leading-5 text-slate-900 hover:text-slate-950 py-1.5 px-2 hover:bg-gray-350 rounded-3 cursor-pointer transition-all duration-100">
            {t("actions.pricing", SCOPE_OPTIONS)}
          </div>
          <div className="text-sm leading-5 text-slate-900 hover:text-slate-950 py-1.5 px-2 hover:bg-gray-350 rounded-3 cursor-pointer transition-all duration-100">
            {t("actions.apps", SCOPE_OPTIONS)}
          </div>
          <div className="text-sm leading-5 text-slate-900 hover:text-slate-950 py-1.5 px-2 hover:bg-gray-350 rounded-3 cursor-pointer transition-all duration-100">
            {t("actions.blog", SCOPE_OPTIONS)}
          </div>
          <div className="text-sm leading-5 text-slate-900 hover:text-slate-950 py-1.5 px-2 hover:bg-gray-350 rounded-3 cursor-pointer transition-all duration-100">
            {t("actions.privacy", SCOPE_OPTIONS)}
          </div>
          <div className="text-sm leading-5 text-slate-900 hover:text-slate-950 py-1.5 px-2 hover:bg-gray-350 rounded-3 cursor-pointer transition-all duration-100">
            {t("actions.notice", SCOPE_OPTIONS)}
          </div>
          <div className="text-sm leading-5 text-slate-900 hover:text-slate-950 py-1.5 px-2 hover:bg-gray-350 rounded-3 cursor-pointer transition-all duration-100">
            {t("actions.more", SCOPE_OPTIONS)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDropdown;
