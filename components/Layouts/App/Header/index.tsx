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
    <div className="flex flex-row items-center justify-between bg-white text-white px-2 py-7 border-b border-zinc-400">
      <div className="flex flex-row items-center">
        <div className="flex flex-row gap-1">
          <button
            className="p-1.5 w-fit hover:bg-gray-350 rounded-3 transition-all duration-100"
            data-tooltip-id={TOOLTIPS.presentation}
            data-tooltip-content="More from atlassian"
            data-tooltip-delay-show={300}
          >
            <ReactTooltip id={TOOLTIPS.presentation} style={tooltipStyles} />
            <Icons.SvgPresentation className="text-gray-850" />
          </button>
          <div className="hover:bg-gray-350 rounded-3 transition-all duration-100 leading-8 p-2 cursor-pointer mr-1">
            <Image
              src="/trello.gif"
              width={75}
              height={32}
              alt="trello"
              className="bg-slate-800"
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
                content: t("tooltips.workspaces", SCOPE_OPTIONS),
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
                content: t("tooltips.recent", SCOPE_OPTIONS),
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
                content: t("tooltips.starred", SCOPE_OPTIONS),
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
                content: t("tooltips.templates", SCOPE_OPTIONS),
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
          data-tooltip-content={t("tooltips.search", SCOPE_OPTIONS)}
          data-tooltip-delay-show={100}
        >
          <ReactTooltip id={TOOLTIPS.search} style={tooltipStyles} />
          <FormProvider {...useFormMethods}>
            <Form.Input
              name="search"
              placeholder={t("form.search.placeholder", SCOPE_OPTIONS)}
              className="search-input"
            />
            <Icons.SvgSearch className="ml-1.5 text-slate-850 absolute" />
          </FormProvider>
        </div>
        <div className="z-10">
          <Dropdown
            items={[
              {
                component: () => <NotificationDropdown />,
              },
            ]}
            icon={() => <Icons.SvgNotification className="text-slate-900" />}
            className="p-1 hover:bg-gray-350 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="dropdown-shadow flex border rounded-md max-h-887 w-max absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: TOOLTIPS.notification,
              content: t("tooltips.notifications", SCOPE_OPTIONS),
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
            icon={() => <Icons.SvgInformation className="text-slate-900" />}
            className="p-1 hover:bg-gray-350 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="dropdown-shadow flex border rounded-md max-h-887 w-max absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: TOOLTIPS.information,
              content: t("tooltips.information", SCOPE_OPTIONS),
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
            className="p-1 hover:bg-gray-350 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="dropdown-shadow flex border rounded-md max-h-887 w-max absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: TOOLTIPS.account,
              content: t("tooltips.account", SCOPE_OPTIONS),
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
