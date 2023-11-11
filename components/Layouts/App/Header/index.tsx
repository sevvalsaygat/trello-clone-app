import React, { useState } from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Switch } from "@headlessui/react";

import { useLocale } from "@app/hooks";
import { Icons, Form, Dropdown, Button } from "@app/componets";

type HeaderPropTypes = {
  search?: string;
};

const Header: React.FC<HeaderPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.App.Header",
  };

  const { t } = useLocale();
  const [enabled, setEnabled] = useState(false);
  const [topTemplatesIsActive, setTopTemplatesIsActive] = useState(true);
  const useFormMethods = useForm<HeaderPropTypes>();

  const topTemplatesToggle = () => {
    setTopTemplatesIsActive(!topTemplatesIsActive);
  };

  const workspacesItems: DropdownItemType[] = [
    {
      component: () => (
        <div>
          <div className="border-b border-gray-450">
            <div>
              <h1 className="mx-5 mt-4 mb-2 text-12 leading-4 text-slate-100 font-semibold">
                {t("labels.items.workspaces.current", SCOPE_OPTIONS)}
              </h1>
              <div className="flex flex-row pb-5 pt-1 gap-3 mx-5">
                <div className="flex justify-center items-center w-10 h-10 border-transparent rounded-4 font-bold text-white text-20 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                  T
                </div>
                <div className="flex items-center text-blue-300 text-14 leading-5 font-semibold">
                  {t("labels.items.workspaces.trello", SCOPE_OPTIONS)}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mx-5 mt-4 mb-2 text-12 leading-4 text-slate-100 font-semibold">
              {t("labels.items.workspaces.your", SCOPE_OPTIONS)}
            </h1>
            <div className="border-transparent rounded-4 hover:bg-gray-550 m-3 cursor-pointer transition-all duration-100">
              <div className="flex flex-row p-2 gap-3  mb-1">
                <div className="flex justify-center items-center w-10 h-10 border-transparent rounded-4 font-bold text-white text-20 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                  T
                </div>
                <div className="flex items-center text-blue-300 text-14 leading-5 font-semibold">
                  {t("labels.items.workspaces.trello", SCOPE_OPTIONS)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const recentItems: DropdownItemType[] = [
    {
      component: () => (
        <div className="p-3">
          <ul>
            <li className="my-1">
              <div className="group/item flex justify-between p-1 border-transparent rounded-8 hover:bg-gray-550 text-black cursor-pointer">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/board.jpg"
                    width={55}
                    height={32}
                    alt="board"
                    className="border-transparent rounded-4 object-scale-down"
                  />
                  <div className="flex flex-col">
                    <div className="text-14 leading-4 text-blue-300 font-medium">
                      invoicing-app
                    </div>
                    <div className="text-12 left-4 text-slate-500">
                      {t("labels.items.recent.travel", SCOPE_OPTIONS)}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mr-2 invisible group-hover/item:visible">
                  <Icons.SvgStar className="flex justify-end text-slate-400 hover:text-yellow-100" />
                </div>
              </div>
            </li>
            <li className="my-1">
              <div className="group/item flex justify-between p-1 border-transparent rounded-8 hover:bg-gray-550 text-black cursor-pointer">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/pink-background.jpg"
                    width={55}
                    height={32}
                    alt="board"
                    className="border-transparent rounded-4 object-scale-down"
                  />
                  <div className="flex flex-row">
                    <div className="flex items-center text-14 leading-4 text-blue-300 font-medium">
                      {t("labels.items.recent.project", SCOPE_OPTIONS)}
                    </div>
                    <div className="flex items-center mr-3">
                      <button className="px-2 py-1 border-transparent rounded-4 bg-blue-500 text-blue-300 font-medium text-11 leading-4 w-fit h-fit">
                        {t(
                          "labels.items.recent.button.template",
                          SCOPE_OPTIONS
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mr-2">
                  <Icons.SvgStar className="hidden group-hover/item:block text-end text-slate-400 hover:text-yellow-100" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const starredItems: DropdownItemType[] = [
    {
      component: () => (
        <div className="p-3">
          <Icons.SvgStarBackground />
          <p className="mb-2 mt-3 text-slate-100 text-14 text-center">
            {t("labels.items.starred.comment", SCOPE_OPTIONS)}
          </p>
        </div>
      ),
    },
  ];

  const templatesItems: DropdownItemType[] = [
    {
      component: () => (
        <div>
          <div className="px-3 pt-3">
            <button className="flex flex-row justify-between items-center w-full mb-2">
              <div className="text-slate-100 text-12 leading-4 font-semibold">
                {t("labels.items.templates.title", SCOPE_OPTIONS)}
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
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/meet.jpg"
                        width={45}
                        height={32}
                        alt="meet"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.meet",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div className="">
                      <Image
                        src="/agile.jpg"
                        width={45}
                        height={32}
                        alt="agile"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.agile",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/company.jpg"
                        width={45}
                        height={32}
                        alt="company"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.company",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/design.jpg"
                        width={45}
                        height={32}
                        alt="design"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.design",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/balloon.jpg"
                        width={45}
                        height={32}
                        alt="balloon"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.balloon",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/kanban.jpg"
                        width={45}
                        height={32}
                        alt="kanban"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.kanban",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/typewriter.jpg"
                        width={45}
                        height={32}
                        alt="typewriter"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.typewriter",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/pink-background.jpg"
                        width={50}
                        height={32}
                        alt="pink-background"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.pink",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/cloudy.jpg"
                        width={50}
                        height={32}
                        alt="cloudy"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.cloudy",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/leaf.jpg"
                        width={50}
                        height={32}
                        alt="leaf"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.leaf",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-550 w-full rounded-8 mb-1">
                  <div className="p-1 gap-3 flex flex-row">
                    <div>
                      <Image
                        src="/orange.png"
                        width={55}
                        height={32}
                        alt="orange"
                        className="border-transparent rounded-4 w-45 h-8"
                      />
                    </div>
                    <div className="flex text-14 leading-4 text-blue-300 items-center font-medium truncate">
                      {t(
                        "labels.items.templates.buttons.title.orange",
                        SCOPE_OPTIONS
                      )}
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
          <div className="border-t border-blue-500 shadow-5xl w-full"></div>
          <div className="p-3 flex flex-row">
            <div className="flex px-3 py-1 items-center">
              <Icons.SvgTemplate className="text-blue-400" />
            </div>
            <div className="text-slate-100 text-14 leading-5">
              {t("labels.items.templates.comment.trello", SCOPE_OPTIONS)}
            </div>
          </div>
          <div className="flex justify-center items-center mx-3 mb-3 border-transparent rounded-3 bg-gray-550 hover:bg-blue-500">
            <button className="text-14 leading-5 text-slate-100 px-3 py-6">
              {t("labels.items.templates.buttons.explore", SCOPE_OPTIONS)}
            </button>
          </div>
        </div>
      ),
    },
  ];

  const accountItems: DropdownItemType[] = [
    {
      component: () => (
        <div className="flex flex-col">
          <h2 className="text-11 leading-4 text-slate-500 px-5 mt-4 mb-2 font-semibold">
            {t("labels.items.account.title.account", SCOPE_OPTIONS)}
          </h2>
          <div>
            <div className="flex flex-row px-5 py-2">
              <Image
                src="/account.png"
                width={40}
                height={40}
                alt="account"
                className="mr-2"
              />
              <div className="flex flex-col">
                <div className="text-blue-300 text-14 leading-5">
                  Şevval Saygat
                </div>
                <div className="text-slate-100 text-12 leading-4">
                  sevvallsstt@gmail.com
                </div>
              </div>
            </div>
            <div className="border-b border-blue-500">
              <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
                {t(
                  "labels.items.account.userdropdown.items.labels.switchaccount",
                  SCOPE_OPTIONS
                )}
              </div>
              <div className="flex flex-row items-center px-5 py-2 justify-between hover:bg-gray-550 mb-2 cursor-pointer">
                <div className="text-blue-300 text-14 leading-5">
                  {t(
                    "labels.items.account.userdropdown.items.labels.manageaccount",
                    SCOPE_OPTIONS
                  )}
                </div>
                <Icons.SvgDirect className="text-blue-300" />
              </div>
            </div>
          </div>
          <h2 className="text-slate-500 text-11 leading-4 font-semibold px-5 mt-4 mb-2">
            {t("labels.items.account.title.trello", SCOPE_OPTIONS)}
          </h2>
          <div className="border-b border-blue-500">
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.profilevisibility",
                SCOPE_OPTIONS
              )}
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.activity",
                SCOPE_OPTIONS
              )}
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.cards",
                SCOPE_OPTIONS
              )}
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.settings",
                SCOPE_OPTIONS
              )}
            </div>
            <div className="flex flex-row items-center px-5 py-2 justify-between hover:bg-gray-550 mb-2 cursor-pointer">
              <div className="text-blue-300 text-14 leading-5">
                {t(
                  "labels.items.account.userdropdown.items.labels.theme",
                  SCOPE_OPTIONS
                )}
              </div>
              <Icons.SvgArrowRight className="text-blue-300" />
            </div>
          </div>
          <div className="border-b border-blue-500 py-2">
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.help",
                SCOPE_OPTIONS
              )}
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.shortcuts",
                SCOPE_OPTIONS
              )}
            </div>
          </div>
          <div className="py-2">
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              {t(
                "labels.items.account.userdropdown.items.labels.logout",
                SCOPE_OPTIONS
              )}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const ınformationItems: DropdownItemType[] = [
    {
      component: () => (
        <div className="p-3">
          <div className="px-3">
            <div className="flex flex-col max-w-336 hover:bg-gray-550 cursor-pointer rounded-3">
              <Image src="/world.png" width={336} height={168} alt="world" />
              <h3 className="text-16 leading-5 text-blue-300 p-2 font-semibold text-center mb-2">
                {t("labels.items.information.title", SCOPE_OPTIONS)}
              </h3>
            </div>
            <div className="flex justify-center mb-5">
              <button className="text-14 leading-5 text-blue-400 hover:underline font-medium w-full">
                {t("labels.items.information.tip", SCOPE_OPTIONS)}
              </button>
            </div>
            <div className="border-b border-blue-500"></div>
            <div className="flex flex-wrap py-2 gap-1 max-w-336 justify-center px-9">
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                {t("labels.items.information.labels.pricing", SCOPE_OPTIONS)}
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                {t("labels.items.information.labels.apps", SCOPE_OPTIONS)}
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                {t("labels.items.information.labels.blog", SCOPE_OPTIONS)}
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                {t("labels.items.information.labels.privacy", SCOPE_OPTIONS)}
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                {t("labels.items.information.labels.notice", SCOPE_OPTIONS)}
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                {t("labels.items.information.labels.more", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const notificationItems: DropdownItemType[] = [
    {
      component: () => (
        <div className="mt-5 mx-3 pb-5 w-[432px] mb-24">
          <div className="flex flex-row items-center justify-between mb-5">
            <div className="text-20 text-blue-300 leading-6 font-semibold">
              {t("labels.items.notifications.title", SCOPE_OPTIONS)}
            </div>
            <div className="flex flex-row items-center">
              <div className="text-slate-500 leading-4 text-12 mr-2">
                {t("labels.items.notifications.switch", SCOPE_OPTIONS)}
              </div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-green-150" : "bg-slate-100"
                } relative inline-flex h-5 w-10 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-3 w-3 transform rounded-full bg-white transition`}
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
              {t("labels.items.notifications.label", SCOPE_OPTIONS)}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-row items-center justify-between bg-white text-white px-2 py-7 border-b border-gray-450">
      <div className="flex flex-row items-center">
        <div className="flex flex-row gap-1">
          <button
            className="p-6 w-fit hover:bg-blue-500 rounded-3 transition-all duration-100"
            data-tooltip-id="presentation-tooltip"
            data-tooltip-content="More from atlassian"
            data-tooltip-delay-show={300}
          >
            <ReactTooltip
              id="presentation-tooltip"
              style={{
                backgroundColor: "#4b5563",
                color: "white",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                fontSize: "12px",
              }}
            />
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
              items={workspacesItems}
              title={t("labels.title.workspaces", SCOPE_OPTIONS)}
              tooltip={{
                id: "workspaces-tooltip",
                content: "Workspaces",
                delay: 500,
                style: {
                  backgroundColor: "#4b5563",
                  color: "white",
                  paddingLeft: "0.25rem",
                  paddingRight: "0.25rem",
                  fontSize: "12px",
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="z-10">
            <Dropdown
              items={recentItems}
              title={t("labels.title.recent", SCOPE_OPTIONS)}
              tooltip={{
                id: "recent-tooltip",
                content: "Recent",
                delay: 500,
                style: {
                  backgroundColor: "#4b5563",
                  color: "white",
                  paddingLeft: "0.25rem",
                  paddingRight: "0.25rem",
                  fontSize: "12px",
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="z-10">
            <Dropdown
              items={starredItems}
              title={t("labels.title.starred", SCOPE_OPTIONS)}
              tooltip={{
                id: "starred-tooltip",
                content: "Starred",
                delay: 500,
                style: {
                  backgroundColor: "#4b5563",
                  color: "white",
                  paddingLeft: "0.25rem",
                  paddingRight: "0.25rem",
                  fontSize: "12px",
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="z-10">
            <Dropdown
              items={templatesItems}
              title={t("labels.title.templates", SCOPE_OPTIONS)}
              tooltip={{
                id: "templates-tooltip",
                content: "Templates",
                delay: 500,
                style: {
                  backgroundColor: "#4b5563",
                  color: "white",
                  paddingLeft: "0.25rem",
                  paddingRight: "0.25rem",
                  fontSize: "12px",
                  zIndex: "1",
                },
              }}
            />
          </div>
          <div className="mx-2">
            <Button
              onClick={() => {}}
              variant="info"
              title={t("labels.button.title.create", SCOPE_OPTIONS)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div
          className="flex flex-row items-center"
          data-tooltip-id="search-tooltip"
          data-tooltip-content="Search/"
          data-tooltip-delay-show={100}
        >
          <ReactTooltip
            id="search-tooltip"
            style={{
              backgroundColor: "#4b5563",
              color: "white",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              fontSize: "12px",
            }}
          />
          <FormProvider {...useFormMethods}>
            <Form.Input
              name="search"
              placeholder={t("labels.placeholder.search", SCOPE_OPTIONS)}
              className="search-input"
            />
            <Icons.SvgSearch className="ml-6 text-slate-500 absolute" />
          </FormProvider>
        </div>
        <div className="z-10">
          <Dropdown
            items={notificationItems}
            icon={() => <Icons.SvgNotification className="text-slate-100" />}
            className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="flex border rounded-md max-h-887 w-max shadow-4xl absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: "notifications-tooltip",
              content: "Notifications",
              delay: 100,
              style: {
                backgroundColor: "#4b5563",
                color: "white",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                fontSize: "12px",
                zIndex: "1",
              },
            }}
          />
        </div>
        <div className="z-10">
          <Dropdown
            items={ınformationItems}
            icon={() => <Icons.SvgInformation className="text-slate-100" />}
            className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="flex border rounded-md max-h-887 w-max shadow-4xl absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: "information-tooltip",
              content: "Information",
              delay: 100,
              style: {
                backgroundColor: "#4b5563",
                color: "white",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                fontSize: "12px",
                zIndex: "1",
              },
            }}
          />
        </div>
        <div className="z-10">
          <Dropdown
            items={accountItems}
            icon={() => (
              <Image src="/account.png" width={24} height={24} alt="account" />
            )}
            className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
            menuItemsClassName="flex border rounded-md max-h-887 w-max shadow-4xl absolute right-0 bg-white focus:outline-none mt-3"
            tooltip={{
              id: "account-tooltip",
              content: "Account",
              delay: 500,
              style: {
                backgroundColor: "#4b5563",
                color: "white",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                fontSize: "12px",
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
