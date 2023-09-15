import { atom } from "jotai";

import type { DialogProps } from "@/common/components/functional/dialog/type";

export const dialogAtom = atom<DialogProps>({
  open: false,
  message: "",
});
