import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruang Belajar",
  description: "aplikasi belajar ternyaman termurah, semua untuk pendidikan bangsa indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
