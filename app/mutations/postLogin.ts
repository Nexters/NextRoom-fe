import { apiClient } from "@/lib/reactQueryProvider";
import { ApiResponse, MutationConfigOptions } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { setAccessToken } from "@/uilts/localStorage";
import { useIsLoggedInWrite } from "@/components/atoms/account.atom";

interface Request {
  adminCode: string;
}

interface LoginResponse {
  accessToken: string;
  accessTokenExpiresIn: number;
  grantType: string;
  refereshToken: string;
}

type Response = ApiResponse<LoginResponse>;

const URL_PATH = `/v1/auth/login`;
const MUTATION_KEY = [URL_PATH];

export const postLogin = async ({ adminCode }: Request) => {
  const data: Request = { adminCode };
  const res = await apiClient.post<Request, AxiosResponse<Response>>(
    URL_PATH,
    data
  );

  return res.data;
};

export const usePostLogin = (configOptions?: MutationConfigOptions) => {
  const setIsLoggedIn = useIsLoggedInWrite();

  const info = useMutation<Response, void, Request, void>({
    mutationKey: MUTATION_KEY,
    mutationFn: (req) => postLogin(req),
    ...configOptions?.options,
    onSuccess: (res) => {
      const { data } = res;

      if (data?.accessToken) {
        setAccessToken(data.accessToken);
        setIsLoggedIn(true);
      }
    },
    onSettled: () => {
      //   console.log("항상 실행");
    },
  });

  return info;
};
