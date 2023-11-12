import React, { useState } from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { COLORS } from "@app/constants";
import { useLocale } from "@app/hooks";
import { Icons, Form, Dropdown, Button } from "@app/components";

import WorkspacesDropdown from "./WorkspacesDropdown";
import RecentDropdown from "./RecentDropdown";
import StarredDropdown from "./StarredDropdown";
import TemplatesDropdown from "./TemplatesDropdown";
import AccountDropdown from "./AccountDropdown";
import InformationDropdown from "./InformationDropdown";
import NotificationDropdown from "./NotificationDropdown";

type HeaderPropTypes = {
  search?: string;
};

const TOOLTIPS = {
  presentation: "presentation-tooltip",
  workspaces: "workspaces-tooltip",
  recent: "recent-tooltip",
  starred: "starred-tooltip",
  templates: "templates-tooltip",
  search: "search-tooltip",
  notification: "notifications-tooltip",
  information: "information-tooltip",
  account: "account-tooltip",
};

const Header: React.FC<HeaderPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header.index",
  };

  const { t } = useLocale();
  const useFormMethods = useForm<HeaderPropTypes>();

  const tooltipStyles = {
    backgroundColor: COLORS.gray[800],
    color: "white",
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    fontSize: "12px",
  };

  return (
    <div className="flex flex-row items-center justify-between bg-white text-white px-2 py-7 border-b border-gray-450">
      <div className="flex flex-row items-center">
        <div className="flex flex-row gap-1">
          <button
            className="p-6 w-fit hover:bg-blue-500 rounded-3 transition-all duration-100"
            data-tooltip-id={TOOLTIPS.presentation}
            data-tooltip-content="More from atlassian"
            data-tooltip-delay-show={300}
          >
            <ReactTooltip id={TOOLTIPS.presentation} style={tooltipStyles} />
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
          <div className="z-10">
            <Dropdown
              items={[
                {
                  component: () => <WorkspacesDropdown />,
                },
              ]}
              title={t("labels.workspaces", SCOPE_OPTIONS)}
              tooltip={{
                id: TOOLTIPS.workspaces,
                content: "Workspaces",
                delay: 500,
                style: {
                  ...tooltipStyles,
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="z-10">
            <Dropdown
              items={[
                {
                  component: () => <RecentDropdown />,
                },
              ]}
              title={t("labels.recent", SCOPE_OPTIONS)}
              tooltip={{
                id: TOOLTIPS.recent,
                content: "Recent",
                delay: 500,
                style: {
                  ...tooltipStyles,
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="z-10">
            <Dropdown
              items={[
                {
                  component: () => <StarredDropdown />,
                },
              ]}
              title={t("labels.starred", SCOPE_OPTIONS)}
              tooltip={{
                id: TOOLTIPS.starred,
                content: "Starred",
                delay: 500,
                style: {
                  ...tooltipStyles,
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="z-10">
            <Dropdown
              items={[
                {
                  component: () => <TemplatesDropdown />,
                },
              ]}
              title={t("labels.templates", SCOPE_OPTIONS)}
              tooltip={{
                id: TOOLTIPS.templates,
                content: "Templates",
                delay: 500,
                style: {
                  ...tooltipStyles,
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="mx-2">
            <Button
              onClick={() => {}}
              variant="info"
              title={t("actions.create", SCOPE_OPTIONS)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div
          className="flex flex-row items-center"
          data-tooltip-id={TOOLTIPS.search}
          data-tooltip-content="Search/"
          data-tooltip-delay-show={100}
        >
          <ReactTooltip id={TOOLTIPS.search} style={tooltipStyles} />
          <FormProvider {...useFormMethods}>
            <Form.Input
              name="search"
              placeholder={t("form.search.placeholder", SCOPE_OPTIONS)}
              className="search-input"
            />
            <Icons.SvgSearch className="ml-6 text-slate-500 absolute" />
          </FormProvider>
        </div>
        <div className="z-10">
          <Dropdown
            items={[
              {
                component: () => <NotificationDropdown />,
              },
            ]}
            icon={() => <Icons.SvgNotification className="text-slate-100" />}
            className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="flex border rounded-md max-h-887 w-max shadow-4xl absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: TOOLTIPS.notification,
              content: "Notifications",
              delay: 100,
              style: {
                ...tooltipStyles,
                zIndex: "1",
              },
            }}
          />
        </div>
        <div className="z-10">
          <Dropdown
            items={[
              {
                component: () => <InformationDropdown />,
              },
            ]}
            icon={() => <Icons.SvgInformation className="text-slate-100" />}
            className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="flex border rounded-md max-h-887 w-max shadow-4xl absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: TOOLTIPS.information,
              content: "Information",
              delay: 100,
              style: {
                ...tooltipStyles,
                zIndex: "1",
              },
            }}
          />
        </div>
        <div className="z-10">
          <Dropdown
            items={[
              {
                component: () => <AccountDropdown />,
              },
            ]}
            icon={() => (
              <Image src="/account.png" width={24} height={24} alt="account" />
            )}
            className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="flex border rounded-md max-h-887 w-max shadow-4xl absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: TOOLTIPS.account,
              content: "Account",
              delay: 500,
              style: {
                ...tooltipStyles,
                zIndex: "1",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
