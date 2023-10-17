import React, { PropsWithChildren } from "react";

import { Icons, Button } from "@app/componets";

type AuthPropTypes = {};

const Auth: React.FC<PropsWithChildren<AuthPropTypes>> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="icons-container">
        {/* <Icons.SvgTrelloLeft className="absolute left-0 bottom-0" />
        <Icons.SvgTrelloRight className="absolute right-0 bottom-0" /> */}
      </div>
      <div className="container max-w-sm mx-auto flex flex-col items-center justify-center">
        <div className="flex justify-center my-10">
          <Icons.SvgTrelloLogo className=" h-5" />
        </div>
        <div className="bg-white p-8 rounded-3 shadow-3xl w-full mx-auto">
          <h1 className="flex mb-6 text-16 text-gray-250 font-semibold leading-28 justify-center">
            Log in to Trello
          </h1>
          {children}
          <div className="flex flex-col justify-center items-center">
            <div className="my-4">
              <div className="text-gray-100 leading-3 text-11">OR</div>
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
              <hr className="mt-6 border-gray-300 border-t" />
              <ul className="my-14 flex flex-row justify-center">
                <li className="mr-5 text-blue-150 hover:underline text-14 leading-29 font-extralight">
                  Can&rsquo;t log in?
                </li>
                <li className="text-blue-150 hover:underline text-14 leading-29 font-extralight">
                  {" "}
                  Sign up for an account
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="my-14 flex flex-row justify-center">
          <li className="mr-5 text-blue-150 hover:underline text-12 leading-29 font-extralight">
            Privacy Policy
          </li>
          <li className="text-blue-150 hover:underline text-12 leading-29 font-extralight">
            Terms of Service
          </li>
        </ul>
      </div>
      <div>
        <hr className="my-6 border-gray-300 border-t" />
        {/* <Icons.SvgAtlassian /> */}
      </div>
    </div>
  );
};

export default Auth;
