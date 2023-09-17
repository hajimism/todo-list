import { useAtom } from "jotai";
import { useCallback } from "react";

import { dialogAtom } from "@/common/components/functional/dialog/atom";
import type { DialogProps } from "@/common/components/functional/dialog/type";

const ERROR_DIALOG_DEFAULT_PROPS = {
  title: "Error!",
  message:
    "Sorry, something went wrong. Your changes might fail. Please reload and retry.",
  variant: "destructive",
} satisfies Omit<DialogProps, "open">;

export const useDialog = () => {
  const [dialog, setState] = useAtom(dialogAtom);

  const openDialog = useCallback(
    (props: Omit<DialogProps, "open">) => {
      setState({
        open: true,
        ...props,
      });
    },
    [setState]
  );

  const openErrorDialog = useCallback(
    (props?: Omit<DialogProps, "open"> | undefined) => {
      openDialog({ ...ERROR_DIALOG_DEFAULT_PROPS, ...props });
    },
    [openDialog]
  );

  const toggle = useCallback(
    (open: boolean) => {
      setState((prev) => ({ ...prev, open }));
    },
    [setState]
  );

  return { dialog, openDialog, openErrorDialog, toggle };
};
