import React from "react";
import { useTranslation } from "@/i18n";

export function Header() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row-reverse justify-between items-center w-full h-14 bg-sky-950">
      <button className="m-4 text-white">
        {t("components.header.tabs.blog")}
      </button>
      <input type="text" className="m-4" />
    </div>
  );
}
