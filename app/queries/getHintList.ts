import { apiClient } from "@/lib/reactQueryProvider";
import { QueryConfigOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosResponse } from "axios";

type Request = { themeId: number };
type Response = {
  id: number;
  hintTitle: string;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
}[];

const URL_PATH = `/v1/hint`;
export const QUERY_KEY = [URL_PATH];

export const getHintList = async (
  req: Request,
  config?: AxiosRequestConfig
) => {
  const res = await apiClient.get<Request, AxiosResponse<Response>>(
    `${URL_PATH}?themeId=${req.themeId}`,
    {
      ...config,
      params: {
        ...config?.params,
      },
    }
  );

  return res.data;
};

export const useGetHintList = (
  req: Request,
  configOptions?: QueryConfigOptions
) => {
  const info = useQuery<Response, Request>({
    queryKey: QUERY_KEY,
    queryFn: () => getHintList(req, configOptions?.config),
    ...configOptions?.options,
  });

  return info;
};
