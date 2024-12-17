"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormFieldProps } from "@/lib/types/form";
import { Controller, FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "../ui/switch";

export function FormField<T extends FieldValues>({
  id,
  control,
  name,
  label,
  type = "text",
  placeholder,
  error,
  options,
}: FormFieldProps<T>) {
  if (type === "select" && options) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <Label className="text-muted-foreground" htmlFor={id}>
              {label}
            </Label>
            <Select {...field}>
              <SelectTrigger className="text-neutral-400 hover:text-muted-foreground">
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-200 text-muted-foreground">
                {options.map((option) => (
                  <SelectItem
                    className="focus:bg-rose-500 focus:text-neutral-100"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )}
      />
    );
  }

  if (type === "switch") {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex items-center space-x-2">
            <Switch id={id} {...field} />
            <Label className="text-muted-foreground" htmlFor={id}>
              {label}
            </Label>
          </div>
        )}
      />
    );
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="space-y-2">
          <Label className="text-muted-foreground" htmlFor={id}>
            {label}
          </Label>
          <Input id={id} type={type} placeholder={placeholder} {...field} />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      )}
    />
  );
}
