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
    <div className="mt-5 mx-3 pb-5 w-[432px] mb-24">
      <div className="flex flex-row items-center justify-between mb-5">
        <div className="text-20 text-blue-300 leading-6 font-semibold">
          {t("labels.title", SCOPE_OPTIONS)}
        </div>
        <div className="flex flex-row items-center">
          <div className="text-slate-500 leading-4 text-12 mr-2">
            {t("labels.switch", SCOPE_OPTIONS)}
          </div>
          <Switch
            checked={switchEnabled}
            onChange={setSwitchEnabled}
            className={cn(
              "relative inline-flex h-5 w-10 items-center rounded-full",
              {
                "bg-green-150": switchEnabled,
                "bg-slate-100": !switchEnabled,
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
          <button className="p-6 hover:bg-blue-500 rounded-3 ml-2">
            <Icons.SvgDots className="text-blue-300" />
          </button>
        </div>
      </div>
      <div className="border-b border-blue-500"></div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center py-11">
          <Icons.SvgDog />
        </div>
        <div className="flex items-center justify-center text-20 leading-6 text-blue-300">
          {t("labels.noNotifications", SCOPE_OPTIONS)}
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
