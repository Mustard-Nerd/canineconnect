import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./themeProvider";
import { MyProvider } from "@/contex/MyContex";
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "Canine-Connect",
  description: "Canine-Connect App",
  icons: {
    icon: "/favicon.ico",
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
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={local.className}>
        <ReduxProvider>
          {" "}
          {/* Use the new ReduxProvider */}
          <Providers>
            <MyProvider>
              <nav className="sticky top-0 z-40">
                <Navbar />
              </nav>
              <main className=" z-10">{children}</main>
              <footer>
                <Footer />
              </footer>
            </MyProvider>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
