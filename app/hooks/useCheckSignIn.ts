import { useEffect } from "react";

import { apiClient } from "@/lib/reactQueryProvider";
import { getAccessToken } from "@/uilts/localStorage";

import { useIsLoggedIn } from "@/components/atoms/account.atom";

const useCheckSignIn = () => {
  const accessToken = getAccessToken();
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();

  useEffect(() => {
    if (accessToken) {
      apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken.replace(
        /^"(.*)"$/,
        "$1"
      )}`;
      setIsLoggedIn(true);
    }
  }, [accessToken, setIsLoggedIn]);

  return accessToken && isLoggedIn;
};

export default useCheckSignIn;
