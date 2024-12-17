"use client";

import { useState } from "react";
import { MembersCarousel } from "@/components/Members/MembersCarousel";
import { ButtonGroup } from "@/components/ButtonGroup";
import { FastFilter } from "@/components/FastFilter";

import { CatalogGrid } from "@/components/CatalogGrid";
import { FilterDialog } from "@/components/Filters/filter-dialog";
import { useMetaData } from "@/lib/hooks/use-metaData";

export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState("WOMAN");
  const [selectedLocation, setSelectedLocation] = useState("");

  const { locations } = useMetaData();

  const handleTypesChange = (id: string) => {
    setSelectedTypes(id);
  };

  const handleLocationSelect = (id: string) => {
    setSelectedLocation(id);
  };

  return (
    <main className="flex flex-col flex-1 container mx-auto bg-neutral-100">
      <div className="flex-1 mt-6 px-8">
        <p className="text-md text-muted-foreground font-medium mb-4">
          Select category
        </p>
        <div className="flex justify-center sm:justify-start">
          <ButtonGroup
            options={[
              { id: "WOMAN", label: "Woman" },
              { id: "MASSAGE", label: "Massage" },
              { id: "TRANS", label: "Trans" },
              { id: "MAN", label: "Man" },
            ]}
            selectedId={selectedTypes}
            onChange={handleTypesChange}
          />
        </div>
      </div>
      <div className="p-8 w-full h-auto">
        <MembersCarousel type="catalog" selectedTypes={selectedTypes} />
      </div>
      <div className="px-8 w-full">
        <FastFilter
          label="Fast Filter - Locations"
          options={locations.map((loc) => ({ id: loc.id, label: loc.name }))}
          selectedId={selectedLocation}
          onSelect={handleLocationSelect}
        />
      </div>
      <div>
        <FilterDialog />
      </div>
      <div className="flex w-full">
        <CatalogGrid selectedTypes={selectedTypes} />
      </div>
    </main>
  );
}
