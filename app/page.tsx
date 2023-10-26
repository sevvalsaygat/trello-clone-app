"use client";

import { useLocale } from "@app/hooks";
import { Layouts } from "@app/componets";

export default function Home() {
  const SCOPE_OPTIONS = {
    scope: "pages.Home",
  };

  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <Layouts.App.Header />
      <div className="text-white p-9">{t("labels.title", SCOPE_OPTIONS)}</div>
    </div>
  );
}
