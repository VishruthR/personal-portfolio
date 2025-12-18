import "./globals.css";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata = {
  title: "Vishruth Raj",
  description: `Vishruth Raj's Portfolio`,
  icons: {
    icon: "/logo.png",
  },
  other: {
    "viewport": "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} ${inter.variable} ${playfair.variable} h-full flex flex-col`}>
        <div className="flex-1 w-full">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
