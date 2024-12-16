"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface ButtonOption {
  id: string;
  label: string;
}

interface ButtonGroupProps {
  options: ButtonOption[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function ButtonGroup({
  options,
  selectedId,
  onChange,
  className,
}: ButtonGroupProps) {
  return (
    <div className={cn("inline-flex rounded-md shadow-sm", className)}>
      {options.map((option, index) => (
        <Button
          key={Math.random()}
          variant={selectedId === option.id ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(option.id)}
          className={cn(
            "px-8 py-2 transition-all text-rose-400 hover:text-rose-400",
            index === 0 && "rounded-r-none",
            index === options.length - 1 && "rounded-l-none",
            index !== 0 && index !== options.length - 1 && "rounded-none",
            index !== 0 && "-ml-px",
            selectedId === option.id
              ? "z-10 relative bg-rose-400 text-primary-foreground hover:bg-neutral-300"
              : "hover:bg-muted"
          )}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
