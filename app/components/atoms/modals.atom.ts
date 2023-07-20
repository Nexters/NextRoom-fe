import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState
} from "recoil";

const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const useModalState = () => useRecoilState(modalState);
export const useModalStateValue = () => useRecoilValue(modalState);
export const useModalStateWrite = () => useSetRecoilState(modalState);
