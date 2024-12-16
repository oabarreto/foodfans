"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AdditionalFiltersProps {
  verified: boolean;
  gender: string;
  onVerifiedChange: (checked: boolean) => void;
  onGenderChange: (value: string) => void;
}

export function AdditionalFilters({
  verified,
  gender,
  onVerifiedChange,
  onGenderChange,
}: AdditionalFiltersProps) {
  return (
    <div className="space-y-6 px-1">
      <div className="flex items-center space-x-2">
        <Switch
          id="verified"
          checked={verified}
          onCheckedChange={onVerifiedChange}
        />
        <Label className="text-muted-foreground" htmlFor="verified">
          Verified Users Only
        </Label>
      </div>

      <div className="space-y-3 pb-3">
        <Label className="text-muted-foreground text-md" htmlFor="gender">
          Gender
        </Label>
        <RadioGroup value={gender} onValueChange={onGenderChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="text-muted-foreground font-normal">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male" className="text-muted-foreground font-normal">
              Male
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label
              htmlFor="female"
              className="text-muted-foreground font-normal"
            >
              Female
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label
              htmlFor="other"
              className="text-muted-foreground font-normal"
            >
              Other
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
