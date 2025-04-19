import { ReactNode } from "react";
import "./globals.css";
 
 



interface RootLayoutPropsType{
  children:ReactNode
}

export default function RootLayout({children}: RootLayoutPropsType) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`overflow-x-hidden antialiased`}>{children}</body>
    </html>
  );
}
