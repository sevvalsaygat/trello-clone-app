import React from "react";

import { useLocale } from "@app/hooks";

type WorkspacesDropdownPropTypes = {};

const WorkspacesDropdown: React.FC<WorkspacesDropdownPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.WorkspacesDropdown",
  };

  const { t } = useLocale();

  return (
    <React.Fragment>
      <div className="border-b border-gray-450">
        <div>
          <h1 className="mx-5 mt-4 mb-2 text-12 leading-4 text-slate-100 font-semibold">
            {t("labels.currentWorkspaces", SCOPE_OPTIONS)}
          </h1>
          <div className="flex flex-row pb-5 pt-1 gap-3 mx-5">
            <div className="flex justify-center items-center w-10 h-10 border-transparent rounded-4 font-bold text-white text-20 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
              T
            </div>
            <div className="flex items-center text-blue-300 text-14 leading-5 font-semibold">
              Travel Workspace
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mx-5 mt-4 mb-2 text-12 leading-4 text-slate-100 font-semibold">
          {t("labels.yourWorkspaces", SCOPE_OPTIONS)}
        </h1>
        <div className="border-transparent rounded-4 hover:bg-gray-550 m-3 cursor-pointer transition-all duration-100">
          <div className="flex flex-row p-2 gap-3  mb-1">
            <div className="flex justify-center items-center w-10 h-10 border-transparent rounded-4 font-bold text-white text-20 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
              T
            </div>
            <div className="flex items-center text-blue-300 text-14 leading-5 font-semibold">
              Travel Workspace
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkspacesDropdown;
