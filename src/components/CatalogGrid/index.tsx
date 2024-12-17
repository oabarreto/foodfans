"use client";

import { useEffect, useState } from "react";
import { CatalogCard } from "../Members/CatalogCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ListingResponse, useHomeListings } from "@/lib/hooks/use-home";

interface CatalogGridProps {
  title?: string;
  itemsPerPage?: number;
  selectedTypes: string;
}

export function CatalogGrid({
  title,
  itemsPerPage = 8,
  selectedTypes,
}: CatalogGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState<ListingResponse[]>([]);
  const { data: listings, loading } = useHomeListings({
    types: selectedTypes,
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
  });

  useEffect(() => {
    if (loading) {
      setPageItems([]); // Limpa os dados ao iniciar um novo request
    } else if (listings) {
      setPageItems(listings);
    }
  }, [loading, listings]);

  // Calculate total pages
  const totalPages = listings?.length
    ? Math.ceil(listings.length / itemsPerPage)
    : 1;

  // Generate page numbers array
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center w-auto mx-auto text-muted-foreground">
        {title}
      </h2>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {pageItems.map((listing) => {
            const cardImage = listing.media?.find((m) => m.isCard)?.url || "";
            return (
              <CatalogCard
                key={listing.id}
                name={listing.user.name}
                description={listing.description}
                imageUrl={process.env.NEXT_PUBLIC_API_BASE_URL + cardImage}
                subscription={listing.user.subscription?.name}
                verified={listing.verified}
              />
            );
          })}
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                className={cn(
                  "text-rose-400 hover:text-rose-400 transition-all",
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                )}
              />
            </PaginationItem>

            {pageNumbers.map((number) => {
              // Show first page, current page, last page, and pages around current
              const shouldShow =
                number === 1 ||
                number === totalPages ||
                Math.abs(currentPage - number) <= 1;

              if (!shouldShow) {
                // Show ellipsis for skipped pages
                if (number === 2 || number === totalPages - 1) {
                  return (
                    <PaginationItem key={`ellipsis-${number}`}>
                      <PaginationEllipsis className="text-muted-foreground" />
                    </PaginationItem>
                  );
                }
                return null;
              }

              return (
                <PaginationItem key={number}>
                  <PaginationLink
                    onClick={() => handlePageChange(number)}
                    isActive={currentPage === number}
                    className={`cursor-pointer ${
                      currentPage === number
                        ? "bg-neutral-300 text-rose-400 hover:bg-neutral-200 hover:text-rose-400"
                        : "text-rose-400 hover:text-muted-foreground"
                    }`}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                className={cn(
                  "text-rose-400 hover:text-rose-400 transition-all",
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
