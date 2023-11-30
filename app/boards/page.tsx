"use client";

import React, { useEffect } from "react";

import { useAuth } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { BoardDetails, Icons } from "@app/components";

export default function Page() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);

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
                    <BoardDetails.TaskBoard
                      title="Backlog"
                      content="-Modal template KURULDU."
                    />
                    <BoardDetails.TaskBoard
                      title="To Do"
                      content="-Modal template YAPILACAK."
                    />
                    <BoardDetails.TaskBoard
                      title="Doing"
                      content="-Modal template YAPILIYOR."
                    />
                    <BoardDetails.TaskBoard
                      title="Done"
                      content="-Modal template YAPILDI."
                    />
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
