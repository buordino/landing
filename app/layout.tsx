import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
const vazir = Vazirmatn({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Buordino",
  description: "",
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} overflow-x-hidden antialiased `}>
        {children}
      </body>
    </html>
  );
}
