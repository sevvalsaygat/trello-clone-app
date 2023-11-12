import React from "react";

import { Form } from "@app/components";
import { useLocale } from "@app/hooks";

import { FormProvider, useForm } from "react-hook-form";

type LanguageSelectPropTypes = {};

const LanguageSelect: React.FC<LanguageSelectPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.LanguageSelect",
  };

  const { availableLanguages, t, locale } = useLocale();
  const methods = useForm({
    defaultValues: {
      // language: locale,
    },
  });
  const options = availableLanguages.map((language) => ({
    value: language,
    label: t(`options.labels.${language}`, SCOPE_OPTIONS),
  }));

  return (
    <FormProvider {...methods}>
      <Form.Select
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "none",
            maxWidth: "166px",
            width: "full",
          }),
        }}
        defaultValue={locale}
        showIndicator={false}
        name="language"
        options={options}
      />
    </FormProvider>
  );
};

export default LanguageSelect;
