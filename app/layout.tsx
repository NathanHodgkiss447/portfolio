import type { Metadata } from "next";
import "./globals.css";
import ThemeScript from "./theme-script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nathan Hodgkiss - Developer Portfolio",
  description: "I build fast, elegant web apps.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/images/coding.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <div className="ambient" aria-hidden="true" />
        <Header />
        <main className="container" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
