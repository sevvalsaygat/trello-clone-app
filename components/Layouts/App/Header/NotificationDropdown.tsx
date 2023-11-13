import React, { useState } from "react";

import cn from "classnames";
import { Switch } from "@headlessui/react";

import { useLocale } from "@app/hooks";
import { Icons } from "@app/components";

type NotificationDropdownPropTypes = {};

const NotificationDropdown: React.FC<NotificationDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.NotificationDropdown",
  };

  const { t } = useLocale();
  const [switchEnabled, setSwitchEnabled] = useState(false);

  return (
    <div className="mt-5 mx-3 pb-5 w-[432px] mb-6">
      <div className="flex flex-row items-center justify-between mb-5">
        <div className="text-xl text-slate-950 leading-6 font-semibold">
          {t("labels.title", SCOPE_OPTIONS)}
        </div>
        <div className="flex flex-row items-center">
          <div className="text-slate-850 leading-4 text-xs mr-2">
            {t("labels.switch", SCOPE_OPTIONS)}
          </div>
          <Switch
            checked={switchEnabled}
            onChange={setSwitchEnabled}
            className={cn(
              "relative inline-flex h-5 w-10 items-center rounded-full",
              {
                "bg-emerald-900": switchEnabled,
                "bg-slate-900": !switchEnabled,
              }
            )}
          >
            <span
              className={cn(
                "inline-block h-3 w-3 transform rounded-full bg-white transition",
                {
                  "translate-x-6": switchEnabled,
                  "translate-x-1": !switchEnabled,
                }
              )}
            />
          </Switch>
          <button className="p-1.5 hover:bg-gray-350 rounded-3 ml-2">
            <Icons.SvgDots className="text-slate-950" />
          </button>
        </div>
      </div>
      <div className="border-b border-gray-350"></div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center py-11">
          <Icons.SvgDog />
        </div>
        <div className="flex items-center justify-center text-xl leading-6 text-slate-950">
          {t("labels.noNotifications", SCOPE_OPTIONS)}
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
