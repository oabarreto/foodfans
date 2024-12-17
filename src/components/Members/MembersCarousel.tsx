"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CatalogCard } from "./CatalogCard";
import { useHomeListings } from "@/lib/hooks/use-home";

interface CarouselProps {
  type?: "circle" | "catalog";
  selectedTypes: string;
}

export function MembersCarousel({ selectedTypes }: CarouselProps) {
  const {
    data: listings,
    loading,
    error,
  } = useHomeListings({ types: selectedTypes });

  return (
    <div className="relative w-full">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && listings && listings.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {listings.map((listing) => {
              const cardImage = listing.media.find((m) => m.isCard)?.url || "";

              return (
                <CarouselItem key={listing.id} className="basis-auto">
                  <CatalogCard
                    name={listing.user.name}
                    description={listing.description}
                    imageUrl={process.env.NEXT_PUBLIC_API_BASE_URL + cardImage}
                    subscription={listing.user.subscription.name}
                    verified={listing.verified}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 bg-white border border-gray-200 text-rose-500 hover:text-neutral-500 hover:border-rose-400" />
          <CarouselNext className="absolute -right-4 bg-white border border-gray-200 text-rose-500 hover:text-neutral-500 hover:border-rose-400" />
        </Carousel>
      ) : (
        !loading && <p>No listings found.</p>
      )}
    </div>
  );
}
