import type { Metadata } from "next";
import { 
  Space_Grotesk, 
  Space_Mono, 
  Outfit, 
  Cormorant_Garamond, 
  Inter, 
  Fraunces,
  Plus_Jakarta_Sans,
  Libre_Caslon_Display,
  Manrope
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caslon",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stencil Engineering — Interior Design & Turnkey Contractors",
  description: "Leading Interior Designers & Turnkey Contractors since 1991. Corporate fitouts, healthcare, hospitality, pharma and retail spaces across India.",
  keywords: ["interior design", "turnkey contractors", "corporate fitouts", "Mumbai", "Stencil Engineering"],
  openGraph: {
    title: "Stencil Engineering — Interior Design & Turnkey Contractors",
    description: "Leading Interior Designers & Turnkey Contractors since 1991.",
    type: "website",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${spaceMono.variable} ${outfit.variable} ${cormorant.variable} ${inter.variable} ${fraunces.variable} ${jakarta.variable} ${caslon.variable} ${manrope.variable} ${neueHaas.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
