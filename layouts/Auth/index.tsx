import React, { PropsWithChildren } from "react";

import { Icons, Button, Layouts } from "@app/componets";
import { ROUTES } from "@app/constants";
import Link from "next/link";

type AuthPropTypes = {};

const Auth: React.FC<PropsWithChildren<AuthPropTypes>> = ({ children }) => {
  const options = [{ value: "English", label: "Chocolate" }];
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col z-0">
      <div className="flex justify-between fixed z-10 bottom-5 right-0 left-0">
        <div className="w-400 h-378">
          <Icons.SvgTrelloLeft />
        </div>
        <div className="w-400 h-378">
          <Icons.SvgTrelloRight />
        </div>
      </div>
      <div className="container max-w-sm mx-auto flex flex-col items-center justify-center z-20">
        <div className="flex justify-center my-10">
          <Icons.SvgTrelloLogo className=" h-5" />
        </div>
        <div className="bg-white p-35 rounded-3 shadow-3xl w-full mx-auto">
          <h1 className="flex mb-6 text-16 text-gray-250 font-semibold leading-28 justify-center">
            Log in to Trello
          </h1>
          {children}
          <div className="flex flex-col justify-center items-center">
            <div className="my-4">
              <div className="text-blue-100 leading-3 text-11">OR</div>
            </div>
            <div className="flex flex-col w-full bg-white">
              <Button
                onClick={() => {}}
                variant="socialauth"
                title="Continue with Google"
                leftIcon={() => (
                  <div className="flex justify-center items-center mr-2">
                    <Icons.SvgGoogle className="h-5" />
                  </div>
                )}
              />
              <Button
                onClick={() => {}}
                variant="socialauth"
                title="Continue with Microsoft"
                leftIcon={() => (
                  <div className="flex justify-center items-center mr-2">
                    <Icons.SvgMicrosoft className="h-5" />
                  </div>
                )}
              />
              <Button
                onClick={() => {}}
                variant="socialauth"
                title="Continue with Apple"
                leftIcon={() => (
                  <div className="flex justify-center items-center mr-2">
                    <Icons.SvgApple className="h-5" />
                  </div>
                )}
              />
              <Button
                onClick={() => {}}
                variant="socialauth"
                title="Continue with Slack"
                leftIcon={() => (
                  <div className="flex justify-center items-center mr-2">
                    <Icons.SvgSlack className="h-5" />
                  </div>
                )}
              />
              <hr className="mt-4 border-gray-300 border-t" />
              <ul className="mt-14 flex flex-row justify-center list-with-divider">
                <li className="text-blue-250 text-14 leading-29 font-extralight">
                  <Link className="hover:underline" href={ROUTES.login}>
                    Can&rsquo;t log in?
                  </Link>
                </li>
                <li className="text-blue-250 text-14 leading-29 font-extralight">
                  <Link className="hover:underline" href={ROUTES.register}>
                    Sign up for an account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="mt-14 mb-30 flex flex-row justify-center list-with-divider">
          <li className=" text-blue-250 text-12 leading-29 font-extralight">
            <Link className="hover:underline" href={ROUTES.login}>
              Privacy Policy
            </Link>
          </li>
          <li className="text-blue-250 text-12 leading-29 font-extralight">
            <Link className="hover:underline" href={ROUTES.login}>
              Terms of Service
            </Link>
          </li>
        </ul>
        <Layouts.Auth.Footer />
      </div>
    </div>
  );
};

export default Auth;