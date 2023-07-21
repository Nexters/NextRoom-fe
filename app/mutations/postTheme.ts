import { apiClient } from "@/lib/reactQueryProvider";
import { QUERY_KEY } from "@/queries/getThemeList";
import { MutationConfigOptions } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface Request {
  title: string;
  timeLimit: number;
}
type Response = void;

const URL_PATH = `/v1/theme`;
const MUTATION_KEY = [URL_PATH];

export const postTheme = async (req: Request) => {
  const res = await apiClient.post<Request, AxiosResponse<Response>>(
    URL_PATH,
    req
  );

  return res.data;
};

export const usePostTheme = (configOptions?: MutationConfigOptions) => {
  const queryClient = useQueryClient();

  const info = useMutation<Response, void, Request, void>({
    mutationKey: MUTATION_KEY,
    mutationFn: (req) => postTheme(req),
    ...configOptions?.options,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
      // console.log("성공 시 실행")
    },
    onSettled: () => {
      //   console.log("항상 실행");
    },
  });

  return info;
};
