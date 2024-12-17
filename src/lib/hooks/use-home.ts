"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

interface ListingParams {
  locations?: string[];
  categories?: string[];
  types?: string;
  search?: string;
  skip?: number;
  take?: number;
}

interface Media {
  id: string;
  url: string;
  isCard?: boolean;
}

interface Location {
  id: string;
  name: string;
}

interface Subscription {
  id: string;
  name: string;
}

interface User {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscription: Subscription;
  id: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
}

export interface ListingResponse {
  verified: boolean | undefined;
  id: string;
  title: string;
  description: string;
  location: Location;
  categories: { id: string; name: string }[];
  type: string;
  media: Media[];
  user: User;
}

export function useHomeListings(params: ListingParams) {
  const [data, setData] = useState<ListingResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams();

        if (params.locations) {
          params.locations.forEach((loc) =>
            queryParams.append("locations", loc)
          );
        }
        if (params.categories) {
          params.categories.forEach((cat) =>
            queryParams.append("categories", cat)
          );
        }
        if (params.types) {
          queryParams.append("types", params.types);
        }
        if (params.search) {
          queryParams.append("search", params.search);
        }
        if (params.skip !== undefined) {
          queryParams.append("skip", params.skip.toString());
        }
        if (params.take !== undefined) {
          queryParams.append("take", params.take.toString());
        }

        // Requisição GET com os parâmetros
        const response = await api.get<ListingResponse[]>(
          `/listings?${queryParams.toString()}`
        );

        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("Failed to fetch listings:", err.message);
        setError(err.response?.data?.message || "Failed to fetch listings.");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [
    params.categories,
    params.locations,
    params.search,
    params.skip,
    params.take,
    params.types,
  ]);

  return { data, loading, error };
}
