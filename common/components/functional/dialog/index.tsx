"use client";

import { useCallback } from "react";

import { useDialog } from "@/common/components/functional/dialog/hook";
import { Button } from "@/common/components/ui/button";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Dialog as DialogBase,
  DialogFooter,
} from "@/common/components/ui/dialog";
import { cn } from "@/common/lib/cn";

const Dialog = () => {
  const { dialog, toggle } = useDialog();
  const isDestructive = dialog.variant === "destructive";

  const close = useCallback(() => {
    toggle(false);
  }, [toggle]);

  return (
    <DialogBase open={dialog.open} onOpenChange={toggle}>
      <DialogContent>
        <DialogHeader>
          {dialog.title && (
            <DialogTitle className={cn(isDestructive && "text-destructive")}>
              {dialog.title}
            </DialogTitle>
          )}
          <DialogDescription>{dialog.message}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='secondary' onClick={close}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogBase>
  );
};

export { Dialog, useDialog };
