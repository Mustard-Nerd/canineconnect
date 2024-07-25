'use client';

import { ThemeProvider } from 'next-themes';

const TProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default TProvider;
