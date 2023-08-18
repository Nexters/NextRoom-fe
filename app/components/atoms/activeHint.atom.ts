import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface ActiveHint {
  isOpen: boolean;
  type: "post" | "put";
}

const activeHintState = atom<ActiveHint>({
  key: "activeHint",
  default: { isOpen: false, type: "post" },
});

export const useActiveHintState = () => useRecoilState(activeHintState);
export const useActiveHintStateValue = () => useRecoilValue(activeHintState);
export const useActiveHintStateWrite = () => useSetRecoilState(activeHintState);
