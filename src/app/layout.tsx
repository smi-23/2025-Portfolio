import Header from "@/sections/header";
import type { Metadata } from "next";

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
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
