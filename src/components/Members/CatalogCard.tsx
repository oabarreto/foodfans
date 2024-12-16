"use client";

import { Star, CheckIcon, VerifiedIcon } from "lucide-react";
interface CatalogCardProps {
  name: string;
  description?: string;
  imageUrl: string;
  isExclusive?: boolean;
  rating?: number;
  verified?: boolean;
}

export function CatalogCard({
  name,
  description,
  imageUrl,
  isExclusive,
  rating,
  verified,
}: CatalogCardProps) {
  return (
    <div className="flex flex-col justify-between w-80  bg-neutral-100 my-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[32rem] object-cover"
        />
        {isExclusive && (
          <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Exclusive
          </div>
        )}

        <div className="absolute bottom-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/75 to-transparent p-4 w-full flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-neutral-100 mb-1">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-neutral-300 mb-2 line-clamp-2">
              {description}
            </p>
          )}

          {(verified || rating) && (
            <div className="flex flex-row items-center justify-between">
              {verified && (
                <div className="flex flex-row items-center gap-1 my-2">
                  <VerifiedIcon
                    className={"w-6 h-6  text-blue-400 rounded-sm"}
                  />
                  <span className="text-sm font-semibold text-neutral-200">
                    Verified
                  </span>
                </div>
              )}
              {rating && (
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-center mt-4">
            <button className="px-4 py-2 font-medium bg-rose-400 text-white hover:text-rose-400 hover:shadow-sm rounded-md hover:bg-neutral-200 transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
