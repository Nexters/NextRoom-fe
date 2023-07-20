import { apiClient } from "@/lib/reactQueryProvider";
import { MutationConfigOptions } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useAccountInfoWrite } from "../components/atoms/account.atom";

interface Request {
  shopCode: string;
}
type Response = void;

const URL_PATH = `/v1/login`;
const MUTATION_KEY = [URL_PATH];

export const postLogin = async ({ shopCode }: Request) => {
  const data: Request = { shopCode };
  const res = await apiClient.post<Request, AxiosResponse<Response>>(
    URL_PATH,
    data
  );

  return res.data;
};

export const usePostLogin = (configOptions?: MutationConfigOptions) => {
  const setAccountInfo = useAccountInfoWrite();

  const info = useMutation<Response, void, Request, void>({
    mutationKey: MUTATION_KEY,
    mutationFn: (req) => postLogin(req),
    ...configOptions?.options,
    onSuccess: (_, req) => {
      const { shopCode = "" } = req;
      setAccountInfo({ shopCode });
    },
    onSettled: () => {
      //   console.log("항상 실행");
    },
  });

  return info;
};
