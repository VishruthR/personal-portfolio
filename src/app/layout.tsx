import "./globals.css";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Vishruth Raj",
  description: `Vishruth Raj's Portfolio`,
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${playfair.variable}`}>
        <div className="w-full h-full min-h-screen bg-beige flex">
          <NavBar />
          <div className="flex-1 ml-20 flex flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
