import type { Metadata, Viewport } from "next";
import './globals.css';
import { Navbar } from "@/components/layout";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "Canine-Connect",
  description: "Canine-Connect",
  icons: {
    icon: '/favicon.ico',
  },
};



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
        <body>
          <nav>
            <Navbar />
          </nav>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
