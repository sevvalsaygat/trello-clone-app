import React from "react";

import { Icons } from "@app/components";
import { useLocale } from "@app/hooks";

type StarredDropdownPropTypes = {};

const StarredDropdown: React.FC<StarredDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.StarredDropdown",
  };

  const { t } = useLocale();

  return (
    <div className="p-3">
      <Icons.SvgStarBackground />
      <p className="mb-2 mt-3 text-slate-900 text-14 text-center">
        {t("labels.description", SCOPE_OPTIONS)}
      </p>
    </div>
  );
};

export default StarredDropdown;
