import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Hari Tej Gym | Premium Fitness Training in Anekal",
  description: "Join Sai Hari Tej Gym in Anekal for strength training, weight loss programs, muscle building, and complete fitness transformation. Experience elite coaching and premium facilities.",
  keywords: [
    "Sai Hari Tej Gym",
    "Gym in Anekal",
    "Best gym in Anekal",
    "Fitness center in Anekal",
    "Strength training Anekal",
    "Weight loss Anekal",
    "Muscle building Anekal",
    "Sai Hari Tej Anekal",
    "Karnataka gym",
  ],
  authors: [{ name: "Sai Hari Tej Gym" }],
  openGraph: {
    title: "Sai Hari Tej Gym | Premium Fitness Training in Anekal",
    description: "Join Sai Hari Tej Gym in Anekal for strength training, weight loss programs, muscle building, and complete fitness transformation. Experience elite coaching and premium facilities.",
    url: "https://www.google.com/maps/place/Sai+Hari+Tej+Gym+-+Best+gym+in+Anekal",
    siteName: "Sai Hari Tej Gym",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Hari Tej Gym | Premium Fitness Training in Anekal",
    description: "Join Sai Hari Tej Gym in Anekal for strength training, weight loss programs, muscle building, and complete fitness transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-bg text-primary-text font-body selection:bg-accent-gold selection:text-primary-bg">
        {children}
      </body>
    </html>
  );
}
