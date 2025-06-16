import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SellCorner – Blog & Shop",
  description:
    "SellCorner blog frontend powered by Next.js + WPGraphQL + WooCommerce API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
        <Header />
        <main className="flex-1 w-full mx-auto max-w-screen-xl px-4 py-6 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
