import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Forum } from "next/font/google";

export const metadata = {
  title: "Home - Coffee Panda",
  description: "Most amazing coffee you've ever had",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const forum = Forum({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-forum",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${forum.variable}`}>
      <body className="bg bg-gradient-to-br from-neutral-100 to-neutral-200">
        {children}
      </body>
    </html>
  );
}
