"use client";

import { useEffect } from "react";

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
      <div className="bg-gray-950 w-full">
        <div className="flex flex-row">
          <BoardDetails.Sidebar />
          <div>
            {isAuthenticated && (
              <div className="text-white p-5">
                Welcome {currentUser?.fullName}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
