"use client";

import { PropsWithChildren, useState } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const apiClient = axios.create({
  withCredentials: false,
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "https://pokeapi.co/api/v2",
});

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
