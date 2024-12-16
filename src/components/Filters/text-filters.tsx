"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextFiltersProps {
  name: string;
  nickname: string;
  onNameChange: (value: string) => void;
  onNicknameChange: (value: string) => void;
}

export function TextFilters({
  name,
  nickname,
  onNameChange,
  onNicknameChange,
}: TextFiltersProps) {
  return (
    <div className="space-y-4 px-1">
      <h4 className="font-medium text-muted-foreground">Search</h4>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-muted-foreground" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Search by name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground" htmlFor="nickname">
            Nickname
          </Label>
          <Input
            id="nickname"
            placeholder="Search by nickname"
            value={nickname}
            onChange={(e) => onNicknameChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
