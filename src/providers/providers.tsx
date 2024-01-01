import { LenisProvider } from "@/providers/lenis-provider";
import { FramerProvider } from "@/providers/framer-provider";
import { JotaiProvider } from "@/providers/jotai-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <LenisProvider>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FramerProvider>{children}</FramerProvider>
        </ThemeProvider>
      </LenisProvider>
    </JotaiProvider>
  );
}
