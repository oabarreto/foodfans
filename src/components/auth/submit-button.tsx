"use client";

import { Button } from "@/components/ui/button";
import { SubmitButtonProps } from "@/lib/types/form";
import { Loader2 } from "lucide-react";

export function SubmitButton({ isSubmitting, text }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : text}
    </Button>
  );
}
