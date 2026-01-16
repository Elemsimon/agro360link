import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterCTA from "@/components/footer/footer-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agro360Links",
  description: "Global Agriculture Export Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FooterCTA />
      </body>
    </html>
  );
}
