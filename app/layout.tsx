import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "N9NE T.C.",
  description: "Unlock !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
