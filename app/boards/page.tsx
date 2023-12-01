"use client";

import React, { useEffect } from "react";

import { useAuth } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { BoardDetails, Icons } from "@app/components";

export default function Page() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);

  const BOARD_COLUMNS = [
    {
      title: "Backlog",
      tasks: ["Modal template YAPILACAK"],
    },
    {
      title: "To Do",
      tasks: ["Modal template YAPIL"],
    },
    {
      title: "Doing",
      tasks: ["Modal template YAP"],
    },
    {
      title: "Done",
      tasks: ["Modal template YAPSIN"],
    },
  ];

  useEffect(() => {
    useAuth.persist.rehydrate();
  }, []);

  return (
    <AppLayout>
      <div className="dark-blue-background h-screen">
        <div className="flex flex-row">
          <BoardDetails.Sidebar />
          <React.Fragment>
            {isAuthenticated && (
              <div className="flex flex-col w-full">
                <BoardDetails.Header />
                <div className="flex flex-row">
                  <div className="flex flex-row">
                    {BOARD_COLUMNS.map((boardColumn, i) => (
                      <BoardDetails.BoardColumn
                        key={i}
                        title={boardColumn.title}
                        tasks={boardColumn.tasks}
                      />
                    ))}
                  </div>
                  <button className="flex flex-row items-center gap-2 mx-[6px] h-fit mt-3 p-3 bg-black-100 hover:bg-slate-650 rounded-xl w-[272px] transition-all duration-100">
                    <Icons.SvgPlus className="w-4 h-4 text-white" />
                    <div className="text-sm leading-5 font-medium text-white">
                      Add another list
                    </div>
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        </div>
      </div>
    </AppLayout>
  );
}
