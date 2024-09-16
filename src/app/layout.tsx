'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './_Components/Navbar/page';
import Footer from './_Components/Footer/page';
import './globals.css'
import theme from '@/theme';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
// or `v1X-appRouter` if you are using Next.js v1X

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>

      </Provider>
    </html>
  );
}