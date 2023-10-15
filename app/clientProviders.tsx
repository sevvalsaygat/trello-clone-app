"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { LocaleProvider } from "@app/hooks/useLocale";

const queryClient = new QueryClient();

const ClientProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>{children}</LocaleProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
