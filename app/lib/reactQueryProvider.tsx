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
import { useSnackBarWrite } from "@/components/atoms/snackBar.atom";

const accessToken = getAccessToken();

export const apiClient = axios.create({
  withCredentials: true,
  headers: {
    ...(accessToken && {
      Authorization: `Bearer ${accessToken.replace(/^"(.*)"$/, "$1")}`,
    }),
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Authorization 헤더 삭제
      delete apiClient.defaults.headers.common.Authorization;
    }
    return Promise.reject(error);
  }
);

type ErrorResponse = {
  response: {
    data: {
      code: number;
      message: string;
    };
    status: number;
  };
};

type DataResponse = {
  code: number;
  message: string;
};

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const setIsLoggedIn = useIsLoggedInWrite();
  const setSnackBar = useSnackBarWrite();
  const queryCache = new QueryCache({
    onSettled: (data, error) => {
      if (
        (error as ErrorResponse)?.response?.data?.code === 401 ||
        (error as ErrorResponse)?.response?.data?.code === 400 ||
        (error as ErrorResponse).response.status === 401 ||
        (error as ErrorResponse).response.status === 400 ||
        (data as DataResponse)?.code === 401 ||
        (data as DataResponse)?.code === 400
      ) {
        removeAccessToken();
        setIsLoggedIn(false);
        delete apiClient.defaults.headers.common.Authorization;
      }
    },
    onError: (error) => {
      const { response } = error as ErrorResponse;
      if (response?.data?.message) {
        setSnackBar({
          isOpen: true,
          message: `${(error as any)?.response?.data?.message || error}`,
        });
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
