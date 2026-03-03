import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "VSK Construction",
  description: "Professional Construction Services",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}