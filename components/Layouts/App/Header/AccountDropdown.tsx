import React from "react";
import Image from "next/image";

import { useLocale } from "@app/hooks";
import { Icons } from "@app/components";

type AccountDropdownPropTypes = {};

const AccountDropdown: React.FC<AccountDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.AccountDropdown",
  };

  const { t } = useLocale();

  return (
    <div className="flex flex-col">
      <h2 className="text-11 leading-4 text-slate-500 px-5 mt-4 mb-2 font-semibold">
        {t("labels.title", SCOPE_OPTIONS)}
      </h2>
      <div>
        <div className="flex flex-row px-5 py-2">
          <Image
            src="/account.png"
            width={40}
            height={40}
            alt="account"
            className="mr-2"
          />
          <div className="flex flex-col">
            <div className="text-blue-300 text-14 leading-5">Şevval Saygat</div>
            <div className="text-slate-100 text-12 leading-4">
              sevvallsstt@gmail.com
            </div>
          </div>
        </div>
        <div className="border-b border-blue-500">
          <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
            {t("actions.switchAccount", SCOPE_OPTIONS)}
          </div>
          <div className="flex flex-row items-center px-5 py-2 justify-between hover:bg-gray-550 mb-2 cursor-pointer">
            <div className="text-blue-300 text-14 leading-5">
              {t("actions.manageAccount", SCOPE_OPTIONS)}
            </div>
            <Icons.SvgDirect className="text-blue-300" />
          </div>
        </div>
      </div>
      <h2 className="text-slate-500 text-11 leading-4 font-semibold px-5 mt-4 mb-2">
        {t("labels.trello", SCOPE_OPTIONS)}
      </h2>
      <div className="border-b border-blue-500">
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.profileVisibility", SCOPE_OPTIONS)}
        </div>
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.activity", SCOPE_OPTIONS)}
        </div>
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.cards", SCOPE_OPTIONS)}
        </div>
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.settings", SCOPE_OPTIONS)}
        </div>
        <div className="flex flex-row items-center px-5 py-2 justify-between hover:bg-gray-550 mb-2 cursor-pointer">
          <div className="text-blue-300 text-14 leading-5">
            {t("actions.theme", SCOPE_OPTIONS)}
          </div>
          <Icons.SvgArrowRight className="text-blue-300" />
        </div>
      </div>
      <div className="border-b border-blue-500 py-2">
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.help", SCOPE_OPTIONS)}
        </div>
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.shortcuts", SCOPE_OPTIONS)}
        </div>
      </div>
      <div className="py-2">
        <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
          {t("actions.logout", SCOPE_OPTIONS)}
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
