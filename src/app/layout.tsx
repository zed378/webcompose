import React from "react";
import "../index.css";
import Providers from "./providers";

export const metadata = {
  title: "Web Compose",
  description: "Web Compose Dashboard Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightPrimary dark:!bg-navy-900 text-navy-700 dark:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
