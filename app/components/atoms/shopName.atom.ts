import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

const shopNameState = atom<string>({
  key: "shopName",
  default: "",
});

export const useSetShopName = () => useRecoilState(shopNameState);
export const useSetShopNameValue = () => useRecoilValue(shopNameState);
export const useSetShopNameWrite = () => useSetRecoilState(shopNameState);
