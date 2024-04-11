import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Smoke Demo",
  description: "A smoke effect library for react applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
