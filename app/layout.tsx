import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franco De Nardo — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with 10+ years of experience building software for regulated industries like life sciences, fintech, and government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid var(--border)" }}>
          <div className="mx-auto max-w-[900px] px-8 py-6">
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              © 2026 Franco De Nardo
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
