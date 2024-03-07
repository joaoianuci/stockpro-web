"use client";

import { useQuery } from "@tanstack/react-query";
import fetcher from "../utils/axios";

export const useStocks = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: () => fetcher.get("/stocks").then((res) => res.data),
  });

  return {
    data,
    error,
    isLoading,
  };
};
