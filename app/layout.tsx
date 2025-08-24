import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Use the font import directly
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-Powered platform for preparing mock interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.variable} antialiased pattern`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
