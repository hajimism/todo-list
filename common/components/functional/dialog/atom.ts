import type { DialogProps } from "./type";

import { atom } from "jotai";

export const dialogAtom = atom<DialogProps>({
  open: false,
  message: "",
});
