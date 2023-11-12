import React from "react";

import { LanguageSelect, Icons } from "@app/components";
import { useLocale } from "@app/hooks";

type FooterPropTypes = {};

const Footer: React.FC<FooterPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.Auth.Footer",
  };

  const { t } = useLocale();

  return (
    <div className="container flex flex-col items-center justify-center mb-6">
      <LanguageSelect />
      <hr className="my-9 border-gray-300 border-t w-full" />
      <div className="container w-150 mb-5">
        <Icons.SvgAtlassian />
      </div>
      <ul className="flex container items-center justify-center mt-7 text-14 leading-5 text-gray-250 font-light mx-auto">
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          {t("labels.templates", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          {t("labels.pricing", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          {t("labels.apps", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          {t("labels.jobs", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          {t("labels.blog", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 flex-grow cursor-pointer hover:underline">
          {t("labels.developers", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 cursor-pointer hover:underline">
          {t("labels.about", SCOPE_OPTIONS)}
        </li>
        <li className="mx-2 cursor-pointer hover:underline">
          {t("labels.help", SCOPE_OPTIONS)}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
