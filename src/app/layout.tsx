import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "بـردیـنـو",
  description: "با بـردیـنـو، بازی کن، امتیاز بگیر، برنده شو!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="overflow-x-hidden h-dvh bg-background text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
