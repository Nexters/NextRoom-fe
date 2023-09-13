import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface ThemeInfo {
  id: number;
  title: string;
}

const currentThemeState = atom<ThemeInfo[]>({
  key: "currentTheme",
  default: [],
});

export const useCurrentTheme = () => useRecoilState(currentThemeState);
export const useCurrentThemeValue = () => useRecoilValue(currentThemeState);
export const useCurrentThemeWrite = () => useSetRecoilState(currentThemeState);
