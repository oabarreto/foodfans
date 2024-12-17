"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

interface Location {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface MetaDataResponse {
  locations: Location[];
  categories: Category[];
}

export function useMetaData() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetaData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get<MetaDataResponse>("/meta");
        setLocations(response.data.locations);
        setCategories(response.data.categories);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("Error fetching metadata:", err.message);
        setError("Failed to load metadata.");
      } finally {
        setLoading(false);
      }
    };

    fetchMetaData();
  }, []);

  return { locations, categories, loading, error };
}
