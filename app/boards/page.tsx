"use client";

import { useAuth } from "@app/hooks";

export default function Page() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);

  return (
    <div>11{isAuthenticated && <div>Welcome {currentUser?.fullName}</div>}</div>
  );
}
