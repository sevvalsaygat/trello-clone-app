"use client";

import { useRouter } from "next/navigation";

import { useForm, FormProvider } from "react-hook-form";

import { AUTH, ROUTES } from "@app/constants";
import { Form } from "@app/componets";
import { string, error } from "@app/libs";
import { useLocale, api, useAuth } from "@app/hooks";

type LoginFormType = {
  email: string;
  password: string;
};

export default function Page() {
  const SCOPE_OPTIONS = {
    scope: "pages.Login",
  };

  const router = useRouter();
  const { t } = useLocale();
  const setAuth = useAuth((state) => state.setAuth);
  const useFormMethods = useForm<LoginFormType>();
  const {
    mutate,
    isError,
    error: useLoginError,
  } = api.useLogin({
    onSuccess(data) {
      setAuth(data);
      router.push(ROUTES.boards);
    },
  });

  const { handleSubmit } = useFormMethods;
  const onSubmit = (data: LoginFormType) => {
    mutate(data);
  };

  const errors = error.extractApiErrors(useLoginError);

  return (
    <div className="p-8">
      <div className="text-red-500">
        {isError && errors.map((error, index) => <li key={index}>{error}</li>)}
      </div>
      <FormProvider {...useFormMethods}>
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
        <Form.Input
          type="password"
          name="password"
          label={t("form.password.label", SCOPE_OPTIONS)}
          placeholder={t("form.password.placeholder", SCOPE_OPTIONS)}
          variant="primary"
          rules={{
            required: t("form.password.rules.required", SCOPE_OPTIONS),
            maxLength: {
              value: AUTH.PASSWORD.MAX_LENGTH,
              message: t("form.password.rules.maxLength", {
                ...SCOPE_OPTIONS,
                maxLen: AUTH.PASSWORD.MAX_LENGTH,
              }),
            },
            minLength: {
              value: AUTH.PASSWORD.MIN_LENGTH,
              message: t("form.password.rules.minLength", {
                ...SCOPE_OPTIONS,
                minLen: AUTH.PASSWORD.MIN_LENGTH,
              }),
            },
          }}
        />
      </FormProvider>
      <button onClick={handleSubmit(onSubmit)}>Login</button>
    </div>
  );
}
