"use client";

import { ThemeProvider } from "./components/theme-provider";

const providers = [
  ThemeProvider,
];

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Providers;
