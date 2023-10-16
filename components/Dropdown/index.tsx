import React from "react";
import Link from "next/link";

import cn from "classnames";
import { Menu } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

type DropdownPropTypes = {
  title?: string;
  icon?: React.FC;
  items: ItemType[];
};

type ItemType = {
  title?: string;
  icon?: React.FC;
  href?: string;
  onClick?: () => void;
};

const Dropdown: React.FC<DropdownPropTypes> = ({
  title,
  icon: Icon,
  items,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {title}
          {Icon ? (
            <Icon />
          ) : (
            <ArrowDownIcon className="ml-2 h-5 w-3 text-gray-500 font-bold" />
          )}
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          {items.map(({ title, icon: Icon, onClick, href }, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <React.Fragment>
                  {onClick ? (
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
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
