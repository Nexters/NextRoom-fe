import { apiClient } from "@/lib/reactQueryProvider";
import { ApiResponse, QueryConfigOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosResponse } from "axios";

type Request = void;
export type Theme = { id: number; title: string; timeLimit: number };
export type Themes = Theme[];

type Response = ApiResponse<Themes>;

const URL_PATH = `/v1/theme`;
export const QUERY_KEY = [URL_PATH];

export const getThemeList = async (config?: AxiosRequestConfig) => {
  const res = await apiClient.get<Request, AxiosResponse<Response>>(URL_PATH, {
    ...config,
    params: {
      ...config?.params,
    },
  });

  return res.data;
};

export const useGetThemeList = (configOptions?: QueryConfigOptions) => {
  const info = useQuery<Response, Request, Themes>({
    queryKey: QUERY_KEY,
    queryFn: () => getThemeList(configOptions?.config),
    ...configOptions?.options,
    select: (res) => res.data,
  });

  return info;
};
