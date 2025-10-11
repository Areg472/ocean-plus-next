import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { createMetadata } from "@/lib/metadata";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
