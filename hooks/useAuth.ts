"use client";

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import Cookies from "js-cookie";

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
        skipHydration: true,
        name: LOCAL_STORAGE_KEYS.AUTH,
        storage: {
          getItem: (name) => {
            const str = Cookies.get(name);

            if (!str) {
              return undefined;
            }

            return JSON.parse(str);
          },
          setItem: (name, newValue) => {
            Cookies.set(name, JSON.stringify(newValue), {
              expires: 7,
            });
          },
          removeItem: (name) => Cookies.remove(name),
        },
      }
    )
  )
);

export default useAuth;
