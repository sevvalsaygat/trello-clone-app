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
        <div className="group/item flex justify-between p-1 border-transparent rounded-lg hover:bg-zinc-300 text-black cursor-pointer">
          <div className="flex flex-row gap-2">
            <Image
              src="/board.jpg"
              width={55}
              height={32}
              alt="board"
              className="border-transparent rounded object-scale-down"
            />
            <div className="flex flex-col">
              <div className="text-sm leading-4 text-slate-950 font-medium">
                invoicing-app
              </div>
              <div className="text-xs left-4 text-slate-850">
                {t("labels.travel", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mr-2 invisible group-hover/item:visible">
            <Icons.SvgStar className="flex justify-end text-gray-850 hover:text-yellow-600" />
          </div>
        </div>
      </li>
      <li className="my-1">
        <div className="group/item flex justify-between p-1 border-transparent rounded-lg hover:bg-zinc-300 text-black cursor-pointer">
          <div className="flex flex-row gap-2">
            <Image
              src="/pink.jpg"
              width={55}
              height={32}
              alt="board"
              className="border-transparent rounded object-scale-down"
            />
            <div className="flex flex-row">
              <div className="flex items-center text-sm leading-4 text-slate-950 font-medium">
                {t("labels.project", SCOPE_OPTIONS)}
              </div>
              <div className="flex items-center mr-3">
                <button className="px-2 py-1 border-transparent rounded bg-gray-350 text-slate-950 font-medium text-xs leading-4 w-fit h-fit">
                  {t("actions.template", SCOPE_OPTIONS)}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mr-2">
            <Icons.SvgStar className="hidden group-hover/item:block text-end text-gray-850 hover:text-yellow-600" />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default RecentDropdown;
