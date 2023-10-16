"use client";

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { LOCAL_STORAGE_KEYS } from "@app/constants";
import type {
  User as UserType,
  AuthenticationResponse as AuthenticationResponseType,
} from "@api";

type UseAuthType = {
  accessToken?: string;
  currentUser?: UserType;
  isAuthenticated: boolean;
  logout: () => void;
  setAuth: (authenticationResponse: AuthenticationResponseType) => void;
};

const useAuth = create<UseAuthType>()(
  devtools(
    persist(
      (set) => ({
        accessToken: undefined,
        currentUser: undefined,
        isAuthenticated: false,
        logout: () =>
          set(() => ({
            accessToken: undefined,
            currentUser: undefined,
            isAuthenticated: false,
          })),
        setAuth: (authenticationResponse: AuthenticationResponseType) =>
          set(() => ({
            accessToken: authenticationResponse.accessToken,
            currentUser: authenticationResponse.user,
            isAuthenticated: true,
          })),
      }),
      {
        name: LOCAL_STORAGE_KEYS.AUTH,
      }
    )
  )
);

export default useAuth;
