"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, cities } from "@/lib/constants/filters";

interface LocationSectionProps {
  country: string;
  city: string;
  onCountryChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

export function LocationSection({
  country,
  city,
  onCountryChange,
  onCityChange,
}: LocationSectionProps) {
  return (
    <div className="space-y-4 px-1">
      <h4 className="font-medium text-muted-foreground">Location</h4>
      <div className="space-y-4">
        <Select value={country} onValueChange={onCountryChange}>
          <SelectTrigger className="text-neutral-400 hover:text-muted-foreground">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-200 text-muted-foreground">
            {countries.map((country) => (
              <SelectItem
                key={country.value}
                value={country.value}
                className="focus:bg-rose-500 focus:text-neutral-100"
              >
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={city} onValueChange={onCityChange}>
          <SelectTrigger className="text-neutral-400 hover:text-muted-foreground">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-200 text-muted-foreground">
            {country &&
              cities[country as keyof typeof cities]?.map((city) => (
                <SelectItem
                  key={city.value}
                  value={city.value}
                  className="focus:bg-rose-500 focus:text-neutral-100"
                >
                  {city.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
