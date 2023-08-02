import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface SelectedTheme {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

const selectedThemeState = atom<SelectedTheme>({
  key: "selectedTheme",
  default: { id: 0, title: "", timeLimit: 0, hintLimit: 0 },
});

export const useSelectedTheme = () => useRecoilState(selectedThemeState);
export const useSelectedThemeValue = () => useRecoilValue(selectedThemeState);
export const useSelectedThemeWrite = () =>
  useSetRecoilState(selectedThemeState);
