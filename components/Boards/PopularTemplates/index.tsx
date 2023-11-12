import React from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";

import { useLocale } from "@app/hooks";
import { Icons, Form } from "@app/components";

type PopularTemplatesPropTypes = {};

const PopularTemplates: React.FC<PopularTemplatesPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Boards.PopularTemplates",
  };

  const { t } = useLocale();
  const useFormMethods = useForm();

  const templateCategoryOptions = [
    {
      value: "popular",
      label: t("form.templateCategory.items.popular", SCOPE_OPTIONS),
    },
    {
      value: "smallBusiness",
      label: t("form.templateCategory.items.smallBusiness", SCOPE_OPTIONS),
    },
    {
      value: "design",
      label: t("form.templateCategory.items.design", SCOPE_OPTIONS),
    },
    {
      value: "education",
      label: t("form.templateCategory.items.education", SCOPE_OPTIONS),
    },
    {
      value: "engineering_it",
      label: t("form.templateCategory.items.engineering_it", SCOPE_OPTIONS),
    },
    {
      value: "marketing",
      label: t("form.templateCategory.items.marketing", SCOPE_OPTIONS),
    },
    {
      value: "humanResources",
      label: t("form.templateCategory.items.humanResources", SCOPE_OPTIONS),
    },
    {
      value: "operations",
      label: t("form.templateCategory.items.operations", SCOPE_OPTIONS),
    },
    {
      value: "sales CRM",
      label: t("form.templateCategory.items.sales_crm", SCOPE_OPTIONS),
    },
  ];

  return (
    <div className="py-3 mb-24">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Icons.SvgTemplate className="text-slate-100 w-6 h-6 mr-1" />
          <div className="text-20 leading-6 text-blue-300 font-semibold">
            {t("labels.title", SCOPE_OPTIONS)}
          </div>
        </div>
        <button className="p-6 bg-gray-550 hover:bg-blue-500 rounded-3 mb-2">
          <Icons.SvgClose className="text-blue-300 h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <div className="text-14 leading-5 text-slate-100">
          {t("labels.content", SCOPE_OPTIONS)}
        </div>
        <FormProvider {...useFormMethods}>
          <Form.Select
            className="ml-2 text-14 leading-5 text-blue-300 w-[240px]"
            name="selectbox"
            options={templateCategoryOptions}
            placeholder={t("form.templateCategory.placeholder", SCOPE_OPTIONS)}
          />
        </FormProvider>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex relative mr-4 mb-4 cursor-pointer">
          <Image
            src="/pink-background.jpg"
            width={180}
            height={96}
            alt="account"
            className="rounded-3 w-190 h-96"
          />
          <div className="absolute hover:bg-black-50 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-16 leading-5">
                {t("templates.labels.project", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative mr-4 mb-4 cursor-pointer">
          <Image
            src="/kanban.jpg"
            width={180}
            height={96}
            alt="account"
            className="rounded-3 w-190 h-96"
          />
          <div className="absolute hover:bg-black-50 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-16 leading-5">
                {t("templates.labels.kanban", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative mr-4 mb-4 cursor-pointer">
          <Image
            src="/leaf.jpg"
            width={180}
            height={96}
            alt="account"
            className="rounded-3 w-190 h-96"
          />
          <div className="absolute hover:bg-black-50 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-16 leading-5">
                {t("templates.labels.simple", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative mr-4 mb-4 cursor-pointer">
          <Image
            src="/train.jpg"
            width={180}
            height={96}
            alt="account"
            className="rounded-3 w-190 h-96"
          />
          <div className="absolute hover:bg-black-50 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-6 py-1 text-11 leading-4 text-blue-300 bg-blue-500 rounded-4 font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-16 leading-5">
                {t("templates.labels.remote", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-14 leading-5 text-blue-400 cursor-pointer hover:underline mb-2">
        {t("labels.browseFullGallery", SCOPE_OPTIONS)}
      </div>
    </div>
  );
};

export default PopularTemplates;
