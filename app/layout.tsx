import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/providers/theme-provider";
import { neueMontreal } from "./fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Rodrigo Alarcón",
  description: "Rodrigo Alarcón portafolio web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neueMontreal.variable} antialiased bg-[url(/noise.png)] bg-repeat`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
