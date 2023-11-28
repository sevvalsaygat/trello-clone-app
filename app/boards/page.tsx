"use client";

import React, { useEffect } from "react";

import { useAuth } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { BoardDetails } from "@app/components";

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
                <div className="text-white p-5">
                  Welcome {currentUser?.fullName}
                </div>
              </div>
            )}
          </React.Fragment>
        </div>
      </div>
    </AppLayout>
  );
}
