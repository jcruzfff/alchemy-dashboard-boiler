import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Wallets Dashboard",
  description: "Dashboard for managing smart wallets and blockchain operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body className="antialiased h-full w-full">
        <div id="__next" className="h-full w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
