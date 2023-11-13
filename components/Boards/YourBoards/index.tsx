import React from "react";
import Image from "next/image";

import { useLocale } from "@app/hooks";
import { Icons } from "@app/components";

type YourBoardsPropTypes = {};

const YourBoards: React.FC<YourBoardsPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Boards.YourBoards",
  };

  const { t } = useLocale();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3">
        <div className="pr-3">
          <Icons.SvgUser className="text-slate-900 w-6 h-6 bold" />
        </div>
        <h1 className="text-16 leading-6 text-slate-950 font-bold">
          {t("labels.title", SCOPE_OPTIONS)}
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="flex relative mr-4 mb-4 cursor-pointer w-190 h-96">
          <Image
            src="/board.jpg"
            width={180}
            height={96}
            alt="account"
            className="rounded-3 w-190 h-96"
          />
          <div className="absolute hover:bg-neutral-500 w-full h-full">
            <div className="group/item flex flex-col ml-2 mt-2 justify-between w-full h-full">
              <div className="text-white font-semibold text-16 leading-5">
                invoicing-app
              </div>
              <div className="flex mb-4 mr-5 justify-end">
                <Icons.SvgStar className="text-white w-4 h-4 hidden group-hover/item:block" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mr-4 mb-4 p-2 cursor-pointer w-190 h-96 bg-zinc-300 hover:bg-gray-350 rounded-3">
          <div className="flex justify-center items-center w-full h-full text-14 leading-5 text-slate-950">
            {t("actions.newBoard", SCOPE_OPTIONS)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBoards;
