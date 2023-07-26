import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface Modal {
  isOpen: boolean;
  type: "post" | "put";
}
const modalState = atom<Modal>({
  key: "modalState",
  default: { isOpen: false, type : "post" },
});

export const useModalState = () => useRecoilState(modalState);
export const useModalStateValue = () => useRecoilValue(modalState);
export const useModalStateWrite = () => useSetRecoilState(modalState);
