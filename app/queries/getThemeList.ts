import { apiClient } from "@/lib/reactQueryProvider";
import { QueryConfigOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosResponse } from "axios";

type Request = void;
type Response = { id: number; title: string; timeLimit: number }[];

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
  const info = useQuery<Response, Request>({
    queryKey: QUERY_KEY,
    queryFn: () => getThemeList(configOptions?.config),
    ...configOptions?.options,
  });

  return info;
};
