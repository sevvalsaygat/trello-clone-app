import React, { useState } from "react";
import Image from "next/image";

import { useLocale } from "@app/hooks";
import { Icons } from "@app/components";

type TemplatesDropdownPropTypes = {};

const TemplatesDropdown: React.FC<TemplatesDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.TemplatesDropdown",
  };

  const { t } = useLocale();
  const [topTemplatesIsActive, setTopTemplatesIsActive] = useState(true);

  const topTemplatesToggle = () => {
    setTopTemplatesIsActive(!topTemplatesIsActive);
  };

  const topTemplatesItems = [
    "meet",
    "agile",
    "company",
    "design",
    "balloon",
    "kanban",
    "typewriter",
    "pink",
    "cloudy",
    "leaf",
    "orange",
  ];

  return (
    <React.Fragment>
      <div className="px-3 pt-3">
        <button className="flex flex-row justify-between items-center w-full mb-2">
          <div className="text-slate-100 text-12 leading-4 font-semibold">
            {t("labels.title", SCOPE_OPTIONS)}
          </div>
          <div onClick={topTemplatesToggle} className="flex relative">
            {topTemplatesIsActive ? (
              <button className="hover:bg-blue-500 p-[2px] rounded-3">
                <Icons.SvgArrowUp className="text-slate-100 h-4 w-4" />
              </button>
            ) : (
              <button className="hover:bg-blue-500 p-[2px] rounded-3">
                <Icons.SvgArrowDown className="text-slate-100 h-4 w-4" />
              </button>
            )}
          </div>
        </button>
        {topTemplatesIsActive && (
          <div className="mt-3">
            {topTemplatesItems.map((item, index) => (
              <button
                key={index}
                className="hover:bg-gray-550 w-full rounded-8 mb-1"
              >
                <div className="p-1 gap-3 flex flex-row">
                  <div>
                    <Image
                      src={`/${item}.jpg`}
                      width={45}
                      height={32}
                      alt={item}
                      className="border-transparent rounded-4 w-45 h-8"
                    />
                  </div>
                  <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                    {t(`labels.topTemplatesItems.${item}`, SCOPE_OPTIONS)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-blue-500 shadow-5xl w-full"></div>
      <div className="p-3 flex flex-row">
        <div className="flex px-3 py-1 items-center">
          <Icons.SvgTemplate className="text-blue-400" />
        </div>
        <div className="text-slate-100 text-14 leading-5">
          {t("labels.description", SCOPE_OPTIONS)}
        </div>
      </div>
      <div className="flex justify-center items-center mx-3 mb-3 border-transparent rounded-3 bg-gray-550 hover:bg-blue-500">
        <button className="text-14 leading-5 text-slate-100 px-3 py-6">
          {t("actions.explore", SCOPE_OPTIONS)}
        </button>
      </div>
    </React.Fragment>
  );
};

export default TemplatesDropdown;
