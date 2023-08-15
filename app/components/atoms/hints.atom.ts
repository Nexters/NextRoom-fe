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

type IsOpenDeleteDialogState = {
  isOpen: boolean;
  id: number;
};

const isOpenDeleteDialogState = atom<IsOpenDeleteDialogState>({
  key: "isOpenDeleteDialogState",
  default: { isOpen: false, id: 0 },
});

export const useIsOpenDeleteDialogState = () =>
  useRecoilState(isOpenDeleteDialogState);
export const useIsOpenDeleteDialogStateValue = () =>
  useRecoilValue(isOpenDeleteDialogState);
export const useIsOpenDeleteDialogStateWrite = () =>
  useSetRecoilState(isOpenDeleteDialogState);

const isActiveHintItemState = atom<number>({
  key: "isActiveHintItemState",
  default: 0,
});

export const useIsActiveHintItemState = () =>
  useRecoilState(isActiveHintItemState);
export const useIsActiveHintItemStateValue = () =>
  useRecoilValue(isActiveHintItemState);
export const useIsActiveHintItemStateWrite = () =>
  useSetRecoilState(isActiveHintItemState);
