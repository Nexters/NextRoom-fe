import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  selector,
} from "recoil";

interface AccountInfo {
  shopCode: string;
}

const accountInfoState = atom<Partial<AccountInfo>>({
  key: "accountInfo",
  default: { shopCode: undefined },
});

export const useAccountInfo = () => useRecoilState(accountInfoState);
export const useAccountInfoValue = () => useRecoilValue(accountInfoState);
export const useAccountInfoWrite = () => useSetRecoilState(accountInfoState);

const isLoggedInState = selector<boolean>({
  key: "isLoggedIn",
  get: ({ get }) => {
    const accountInfo = get(accountInfoState);
    return !!accountInfo?.shopCode;
  },
});

export const useIsLoggedInValue = () => useRecoilValue(isLoggedInState);
