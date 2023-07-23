import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  selector,
} from "recoil";

interface AccountInfo {
  adminCode: string;
}

const accountInfoState = atom<Partial<AccountInfo>>({
  key: "accountInfo",
  default: { adminCode: undefined },
});

export const useAccountInfo = () => useRecoilState(accountInfoState);
export const useAccountInfoValue = () => useRecoilValue(accountInfoState);
export const useAccountInfoWrite = () => useSetRecoilState(accountInfoState);

const isLoggedInState = selector<boolean>({
  key: "isLoggedIn",
  get: ({ get }) => {
    const accountInfo = get(accountInfoState);
    return !!accountInfo?.adminCode;
  },
});

export const useIsLoggedInValue = () => useRecoilValue(isLoggedInState);
