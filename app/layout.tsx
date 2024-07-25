import type { Metadata, Viewport } from 'next';
import './globals.css';
import TProvider from './themeProvider';
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout/footer';

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
    <html lang="en">
      <body>
        <TProvider>
          <div>
            <nav>
              <Navbar />
            </nav>
            <div>{children}</div>
            <footer>
              <Footer />
            </footer>
          </div>
        </TProvider>
      </body>
    </html>
  );
}
