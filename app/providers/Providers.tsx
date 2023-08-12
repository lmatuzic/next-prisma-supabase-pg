"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
