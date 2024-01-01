import type { Metadata } from "next";
import inter from "@/assets/fonts/inter";
import "./globals.css";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Project Title",
  description: "Project Index Page Description",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
