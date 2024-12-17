"use client";
import { ChevronsUpDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { useState } from "react";

interface ServiceSectionProps {
  title: string;
  options: Array<{ id: string; label: string; checked: boolean }>;
  onChange: (id: string, checked: boolean) => void;
}

export function ServiceSection({
  title,
  options,
  onChange,
}: ServiceSectionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="font-medium text-muted-foreground">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0 bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-500"
          >
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 rounded-md border p-4">
        <div className="space-y-4 px-1">
          <div className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={option.checked}
                  onCheckedChange={(checked) =>
                    onChange(option.id, checked as boolean)
                  }
                />
                <label
                  htmlFor={option.id}
                  className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
