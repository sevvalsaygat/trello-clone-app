import React, { PropsWithChildren, useState } from "react";
import Link from "next/link";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { Icons } from "@app/components";

import cn from "classnames";
import { Menu } from "@headlessui/react";

type DropdownPropTypes = {
  title?: string;
  icon?: React.FC;
  items: DropdownItemType[];
  content?: React.FC;
  tooltip?: {
    id: string;
    content: string;
    delay?: number;
    style?: React.CSSProperties;
  };
  menuActiveClassName?: string;
  menuInactiveClassName?: string;
  menuClassName?: string;
  className?: string;
  menuItemsClassName?: string;
};

const Dropdown: React.FC<DropdownPropTypes> = ({
  title,
  icon: Icon,
  items,
  content: Content,
  tooltip,
  menuActiveClassName = "bg-blue-200 hover:bg-blue-300 text-blue-800",
  menuInactiveClassName = "hover:bg-gray-350 text-gray-850",
  menuClassName = "relative inline-block text-left",
  className = "flex flex-row items-center rounded-3 transition-all duration-100 leading-8 px-3 cursor-pointer text-14 font-medium",
  menuItemsClassName = "flex border rounded-md max-h-887 w-304 shadow-4xl absolute bg-white focus:outline-none mt-3",
}) => {
  const isTooltipUsed = tooltip && tooltip.id && tooltip.content;

  const MenuContainer: React.FC<PropsWithChildren> = ({ children }) => {
    if (isTooltipUsed) {
      return (
        <React.Fragment>
          <div
            className="flex flex-row items-center"
            data-tooltip-id={tooltip.id}
            data-tooltip-content={tooltip.content}
            data-tooltip-delay-show={tooltip.delay}
          >
            {children}
          </div>

          <ReactTooltip id={tooltip.id} style={tooltip.style} />
        </React.Fragment>
      );
    }

    return <React.Fragment>{children}</React.Fragment>;
  };

  return (
    <Menu as="div" className={menuClassName}>
      {({ open }) => (
        <React.Fragment>
          <Menu.Button
            className={cn(className, {
              [menuActiveClassName]: open,
              [menuInactiveClassName]: !open,
            })}
          >
            <MenuContainer>
              {title ? title : Content && <Content />}
              {Icon ? (
                <Icon />
              ) : (
                <Icons.SvgArrowDown className="text-gray-850 ml-1 font-medium" />
              )}
            </MenuContainer>
          </Menu.Button>
          <Menu.Items className={menuItemsClassName}>
            <div className="w-full">
              {items.map(
                (
                  { title, icon: Icon, onClick, href, component: Component },
                  index
                ) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <React.Fragment>
                        {Component ? (
                          <Component />
                        ) : onClick ? (
                          <button
                            onClick={onClick}
                            className={cn(
                              "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                              {
                                "bg-violet-500 text-white": active,
                                "text-gray-900": !active,
                              }
                            )}
                          >
                            {title}
                            {Icon && <Icon />}
                          </button>
                        ) : (
                          <Link
                            href={href as string}
                            className={cn(
                              "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                              {
                                "bg-violet-500 text-white": active,
                                "text-gray-900": !active,
                              }
                            )}
                          >
                            {title}
                            {Icon && <Icon />}
                          </Link>
                        )}
                      </React.Fragment>
                    )}
                  </Menu.Item>
                )
              )}
            </div>
          </Menu.Items>
        </React.Fragment>
      )}
    </Menu>
  );
};

export default Dropdown;
