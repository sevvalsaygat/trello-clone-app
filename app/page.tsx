"use client";

import { useLocale } from "@app/hooks";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };

  const { t } = useLocale();

  return <div>{t("labels.title", SCOPE_OPTIONS)}</div>;
}
