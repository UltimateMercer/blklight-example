import "@/assets/blklight.scss";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

import { fontSans, fontMono, fontSerif } from "@/lib/fonts";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import ColorFilters from "@/components/color-filters";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [],
  creator: "Ultimate Mercer",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ultimatemercer",
  },
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-light-500 dark:bg-dark-500 font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontSerif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="block m-auto max-w-full">
            <div className="block">
              <NavigationBar />
              <div className="flex flex-1 flex-col max-w-full">{children}</div>
              <Footer />
            </div>
          </main>

          <Toaster />
          <ColorFilters />
        </ThemeProvider>
      </body>
    </html>
  );
}
