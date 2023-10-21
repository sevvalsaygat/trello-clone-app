import React from "react";

import { Button, Icons } from "@app/componets";
import { useLocale } from "@app/hooks";

type OmniauthButtonGroupPropTypes = {};

const OmniauthButtonGroup: React.FC<OmniauthButtonGroupPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layouts.Auth.OmniauthButtonGroup",
  };

  const { t } = useLocale();

  return (
    <React.Fragment>
      <Button
        onClick={() => {}}
        variant="omniauth"
        title={t("actions.google", SCOPE_OPTIONS)}
        leftIcon={() => (
          <div className="flex justify-center items-center mr-2">
            <Icons.SvgGoogle className="h-5" />
          </div>
        )}
      />
      <Button
        onClick={() => {}}
        variant="omniauth"
        title={t("actions.microsoft", SCOPE_OPTIONS)}
        leftIcon={() => (
          <div className="flex justify-center items-center mr-2">
            <Icons.SvgMicrosoft className="h-5" />
          </div>
        )}
      />
      <Button
        onClick={() => {}}
        variant="omniauth"
        title={t("actions.apple", SCOPE_OPTIONS)}
        leftIcon={() => (
          <div className="flex justify-center items-center mr-2">
            <Icons.SvgApple className="h-5" />
          </div>
        )}
      />
      <Button
        onClick={() => {}}
        variant="omniauth"
        title={t("actions.slack", SCOPE_OPTIONS)}
        leftIcon={() => (
          <div className="flex justify-center items-center mr-2">
            <Icons.SvgSlack className="h-5" />
          </div>
        )}
      />
    </React.Fragment>
  );
};

export default OmniauthButtonGroup;
