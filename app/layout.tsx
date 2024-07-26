import type { Metadata, Viewport } from "next";
import './globals.css';
import { Navbar } from "@/components/layout";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/components/layout/footer";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Canine-Connect",
  description: "Canine-Connect",
  icons: {
    icon: '/favicon.ico',
  },
};

const local = localFont({
  src: [
    {
      path: "/fonts/Benz Grotesk.ttf",
      weight: "400",
      style: "normal",
    },

  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{
  children: React.ReactNode;
  pageProps: { session: Session | null };
}>) {
  return (
    <SessionProvider session={pageProps?.session}>
      <html>
        <body className={local.className}>
          <nav>
            <Navbar />
          </nav>
          <main className="bg-white">{children}</main>
            <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
