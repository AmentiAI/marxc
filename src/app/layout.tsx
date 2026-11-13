import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pacheco Rotisserie | Peruvian Inspired Cuisine",
  description:
    "Fire-kissed Peruvian rotisserie chicken, causas, and ceviche in Westerly. Open daily 11am–10pm at 87 Oak St.",
  openGraph: {
    title: "Pacheco Rotisserie",
    description: "Peruvian Inspired Cuisine — Westerly, RI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
