"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ServiceSection } from "./service-section";
import { LocationSection } from "./location-section";
import { TextFilters } from "./text-filters";
import { AdditionalFilters } from "./additional-filters";

import { categories } from "@/lib/constants/filters";
import type { FilterState } from "@/lib/types/filters";

export function FilterDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    foods: categories.foods.map((item) => ({
      ...item,
      checked: false,
    })),
    location: {
      country: "",
      city: "",
    },
    text: {
      name: "",
      nickname: "",
    },
    verified: false,
    gender: "all",
  });

  const updateCategoryFilter =
    (category: keyof typeof categories) => (id: string, checked: boolean) => {
      setFilters((prev) => ({
        ...prev,
        [category]: prev[category].map((item) =>
          item.id === id ? { ...item, checked } : item
        ),
      }));
    };

  const getAppliedFilters = () => {
    const applied: string[] = [];

    // Add category filters
    Object.entries(categories).forEach(([key]) => {
      filters[key as keyof typeof categories].forEach((item) => {
        if (item.checked) {
          applied.push(item.label);
        }
      });
    });

    // Add location filters
    if (filters.location.country) {
      applied.push(`Country: ${filters.location.country}`);
    }
    if (filters.location.city) {
      applied.push(`City: ${filters.location.city}`);
    }

    // Add text filters
    if (filters.text.name) {
      applied.push(`Name: ${filters.text.name}`);
    }
    if (filters.text.nickname) {
      applied.push(`Nickname: ${filters.text.nickname}`);
    }

    // Add additional filters
    if (filters.verified) {
      applied.push("Verified Only");
    }
    if (filters.gender !== "all") {
      applied.push(`Gender: ${filters.gender}`);
    }

    return applied;
  };

  const clearFilters = () => {
    setFilters({
      foods: categories.foods.map((item) => ({
        ...item,
        checked: false,
      })),
      location: {
        country: "",
        city: "",
      },
      text: {
        name: "",
        nickname: "",
      },
      verified: false,
      gender: "all",
    });
  };

  const appliedFilters = getAppliedFilters();

  return (
    <div className="w-full px-8 mt-4">
      <div className="flex flex-wrap items-center gap-4 px-2">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="gap-2 bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-500"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-neutral-100">
            <DialogHeader>
              <DialogTitle className="text-muted-foreground">
                Filter Options
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] pr-4">
              <div className="space-y-6 px-2">
                <TextFilters
                  name={filters.text.name}
                  nickname={filters.text.nickname}
                  onNameChange={(name) =>
                    setFilters((prev) => ({
                      ...prev,
                      text: { ...prev.text, name },
                    }))
                  }
                  onNicknameChange={(nickname) =>
                    setFilters((prev) => ({
                      ...prev,
                      text: { ...prev.text, nickname },
                    }))
                  }
                />

                <Separator />

                <ServiceSection
                  title="Foods"
                  options={filters.foods}
                  onChange={updateCategoryFilter("foods")}
                />

                <Separator />

                <LocationSection
                  country={filters.location.country}
                  city={filters.location.city}
                  onCountryChange={(country) =>
                    setFilters((prev) => ({
                      ...prev,
                      location: { country, city: "" },
                    }))
                  }
                  onCityChange={(city) =>
                    setFilters((prev) => ({
                      ...prev,
                      location: { ...prev.location, city },
                    }))
                  }
                />

                <Separator />

                <AdditionalFilters
                  verified={filters.verified}
                  gender={filters.gender}
                  onVerifiedChange={(verified) =>
                    setFilters((prev) => ({ ...prev, verified }))
                  }
                  onGenderChange={(gender) =>
                    setFilters((prev) => ({ ...prev, gender }))
                  }
                />
              </div>
            </ScrollArea>
            <div className="flex justify-between pt-4">
              <Button
                className="hover:bg-rose-500 bg-neutral-300 hover:text-neutral-100 text-rose-500"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
              <Button
                className="bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-500"
                onClick={() => setIsOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        {appliedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {appliedFilters.map((filter) => (
              <Badge
                key={filter}
                className="gap-1 hover:bg-rose-400 bg-neutral-200 hover:text-neutral-100 text-rose-500 font-medium py-2 border border-neutral-300 hover:border-rose-400"
              >
                {filter}
                <button
                  onClick={() => {
                    // Handle removing individual filters
                    const [type] = filter.split(": ");
                    if (type === "Country") {
                      setFilters((prev) => ({
                        ...prev,
                        location: { ...prev.location, country: "", city: "" },
                      }));
                    } else if (type === "City") {
                      setFilters((prev) => ({
                        ...prev,
                        location: { ...prev.location, city: "" },
                      }));
                    } else if (type === "Name") {
                      setFilters((prev) => ({
                        ...prev,
                        text: { ...prev.text, name: "" },
                      }));
                    } else if (type === "Nickname") {
                      setFilters((prev) => ({
                        ...prev,
                        text: { ...prev.text, nickname: "" },
                      }));
                    } else if (filter === "Verified Only") {
                      setFilters((prev) => ({ ...prev, verified: false }));
                    } else if (type === "Gender") {
                      setFilters((prev) => ({ ...prev, gender: "all" }));
                    } else {
                      // Handle category filters
                      Object.entries(categories).forEach(([key, options]) => {
                        const option = options.find(
                          (opt) => opt.label === filter
                        );
                        if (option) {
                          updateCategoryFilter(key as keyof typeof categories)(
                            option.id,
                            false
                          );
                        }
                      });
                    }
                  }}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-4 w-4 hover:text-neutral-100" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
