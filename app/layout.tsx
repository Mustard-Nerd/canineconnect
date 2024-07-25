
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout/footer';
import { Providers } from './themeProvider';

export const metadata: Metadata = {
  title: 'Canine-Connect',
  description: 'Canine-Connect App',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          <div>{children}</div>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
