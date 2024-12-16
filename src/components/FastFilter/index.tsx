"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export interface ButtonOption {
  id: string;
  label: string;
}

interface FastFilterProps {
  label: string;
  options: ButtonOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function FastFilter({
  label,
  options,
  selectedId,
  onSelect,
  className,
}: FastFilterProps) {
  return (
    <div className={cn("flex flex-col gap-4 p-2 border-b", className)}>
      <span className="text-md text-muted-foreground font-medium">{label}</span>
      <ScrollArea className="flex whitespace-nowrap">
        <div className="flex w-max mb-4">
          {options.map((option, index) => (
            <Button
              key={Math.random()}
              variant={selectedId === option.id ? "default" : "outline"}
              size="sm"
              onClick={() => onSelect(option.id)}
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
