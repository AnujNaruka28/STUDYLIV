import type { Metadata } from "next";
import { Inter, Edu_SA_Beginner, Roboto_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "./layouts/LayoutShell";

export const metadata: Metadata = {
  title: "Study-Liv - Learn Coding Skills Online",
  description: "Empower your future with coding skills. Learn at your own pace with our online coding courses, hands-on projects, and personalized feedback from industry experts.",
  keywords: ["coding", "programming", "online courses", "web development", "software development", "learn to code", "study-liv"],
  authors: [{ name: "Study-Liv Team" }],
  creator: "Study-Liv",
  publisher: "Study-Liv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://study-liv.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Study-Liv - Learn Coding Skills Online",
    description: "Empower your future with coding skills. Learn at your own pace with our online coding courses.",
    url: 'https://study-liv.com',
    siteName: 'Study-Liv',
    images: [
      {
        url: '/assets/Images/Logo-Full-Dark.png',
        width: 1200,
        height: 630,
        alt: 'Study-Liv Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study-Liv - Learn Coding Skills Online",
    description: "Empower your future with coding skills. Learn at your own pace with our online coding courses.",
    images: ['/assets/Images/Logo-Full-Dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
export const eduSA = Edu_SA_Beginner({
  subsets: ["latin"],
  variable: "--font-edu-sa-beginner",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-full ${inter.variable} font-sans`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
