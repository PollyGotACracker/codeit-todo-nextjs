import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nanumSqaure = localFont({
  src: [
    {
      path: "../public/fonts/NanumSquareL.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/NanumSquareR.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/NanumSquareB.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/NanumSquareEB.woff2",
      weight: "800",
    },
  ],
  variable: "--font-nanum-square",
});

export const metadata: Metadata = {
  title: "Do It",
  description: "My Todolist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${nanumSqaure.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
