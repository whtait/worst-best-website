"use client";
import React from "react";
import { useTranslation } from "@/i18n";
import { increment, useAppDispatch, useAppSelector } from "@/store";

export function Header() {
  const { t } = useTranslation();

  const count = useAppSelector((state) => state.counts.value);
  const dispatch = useAppDispatch();

  const onPress = () => {
    dispatch(increment());
  };

  return (
    <div className="flex flex-row-reverse justify-between items-center w-full h-14 bg-sky-950">
      <button onClick={onPress} className="m-4 text-white">
        {t("components.header.start")}
      </button>

      <div className="m-4 text-white">Count, motherfucker: {count}</div>
    </div>
  );
}
