"use client";

import { useFreeTrialModal } from "@/components/layout/FreeTrialModalProvider";
import { trackTrialBookingClick } from "@/utils/analytics";

interface BookTrialButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function BookTrialButton({ className, children }: BookTrialButtonProps) {
  const { open } = useFreeTrialModal();
  const handleClick = () => {
    trackTrialBookingClick("book_trial_button");
    open();
  };
  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
