import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";


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
  // const [dark, setDark] = useState<Boolean>(false);
  
  // useEffect(() => {
  //   if (window.matchMedia('prefers-color-scheme: dark')) {
  //     setDark(true)
  //   } else {
  //     setDark(false);
  //   }
  // }, [])
  return (
    <html lang="en-US">
      <body className={roboto.className}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
