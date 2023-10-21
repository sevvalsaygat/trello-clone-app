"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm, FormProvider } from "react-hook-form";

import { AUTH, ROUTES } from "@app/constants";
import { Form, Icons, Button } from "@app/componets";
import { string, error, time } from "@app/libs";
import { useLocale, api, useAuth } from "@app/hooks";
import { AuthLayout } from "@app/layouts";

type RegisterFormType = {
  email: string;
  password: string;
  fullName: string;
};

export default function Page() {
  const SCOPE_OPTIONS = {
    scope: "pages.Register",
  };

  const router = useRouter();
  const { t } = useLocale();
  const setAuth = useAuth((state) => state.setAuth);
  const useFormMethods = useForm<RegisterFormType>();
  const {
    mutate,
    isError,
    error: useRegisterError,
  } = api.useRegister({
    onSuccess(data) {
      setAuth(data);
      router.push(ROUTES.boards);
    },
  });

  const [formStep, setFormStep] = useState<"emailStep" | "passwordStep">(
    "emailStep"
  );
  const { trigger, getValues, watch, getFieldState, setFocus } = useFormMethods;

  const errors = error.extractApiErrors(useRegisterError);
  const emailWatch = watch("email");
  const fullNameWatch = watch("fullName");

  function handleContinue() {
    if (formStep === "emailStep") {
      trigger("email");
      trigger("fullName");

      setTimeout(() => {
        if (
          !getFieldState("email").invalid &&
          !getFieldState("fullName").invalid
        ) {
          setFormStep("passwordStep");
        }
      }, 350);
    }
    if (formStep === "passwordStep") {
      trigger("password");
      // trigger("passwordConfirm");

      time.wait(350, () => {
        if (!getFieldState("password").invalid) {
          mutate(getValues());
        }
      });
    }
  }

  return (
    <AuthLayout>
      <div className="p-2">
        <div className="text-red-500">
          {isError &&
            errors.map((error, index) => <li key={index}>{error}</li>)}
        </div>
        <FormProvider {...useFormMethods}>
          {formStep === "emailStep" ? (
            <div>
              <Form.Input
                name="fullName"
                label={t("form.fullName.label", SCOPE_OPTIONS)}
                placeholder={t("form.fullName.placeholder", SCOPE_OPTIONS)}
                variant="primary"
                rules={{
                  required: t("form.fullName.rules.required", SCOPE_OPTIONS),
                }}
              />
              <Form.Input
                name="email"
                label={t("form.email.label", SCOPE_OPTIONS)}
                placeholder={t("form.email.placeholder", SCOPE_OPTIONS)}
                variant="primary"
                rules={{
                  required: t("form.email.rules.required", SCOPE_OPTIONS),
                  validate: (value) => {
                    if (!string.isValidEmail(value)) {
                      return t("form.email.rules.email", SCOPE_OPTIONS);
                    }

                    return true;
                  },
                }}
              />
            </div>
          ) : (
            <div>
              <div className="flex flex-row w-full relative">
                <button
                  onClick={() => {
                    setFormStep("emailStep");
                    time.wait(250, () => {
                      setFocus("fullName");
                    });
                  }}
                  className="cursor-pointer -ml-28 -mt-1 absolute text-blue-100"
                >
                  <Icons.SvgPencil />
                </button>
                <div
                  className="w-full mb-4 border-2 border-transparent hover:bg-gray-50 hover:border-2 hover:border-blue-150 rounded-3 p-7 placeholder:text-14 font-light text-blue-100 focus:outline-none text-14 transition-all duration-300"
                  onClick={() => {
                    setFormStep("emailStep");
                    time.wait(250, () => {
                      setFocus("fullName");
                    });
                  }}
                >
                  {fullNameWatch}
                </div>
              </div>
              <div className="flex flex-row w-full relative">
                <button
                  onClick={() => {
                    setFormStep("emailStep");
                    time.wait(250, () => {
                      setFocus("email");
                    });
                  }}
                  className="cursor-pointer -ml-28 -mt-1 absolute text-blue-100"
                >
                  <Icons.SvgPencil />
                </button>
                <div
                  className="w-full mb-4 border-2 border-transparent hover:bg-gray-50 hover:border-2 hover:border-blue-150 rounded-3 p-7 placeholder:text-14 font-light text-blue-100 focus:outline-none text-14 transition-all duration-300"
                  onClick={() => {
                    setFormStep("emailStep");
                    time.wait(250, () => {
                      setFocus("email");
                    });
                  }}
                >
                  {emailWatch}
                </div>
              </div>
            </div>
          )}
          {formStep === "passwordStep" && (
            <Form.Input
              type="password"
              name="password"
              label={t("form.password.label", SCOPE_OPTIONS)}
              placeholder={t("form.password.placeholder", SCOPE_OPTIONS)}
              variant="primary"
              rules={{
                required: t("form.password.rules.required", SCOPE_OPTIONS),
                maxLength: {
                  value: AUTH.FORM.PASSWORD.MAX_LENGTH,
                  message: t("form.password.rules.maxLength", {
                    ...SCOPE_OPTIONS,
                    maxLen: AUTH.FORM.PASSWORD.MAX_LENGTH,
                  }),
                },
                minLength: {
                  value: AUTH.FORM.PASSWORD.MIN_LENGTH,
                  message: t("form.password.rules.minLength", {
                    ...SCOPE_OPTIONS,
                    minLen: AUTH.FORM.PASSWORD.MIN_LENGTH,
                  }),
                },
              }}
            />
          )}
        </FormProvider>
        <Button
          onClick={() => {
            handleContinue();
          }}
          variant="primary"
          title={formStep === "emailStep" ? "Continue" : "Login"}
        />
      </div>
    </AuthLayout>
  );
}
