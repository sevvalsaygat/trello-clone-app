import type { Metadata } from "next";

import ClientProviders from "./clientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Simple Trello Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
