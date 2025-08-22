import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/providers/theme-provider";
import { Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: "Rodrigo Alarcón",
  description: "Rodrigo Alarcón portafolio web.",
};

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
