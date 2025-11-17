import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingBuyButton from "./components/FloatingBuyButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Istanbul Tourist Pass - Hotels, Tours & Flights",
  description: "Book your perfect holiday with amazing deals on hotels, flights, tours and travel packages in Istanbul and Turkey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingBuyButton />
        <Footer />
      </body>
    </html>
  );
}
