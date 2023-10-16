"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";

import { AUTH } from "@app/constants";
import { Form } from "@app/componets";
import { string } from "@app/libs";
import { useLocale } from "@app/hooks";

type FormType = {
  email: string;
  password: string;
};

export default function Page() {
  const SCOPE_OPTIONS = {
    scope: "pages.Login",
  };

  const { t } = useLocale();
  const useFormMethods = useForm<FormType>();

  const { handleSubmit } = useFormMethods;
  const onSubmit = (data: FormType) => console.log(data);

  return (
    <div className="p-8">
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
