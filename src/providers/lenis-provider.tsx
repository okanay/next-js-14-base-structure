"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useSetAtom, atom } from "jotai";
import { LenisInstance } from "@studio-freight/react-lenis";

export const lenisScrollControlAtom = atom<LenisInstance | undefined>(
  undefined
);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const setLenisValue = useSetAtom(lenisScrollControlAtom);

  const lenis = useLenis((lenis) => {
    setLenisValue(lenis);
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
