import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export interface FilterState {
  subject: string;
  category: string;
  type: string;
  sort: string;
  search: string;
}

const DEFAULT_FILTERS: FilterState = {
  subject: "",
  category: "",
  type: "",
  sort: "topPicks",
  search: "",
};

export function useFilterState() {
  const [searchParams, setSearchParams] = useSearchParams();

  const readFromUrl = useCallback((): FilterState => {
    return {
      subject: searchParams.get("subject") || "",
      category: searchParams.get("category") || "",
      type: searchParams.get("type") || "",
      sort: searchParams.get("sort") || "topPicks",
      search: searchParams.get("search") || "",
    };
  }, [searchParams]);

  const [filters, setFilters] = useState<FilterState>(readFromUrl);

  useEffect(() => {
    setFilters(readFromUrl());
  }, [readFromUrl]);

  const updateFilter = useCallback(
    (key: keyof FilterState, value: string) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);

      const params = new URLSearchParams();
      Object.entries(newFilters).forEach(([k, v]) => {
        if (v && v !== DEFAULT_FILTERS[k as keyof FilterState]) {
          params.set(k, v);
        }
      });
      setSearchParams(params, { replace: true });
    },
    [filters, setSearchParams]
  );

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  const hasActiveFilters =
    filters.subject !== "" ||
    filters.category !== "" ||
    filters.type !== "" ||
    filters.search !== "";

  return { filters, updateFilter, clearFilters, hasActiveFilters };
}
