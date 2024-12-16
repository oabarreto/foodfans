"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { members } from "@/lib/data/members";
import { MemberCard } from "./MemberCard";
import { CatalogCard } from "./CatalogCard";

interface CarouselProps {
  type?: "circle" | "catalog";
}

export function MembersCarousel({ type = "circle" }: CarouselProps) {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {members.map((member, index) => (
            <CarouselItem key={index} className="basis-auto">
              {type === "circle" ? (
                <MemberCard {...member} />
              ) : (
                <CatalogCard {...member} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 bg-white border border-gray-200 text-rose-500 hover:text-neutral-500 hover:border-rose-400" />
        <CarouselNext className="absolute -right-4 bg-white border border-gray-200 text-rose-500 hover:text-neutral-500 hover:border-rose-400" />
      </Carousel>
    </div>
  );
}
