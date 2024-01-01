"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type TActiveTheme = "light" | "dark" | "loading";

export const useGetActiveTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState<TActiveTheme>("loading");

  useEffect(() => {
    if (resolvedTheme === "light") setActiveTheme("light");
    else setActiveTheme("dark");
  }, [resolvedTheme]);

  return { activeTheme, setTheme };
};
