'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/src/theme';
import MiniDrawer from '@/components/Drawer';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noLayoutPaths = ['/login', '/register'];
  const isAuthPage = noLayoutPaths.includes(pathname);

  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {isAuthPage ? children : 
              <MiniDrawer
                children={children}
              />
            }
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
