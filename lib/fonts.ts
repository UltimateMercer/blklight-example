import { JetBrains_Mono as FontMono, Barlow as FontSans, IBM_Plex_Serif as FontSerif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans"
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: "--font-mono"
});

export const fontSerif = FontSerif({
  subsets: ['latin'],
  weight:["200", "400", "500", "600", "700"],
  variable: "--font-serif"
})