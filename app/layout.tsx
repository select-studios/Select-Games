import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Nav from "@/components/layout/navbar";
import { sfPro, montserrat } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Select Studios - The future begins now",
  description:
    "Select Launcher allows indie devs to grow giving them a platform to grow a community along side us.",
  themeColor: "#fff",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, montserrat.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-purple-200 via-white to-blue-200" />
        <Suspense fallback="..."></Suspense>
        <Nav session={null} />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
