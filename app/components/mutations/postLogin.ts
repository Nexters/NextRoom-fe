import { apiClient } from "@/lib/reactQueryProvider";
import { MutationConfigOptions } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAccountInfoWrite } from "../atoms/account.atom";

interface Request {
  shopCode: string;
}
type Reponse = void;

const URL_PATH = `/v1/login`;
const MUTATION_KEY = [URL_PATH];

// const axiosConfig: AxiosRequestConfig = {
//     params: {
//       themeId: 0,
//     },
//   };

export const postLogin = async ({ shopCode }: Request) => {
  const data: Request = { shopCode };
  const res = await apiClient.post<Request, AxiosResponse<Reponse>>(
    URL_PATH,
    data
  );

  return res.data;
};

export const usePostLogin = (configOptions?: MutationConfigOptions) => {
  const setAccountInfo = useAccountInfoWrite();

  const info = useMutation<Reponse, void, Request, void>({
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
