import React from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";
import { Tooltip as ReactTooltip } from "react-tooltip";

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
  const useFormMethods = useForm<HeaderPropTypes>();

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
              <div className="flex justify-between p-1 border-transparent rounded-8 hover:bg-gray-550 text-black cursor-pointer">
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
                <div className="flex justify-center items-center mr-2">
                  <Icons.SvgStar className="flex justify-end text-slate-400 hover:text-yellow-100" />
                </div>
              </div>
            </li>
            <li className="my-1">
              <div className="flex justify-between p-1 border-transparent rounded-8 hover:bg-gray-550 text-black cursor-pointer">
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
                  <Icons.SvgStar className="flex justify-end text-slate-400 hover:text-yellow-100" />
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
          <div className="px-3 pt-3 w-fit">
            <Dropdown
              items={topTemplatesItems}
              title="Top Templates"
              // className="text-red-500"
              menuActiveClassName="text-slate-100"
              menuInactiveClassName="text-slate-100 "
              menuItemsClassName="flex focus:outline-none w-fit"
            />
          </div>
          <div className="border-t border-blue-500 shadow-5xl w-full"></div>
          <div className="p-3 flex flex-row mt-2">
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

  const topTemplatesItems: DropdownItemType[] = [
    {
      component: () => (
        <div className="mt-3 w-fit">
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <ReactTooltip
            id="notifications-tooltip"
            style={{
              backgroundColor: "#4b5563",
              color: "white",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              fontSize: "12px",
            }}
          />
          <Icons.SvgNotification className="text-slate-100" />
        </div>
        <div
          className="p-6 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
          data-tooltip-id="information-tooltip"
          data-tooltip-content="Information"
          data-tooltip-delay-show={100}
        >
          <ReactTooltip
            id="information-tooltip"
            style={{
              backgroundColor: "#4b5563",
              color: "white",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              fontSize: "12px",
            }}
          />
          <Icons.SvgInformation className="text-slate-100" />
        </div>
        <Dropdown
          items={accountItems}
          icon={() => (
            <Image src="/account.png" width={24} height={24} alt="account" />
          )}
          className="p-1 hover:bg-blue-500 border-transparent rounded-full cursor-pointer transition-all duration-100"
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
    </div>
  );
};

export default Header;
