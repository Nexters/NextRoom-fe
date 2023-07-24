import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface Theme {
  id: number;
  title: string;
  timeLimit: number;
}

const themeState = atom<Theme>({
  key: "themeState",
  default: { id: 0, title: "", timeLimit: 0 },
});

export const useThemeState = () => useRecoilState(themeState);
export const useThemeStateValue = () => useRecoilValue(themeState);
export const useThemeStateWrite = () => useSetRecoilState(themeState);
