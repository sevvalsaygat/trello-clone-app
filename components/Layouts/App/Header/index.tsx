import React from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { useLocale } from "@app/hooks";
import { Icons, Form } from "@app/componets";

type HeaderPropTypes = {
  search?: string;
};

const Header: React.FC<HeaderPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.Auth.Footer",
  };

  const { t } = useLocale();
  const useFormMethods = useForm<HeaderPropTypes>();

  return (
    <div className="flex flex-row items-center justify-between bg-white text-white px-2 py-7 border-b border-gray-450">
      <div className="flex flex-row items-center">
        <div className="flex flex-row gap-1">
          <button className="p-6 w-fit hover:bg-blue-500 rounded-3 transition-all duration-100">
            <Icons.SvgPresentation className="text-slate-400" />
          </button>
          <div className="hover:bg-blue-500 rounded-3 transition-all duration-100 leading-8 p-2 cursor-pointer mr-1">
            <Image
              src="/trello.gif"
              width={75}
              height={32}
              alt="trello"
              className="bg-gray-250"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <div
            className="flex flex-row items-center hover:bg-blue-500 rounded-3 transition-all duration-100 leading-8 px-3 cursor-pointer"
            data-tooltip-id="workspaces-tooltip"
            data-tooltip-content="workspaces"
            data-tooltip-delay-show={500}
          >
            <ReactTooltip id="workspaces-tooltip" />
            <button className="text-14 text-slate-400 font-medium">
              Workspaces
            </button>
            <Icons.SvgArrowDown className="text-slate-400 ml-1 font-medium" />
          </div>
          <div
            className="flex flex-row items-center hover:bg-blue-500 rounded-3 transition-all duration-100 leading-8 px-3 cursor-pointer"
            data-tooltip-id="recent-tooltip"
            data-tooltip-content="recent"
            data-tooltip-delay-show={500}
          >
            <ReactTooltip id="recent-tooltip" />
            <button className="text-14 text-slate-400 font-medium">
              Recent
            </button>
            <Icons.SvgArrowDown className="text-slate-400 ml-1 font-medium" />
          </div>
          <div
            className="flex flex-row items-center hover:bg-blue-500 rounded-3 transition-all duration-100 leading-8 px-3 cursor-pointer"
            data-tooltip-id="starred-tooltip"
            data-tooltip-content="starred"
            data-tooltip-delay-show={500}
          >
            <ReactTooltip id="starred-tooltip" />
            <button className="text-14 text-slate-400 font-medium">
              Starred
            </button>
            <Icons.SvgArrowDown className="text-slate-400 ml-1 font-medium" />
          </div>
          <div
            className="flex flex-row items-center hover:bg-blue-500 rounded-3 transition-all duration-100 leading-8 px-3 cursor-pointer"
            data-tooltip-id="templates-tooltip"
            data-tooltip-content="templates"
            data-tooltip-delay-show={500}
          >
            <ReactTooltip id="templates-tooltip" />
            <button className="text-14 text-slate-400 font-medium">
              Templates
            </button>
            <Icons.SvgArrowDown className="text-slate-400 ml-1 font-medium" />
          </div>
          <div className="mx-2">
            <button className="bg-blue-400 hover:bg-blue-450 text-white leading-8 px-3 text-14 rounded-3 font-medium transition-all duration-100">
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row items-center">
          <FormProvider {...useFormMethods}>
            <Form.Input
              name="search"
              placeholder="Search"
              className="pl-8 pr-3 leading-8 max-w-200 w-full bg-white border border-gray-450 rounded-5 text-14 focus:outline-none placeholder-slate-450 hover:bg-gray-350 transition-all duration-100"
            />
            <Icons.SvgSearch className="ml-6 text-slate-500 absolute" />
          </FormProvider>
        </div>
        <div
          className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
          data-tooltip-id="notifications-tooltip"
          data-tooltip-content="Notifications"
          data-tooltip-delay-show={100}
        >
          <ReactTooltip id="notifications-tooltip" />
          <Icons.SvgNotification className="text-slate-100" />
        </div>
        <div
          className="p-6 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
          data-tooltip-id="information-tooltip"
          data-tooltip-content="Information"
          data-tooltip-delay-show={100}
        >
          <ReactTooltip id="information-tooltip" />
          <Icons.SvgInformation className="text-slate-100" />
        </div>
        <div
          className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
          data-tooltip-id="account-tooltip"
          data-tooltip-content="Account"
          data-tooltip-delay-show={100}
        >
          <ReactTooltip id="account-tooltip" />
          <Image src="/account.png" width={24} height={24} alt="account" />
        </div>
      </div>
    </div>
  );
};

export default Header;
