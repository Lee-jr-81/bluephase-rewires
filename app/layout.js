import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { Inter } from "next/font/google";

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ClashGrotesk = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk-Extralight.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Light.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Regular.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Medium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Semibold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  title: "Bluephase Rewires",
  description: "Domestic Rewire Specialists in the West Midlands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} ${ClashGrotesk.variable} antialiased font-body`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
