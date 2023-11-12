import React from "react";
import Image from "next/image";

import { useLocale } from "@app/hooks";
import { Icons } from "@app/components";

type RecentDropdownPropTypes = {};

const RecentDropdown: React.FC<RecentDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.RecentDropdown",
  };

  const { t } = useLocale();

  return (
    <ul className="p-3">
      <li className="my-1">
        <div className="group/item flex justify-between p-1 border-transparent rounded-8 hover:bg-gray-550 text-black cursor-pointer">
          <div className="flex flex-row gap-2">
            <Image
              src="/board.jpg"
              width={55}
              height={32}
              alt="board"
              className="border-transparent rounded-4 object-scale-down"
            />
            <div className="flex flex-col">
              <div className="text-14 leading-4 text-blue-300 font-medium">
                invoicing-app
              </div>
              <div className="text-12 left-4 text-slate-500">
                {t("labels.travel", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mr-2 invisible group-hover/item:visible">
            <Icons.SvgStar className="flex justify-end text-slate-400 hover:text-yellow-100" />
          </div>
        </div>
      </li>
      <li className="my-1">
        <div className="group/item flex justify-between p-1 border-transparent rounded-8 hover:bg-gray-550 text-black cursor-pointer">
          <div className="flex flex-row gap-2">
            <Image
              src="/pink-background.jpg"
              width={55}
              height={32}
              alt="board"
              className="border-transparent rounded-4 object-scale-down"
            />
            <div className="flex flex-row">
              <div className="flex items-center text-14 leading-4 text-blue-300 font-medium">
                {t("labels.project", SCOPE_OPTIONS)}
              </div>
              <div className="flex items-center mr-3">
                <button className="px-2 py-1 border-transparent rounded-4 bg-blue-500 text-blue-300 font-medium text-11 leading-4 w-fit h-fit">
                  {t("actions.template", SCOPE_OPTIONS)}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mr-2">
            <Icons.SvgStar className="hidden group-hover/item:block text-end text-slate-400 hover:text-yellow-100" />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default RecentDropdown;
