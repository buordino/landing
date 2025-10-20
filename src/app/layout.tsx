import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "بـردیـنـو | بازی کن، امتیاز بگیر، برنده شو!",
  description: "با بـردیـنـو تجربه‌ای متفاوت از سرگرمی و رقابت داشته باش.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-background text-white min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-[75px]">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
