import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const vazir = Vazirmatn({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "بردینو",
  description:
    "بردینو | اپلیکیشن قرعه‌کشی و بازی روزانه – همین امروز برنده شو!",
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body
        className={`${vazir.className} overflow-y-auto overflow-x-hidden antialiased `}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
