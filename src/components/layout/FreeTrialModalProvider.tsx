"use client";

import { createContext, useContext, useState, useCallback } from "react";
import FreeTrialModal from "./FreeTrialModal";

const FreeTrialModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useFreeTrialModal() {
  return useContext(FreeTrialModalContext);
}

export default function FreeTrialModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <FreeTrialModalContext.Provider value={{ open }}>
      {children}
      <FreeTrialModal isOpen={isOpen} onClose={close} />
    </FreeTrialModalContext.Provider>
  );
}
