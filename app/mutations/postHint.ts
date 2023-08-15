import { useSnackBarWrite } from "@/components/atoms/snackBar.atom";

import { apiClient } from "@/lib/reactQueryProvider";
import { QUERY_KEY } from "@/queries/getHintList";
import { MutationConfigOptions } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface Request {
  themeId: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
}
type Response = void;

const URL_PATH = `/v1/hint`;
const MUTATION_KEY = [URL_PATH];

export const postHint = async (req: Request) => {
  const res = await apiClient.post<Request, AxiosResponse<Response>>(
    URL_PATH,
    req
  );

  return res.data;
};

export const usePostHint = (configOptions?: MutationConfigOptions) => {
  const queryClient = useQueryClient();
  const setSnackBar = useSnackBarWrite();

  const info = useMutation<Response, void, Request, void>({
    mutationKey: MUTATION_KEY,
    mutationFn: (req) => postHint(req),
    ...configOptions?.options,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
      // console.log("성공 시 실행")
      setSnackBar({
        isOpen: true,
        message: '힌트를 추가했습니다. 단말기에서 업데이트를 진행해 주세요.',
      });
    },
    onSettled: () => {
      //   console.log("항상 실행");
    },
    onError: (error) => {
      setSnackBar({
        isOpen: true,
        message: `${(error as any)?.response?.data?.message || error}`,
      });
    },
  });

  return info;
};
