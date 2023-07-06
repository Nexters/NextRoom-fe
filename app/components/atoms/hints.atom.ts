import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

const hintState = atom<number>({
  key: "hintState",
  default: 1,
});

export const useHintState = () => useRecoilState(hintState);
export const useHintStateValue = () => useRecoilValue(hintState);
export const useHintStateWrite = () => useSetRecoilState(hintState);
