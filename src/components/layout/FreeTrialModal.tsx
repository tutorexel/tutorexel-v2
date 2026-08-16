"use client";

import { useEffect, useCallback } from "react";
import { CALENDLY_URL } from "@/utils/externalLinks";
import "./FreeTrialModal.css";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          loading="lazy"
          src={CALENDLY_URL}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Book a meeting"
        />
      </div>
    </div>
  );
}
