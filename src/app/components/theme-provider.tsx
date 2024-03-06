"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const propsDefault = {
        attribute: "class",
        defaultTheme: "system",
        disableTransitionOnChange: true,
        enableSystem: true,
        themes: ["light", "dark"],
      }

    const AssignProps = { ...propsDefault, ...props };

  return <NextThemesProvider {...AssignProps}>{children}</NextThemesProvider>;
}
