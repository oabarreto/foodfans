"use client";

import { useState } from "react";
import { MembersCarousel } from "@/components/Members/MembersCarousel";
import { ButtonGroup, ButtonOption } from "@/components/ButtonGroup";
import { FastFilter } from "@/components/FastFilter";

import { CatalogGrid } from "@/components/CatalogGrid";
import { FilterDialog } from "@/components/Filters/filter-dialog";

const CategoryOptions: ButtonOption[] = [
  { id: "1", label: "Fruits" },
  { id: "2", label: "Gourmet" },
  { id: "3", label: "Fast-Food" },
];

const filtersOptions: ButtonOption[] = [
  { id: "1", label: "Pizza" },
  { id: "2", label: "Burger" },
  { id: "3", label: "Pasta" },
  { id: "4", label: "Sushi" },
  { id: "5", label: "Tacos" },
  { id: "6", label: "Salad" },
  { id: "7", label: "Steak" },
  { id: "8", label: "Soup" },
  { id: "9", label: "Fries" },
  { id: "10", label: "Ice Cream" },
  { id: "11", label: "Donut" },
  { id: "12", label: "Cake" },
  { id: "13", label: "Sandwich" },
  { id: "14", label: "Chicken" },
  { id: "15", label: "Fish" },
  { id: "16", label: "Shrimp" },
  { id: "17", label: "Pancakes" },
  { id: "18", label: "Waffles" },
  { id: "19", label: "Brownie" },
  { id: "20", label: "Hot Dog" },
  { id: "21", label: "Lasagna" },
  { id: "22", label: "Ramen" },
  { id: "23", label: "Burrito" },
  { id: "24", label: "Curry" },
  { id: "25", label: "Dumplings" },
  { id: "26", label: "Toast" },
  { id: "27", label: "Cheesecake" },
  { id: "28", label: "Cupcake" },
  { id: "29", label: "Muffin" },
  { id: "30", label: "Barbecue" },
  { id: "31", label: "Kebab" },
  { id: "32", label: "Falafel" },
  { id: "33", label: "Paella" },
  { id: "34", label: "Churros" },
  { id: "35", label: "Quiche" },
  { id: "36", label: "Casserole" },
  { id: "37", label: "Crepes" },
  { id: "38", label: "Omelette" },
  { id: "39", label: "Bagel" },
  { id: "40", label: "Granola" },
];

await new Promise((resolve) => setTimeout(resolve, 3000));

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    // You can add any additional logic here
    console.log("Selected category:", id);
  };

  const handleFilterSelect = (id: string) => {
    setSelectedFilter(id);
    // You can add any additional logic here
    console.log("Selected filter:", id);
  };

  return (
    <main className="flex flex-col flex-1 container mx-auto bg-neutral-100">
      <div className="flex-1 mt-6 px-8">
        <p className="text-md text-muted-foreground font-medium mb-4">
          Select category
        </p>
        <div className="flex justify-center sm:justify-start">
          <ButtonGroup
            options={CategoryOptions}
            selectedId={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
      <div className="p-8 w-full h-auto">
        <h1 className="text-2xl font-medium mb-4 w-auto mx-auto text-muted-foreground text-center">
          Servicers on selected location
        </h1>
        <MembersCarousel type="catalog" />
      </div>
      <div className="px-8 w-full">
        <FastFilter
          label="Fast Filter"
          options={filtersOptions}
          selectedId={selectedFilter}
          onSelect={handleFilterSelect}
        />
      </div>
      <div>
        <FilterDialog />
      </div>
      <div className="flex w-full">
        <CatalogGrid title={"Catalog"} />
      </div>
    </main>
  );
}
