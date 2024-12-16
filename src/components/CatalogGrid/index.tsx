"use client";

import { useState } from "react";
import { CatalogCard } from "../Members/CatalogCard";
import { members } from "@/lib/data/members";
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

interface CatalogGridProps {
  title: string;
  itemsPerPage?: number;
}

export function CatalogGrid({ title, itemsPerPage = 8 }: CatalogGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(members.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = members.slice(indexOfFirstItem, indexOfLastItem);

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
          {currentItems.map((member) => (
            <CatalogCard key={Math.random()} {...member} />
          ))}
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
