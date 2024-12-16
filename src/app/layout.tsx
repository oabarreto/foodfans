import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food-Fans",
  description: "Page for food fans",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen flex flex-col flex-1">
      <body
        className={`${roboto.className}  antialiased flex flex-col h-full w-full bg-neutral-100`}
      >
        <Header />
        <div className="flex flex-1 flex-col overflow-auto">
          {children}
          <Footer />
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
