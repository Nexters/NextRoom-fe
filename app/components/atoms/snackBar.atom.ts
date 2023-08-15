import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface Error {
  isOpen: boolean;
  message: string;
}
const snackInfo = atom<Error>({
  key: "snackInfo",
  default: { isOpen: false, message: "" },
});

export const useSnackBarInfo = () => useRecoilState(snackInfo);
export const useSnackBarValue = () => useRecoilValue(snackInfo);
export const useSnackBarWrite = () => useSetRecoilState(snackInfo);
