import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import LoadingProvider from "@/components/LoadingProvider";

import { Josefin_Sans } from "next/font/google";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});


export const metadata: Metadata = {
  title: "Mohan Krishna",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={josefin.className}>
        <ThemeProvider attribute="class" enableSystem>
          <Theme radius="medium" accentColor="violet">
            <LoadingProvider>{children}</LoadingProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;