"use client";

import { PropsWithChildren, useState } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getAccessToken } from "@/uilts/localStorage";

const accessToken = getAccessToken();

export const apiClient = axios.create({
  withCredentials: true,
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
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
