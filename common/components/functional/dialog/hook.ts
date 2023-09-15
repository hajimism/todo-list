import { useAtom } from "jotai";
import { useCallback } from "react";

import { dialogAtom } from "@/common/components/functional/dialog/atom";
import type { DialogProps } from "@/common/components/functional/dialog/type";

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

  const toggle = useCallback(
    (open: boolean) => {
      setState((prev) => ({ ...prev, open }));
    },
    [setState]
  );

  return { dialog, openDialog, toggle };
};
