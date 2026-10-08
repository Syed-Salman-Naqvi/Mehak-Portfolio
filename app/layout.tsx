import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tamseel Fatima | Botanist, Phycologist & Researcher",
  description:
    "Academic portfolio of Tamseel Fatima — botanist, phycologist, educationist and researcher based in Karachi, Pakistan. MPhil Botany, University of Karachi.",
  authors: [{ name: "Tamseel Fatima" }],
  other: {
    "profile:linkedin":
      "https://www.linkedin.com/in/tamseel-fatima-236780335",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        {children}
      </body>
    </html>
  );
}
