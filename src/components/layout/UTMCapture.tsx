"use client";

import { useEffect } from "react";
import { captureUTM } from "@/utils/utm";

/**
 * Client component that captures UTM parameters on page load.
 * Renders nothing - just runs the capture logic.
 */
export default function UTMCapture() {
  useEffect(() => {
    captureUTM();
  }, []);

  return null;
}
