import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

const themeState = atom<boolean>({
  key: "themeState",
  default: { title: "", timeLimit:0 }
});

export const useThemeState = () => useRecoilState(themeState);
export const useThemeStateValue = () => useRecoilValue(themeState);
export const useThemeStateWrite = () => useSetRecoilState(themeState);
