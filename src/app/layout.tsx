import Header from "@/sections/header";
import type { Metadata } from "next";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import AppThemeProvider from "@/context/AppThemeContext";

export const metadata: Metadata = {
  title: "포트폴리오 | 조가람",
  description: "개발자 조가람입니다.",
  icons: {
    icon: "/assets/icon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <AppThemeProvider>
            <InitColorSchemeScript attribute="class" />
            <Header />
            {children}
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
