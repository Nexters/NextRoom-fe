"use client";

import { PropsWithChildren, useState } from "react";
import axios from "axios";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getAccessToken, removeAccessToken } from "@/uilts/localStorage";
import { useIsLoggedInWrite } from "@/components/atoms/account.atom";

const accessToken = getAccessToken();

export const apiClient = axios.create({
  withCredentials: true,
  headers: {
    ...(accessToken && {
      Authorization: `Bearer ${accessToken.replace(/^"(.*)"$/, "$1")}`,
    }),
  },
});

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const setIsLoggedIn = useIsLoggedInWrite();
  const queryCache = new QueryCache({
    // TODO: change onSettled to onError
    onSettled: (data) => {
      // TODO: Type definition required
      if ((data as Record<string, string | number>)?.code === 401) {
        removeAccessToken();
        setIsLoggedIn(false);
      }
    },
  });

  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache,
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
