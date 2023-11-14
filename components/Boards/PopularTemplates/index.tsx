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
    <div className="py-3 mb-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Icons.SvgTemplate className="text-slate-900 w-6 h-6 mr-1" />
          <div className="text-xl leading-6 text-slate-950 font-semibold">
            {t("labels.title", SCOPE_OPTIONS)}
          </div>
        </div>
        <button className="p-1.5 bg-zinc-300 hover:bg-gray-350 rounded-3 mb-2">
          <Icons.SvgClose className="text-slate-950 h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <div className="text-sm leading-5 text-slate-900">
          {t("labels.content", SCOPE_OPTIONS)}
        </div>
        <FormProvider {...useFormMethods}>
          <Form.Select
            className="ml-2 text-sm leading-5 text-slate-950 w-[240px]"
            name="selectbox"
            options={templateCategoryOptions}
            placeholder={t("form.templateCategory.placeholder", SCOPE_OPTIONS)}
          />
        </FormProvider>
      </div>
      <div className="flex flex-row mt-8">
        <div className="flex relative mr-4 mb-4 cursor-pointer">
          <Image
            src="/pink.jpg"
            width={180}
            height={96}
            alt="account"
            className="rounded-3 w-48 h-24"
          />
          <div className="absolute hover:bg-neutral-500 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-1.5 py-1 text-xs leading-4 text-slate-950 bg-gray-350 rounded font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-base leading-5">
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
            className="rounded-3 w-48 h-24"
          />
          <div className="absolute hover:bg-neutral-500 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-1.5 py-1 text-xs leading-4 text-slate-950 bg-gray-350 rounded font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-base leading-5">
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
            className="rounded-3 w-48 h-24"
          />
          <div className="absolute hover:bg-neutral-500 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-1.5 py-1 text-xs leading-4 text-slate-950 bg-gray-350 rounded font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-base leading-5">
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
            className="rounded-3 w-48 h-24"
          />
          <div className="absolute hover:bg-neutral-500 w-full h-full">
            <div className="ml-2 mt-2">
              <div className="px-1.5 py-1 text-xs leading-4 text-slate-950 bg-gray-350 rounded font-semibol w-min">
                {t("labels.template", SCOPE_OPTIONS)}
              </div>
              <div className="text-white font-semibold text-base leading-5">
                {t("templates.labels.remote", SCOPE_OPTIONS)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm leading-5 text-blue-800 cursor-pointer hover:underline mb-2">
        {t("labels.browseFullGallery", SCOPE_OPTIONS)}
      </div>
    </div>
  );
};

export default PopularTemplates;
