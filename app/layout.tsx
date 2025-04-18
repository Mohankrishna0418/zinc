import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Oxanium } from "next/font/google";
import LoadingProvider from "@/components/LoadingProvider";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Mohan Krishna",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oxanium.className}>
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