"use client";

import { Plus } from "lucide-react";
import { useCallback } from "react";

import { useDialog } from "@/common/components/functional/dialog";
import { Button } from "@/common/components/ui/button";
import { isErr } from "@/common/lib/result";

import { useAddTodo } from "@/model/todo/hooks/add";
import { createNewTodo } from "@/model/todo/lib/createNew";

import { useCurrentUser } from "@/model/user/hooks/currentUser";

export const CreateNewTodoButton = () => {
  const { openErrorDialog } = useDialog();
  const { mutateAsync } = useAddTodo();
  const [currentUser] = useCurrentUser();

  const createNew = useCallback(async () => {
    const newTodo = createNewTodo();
    const result = await mutateAsync({ ...newTodo, assignee: currentUser });
    if (isErr(result)) {
      openErrorDialog();
    }
  }, [currentUser, mutateAsync, openErrorDialog]);

  return (
    <Button variant='ghost' className='rounded-full px-2' onClick={createNew}>
      <Plus />
    </Button>
  );
};
