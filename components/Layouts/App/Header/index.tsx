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
    scope: "components.Layouts.Auth.Footer",
  };

  const { t } = useLocale();
  const [enabled, setEnabled] = useState(false);
  const useFormMethods = useForm<HeaderPropTypes>();

  const [topTemplatesIsActive, setTopTemplatesIsActive] = useState(true);

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
                Current Workspace
              </h1>
              <div className="flex flex-row pb-5 pt-1 gap-3 mx-5">
                <div className="flex justify-center items-center w-10 h-10 border-transparent rounded-4 font-bold text-white text-20 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                  T
                </div>
                <div className="flex items-center text-blue-300 text-14 leading-5 font-semibold">
                  Trello Workspace
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mx-5 mt-4 mb-2 text-12 leading-4 text-slate-100 font-semibold">
              Your Workspace
            </h1>
            <div className="border-transparent rounded-4 hover:bg-gray-550 m-3 cursor-pointer transition-all duration-100">
              <div className="flex flex-row p-2 gap-3  mb-1">
                <div className="flex justify-center items-center w-10 h-10 border-transparent rounded-4 font-bold text-white text-20 bg-gradient-to-t from-blue-550 from-10% via-purple-150 via-70% to-purple-100 to-90%">
                  T
                </div>
                <div className="flex items-center text-blue-300 text-14 leading-5 font-semibold">
                  Trello Workspace
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
                      Travel Workspaces
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
                      Project Management
                    </div>
                    <div className="flex items-center mr-3">
                      <div className="px-2 py-1 border-transparent rounded-4 bg-blue-500 text-blue-300 font-medium text-11 leading-4 w-fit h-fit">
                        Template
                      </div>
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
            Star important boards to access them quickly and easily.
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
                Top Templates
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
                      1-on-1 Meeting Agenda
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
                      Agile Board Template | Trello
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
                      Company Overview
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
                      Design Huddle
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
                      Go To Market Strategy Template
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
                      Kanban Template
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
                      Mise-En-Place Personal Productivity System
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
                      Project Management
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
                      Remote Team Meetings
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
                      Simple Project Board
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
                      Simple Project Board
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
              See hundreds of templates from the Trello community
            </div>
          </div>
          <div className="flex justify-center items-center mx-3 mb-3 border-transparent rounded-3 bg-gray-550 hover:bg-blue-500">
            <button className="text-14 leading-5 text-slate-100 px-3 py-6">
              Explore Templates
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
            ACCOUNT
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
                Switch accounts
              </div>
              <div className="flex flex-row items-center px-5 py-2 justify-between hover:bg-gray-550 mb-2 cursor-pointer">
                <div className="text-blue-300 text-14 leading-5">
                  Manage account
                </div>
                <Icons.SvgDirect className="text-blue-300" />
              </div>
            </div>
          </div>
          <h2 className="text-slate-500 text-11 leading-4 font-semibold px-5 mt-4 mb-2">
            TRELLO
          </h2>
          <div className="border-b border-blue-500">
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Profile and visibility
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Activity
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Cards
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Settings
            </div>
            <div className="flex flex-row items-center px-5 py-2 justify-between hover:bg-gray-550 mb-2 cursor-pointer">
              <div className="text-blue-300 text-14 leading-5">Theme</div>
              <Icons.SvgArrowRight className="text-blue-300" />
            </div>
          </div>
          <div className="border-b border-blue-500 py-2">
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Help
            </div>
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Shortcuts
            </div>
          </div>
          <div className="py-2">
            <div className="text-blue-300 text-14 leading-5 px-5 py-2 cursor-pointer hover:bg-gray-550">
              Log out
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
                Make boards more powerful with Trello Power-Ups
              </h3>
            </div>
            <div className="flex justify-center mb-5">
              <button className="text-14 leading-5 text-blue-400 hover:underline font-medium w-full">
                Get a new tip.
              </button>
            </div>
            <div className="border-b border-blue-500"></div>
            <div className="flex flex-wrap py-2 gap-1 max-w-336 justify-center px-9">
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                Pricing
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                Apps
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                Blog
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                Privacy
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                Notice at Collection
              </div>
              <div className="text-14 leading-5 text-slate-100 hover:text-blue-300 py-6 px-2 hover:bg-blue-500 rounded-3 cursor-pointer transition-all duration-100">
                More...
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
              Notifications
            </div>
            <div className="flex flex-row items-center">
              <div className="text-slate-500 leading-4 text-12 mr-2">
                Only show unread
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
              No unread notifications
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
              title="Workspaces"
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
              title="Recent"
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
              title="Starred"
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
              title="Templates"
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
            <Button onClick={() => {}} variant="info" title="Create" />
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
              placeholder="Search"
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
