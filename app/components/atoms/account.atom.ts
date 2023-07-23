import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
});

export const useIsLoggedIn = () => useRecoilState(isLoggedInState);
export const useIsLoggedInValue = () => useRecoilValue(isLoggedInState);
export const useIsLoggedInWrite = () => useSetRecoilState(isLoggedInState);
