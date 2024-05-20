import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://react-smoke-demo.vercel.app"),
  title: "React Smoke Demo",
  description: "A smoke effect library for react applications",
  applicationName: "Influencer Stock Exchange",
  keywords: ["React", "Smoke", "Cloud", "Fire", "3d", "Effect", "Library"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
