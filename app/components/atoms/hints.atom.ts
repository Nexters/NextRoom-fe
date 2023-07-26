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

const isOpenAddAccordionState = atom<boolean>({
  key: "isOpenAddAccordionState",
  default: false,
});

export const useIsOpenAddAccordion = () =>
  useRecoilState(isOpenAddAccordionState);
export const useIsOpenAddAccordionValue = () =>
  useRecoilValue(isOpenAddAccordionState);
export const useIsOpenAddAccordionWrite = () =>
  useSetRecoilState(isOpenAddAccordionState);
